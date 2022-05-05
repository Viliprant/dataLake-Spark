import React, {useEffect, useState} from 'react';
import SubTpl from "../../../components/_template/sub.tpl";
import BlockCmn from "../../../components/_commons/block.cmn";
import {BAR_CHART, COLORS, DATAS, LINE, LINE_CHART} from "../../../ressources/utils/charts.utils";
import {UserData, UserData_2} from "../../../ressources/data/user.data";
import MeteoService from "../../../services/WebService/meteo.service";
import LodashUtils from "../../../ressources/utils/lodash.utils";
import {FormikControl} from "../../../ressources/utils/forms.utils";
import {Formik, Form} from "formik";
import {value} from "lodash/seq";
import {GET} from "../../../services/WebService/web.service";

function RechercheSub(props) {

    const [stations, setStations] = useState([])
    const [years, setYears] = useState([])

    const [filteredDatas, setFilteredDatas] = useState([])

    const [dataSets, setDataSets] = useState([])
    const [userData, setUserData] = useState({
        labels: LodashUtils.range(2016, 2020), // todo: from form get min year and max year
        datasets: [{
            label: "User Gained",
            data: UserData.map(data => data.userGain),
            backgroundColor: 'gold',
            borderColor: 'gold',
        }, {
            label: "User Gained 2",
            data: UserData_2.map(data => data.userGain),
            backgroundColor: 'blue',
            borderColor: 'blue',
        }

        ]

    })

    const initialValues = {
        station: "",
        anneMax: 2022,
        anneMin: 1980,
        datas_types: '',
        datas: ''


    }


    useEffect(() => {
        _initStationsList()
        _initYears()
        let dataSet = [];
        for (let i = 0; i < DATAS.length; i++) {
            let line = LINE.build(Object.keys({DATAS})[0], DATAS[i].map(d => d.userGain), COLORS[i])
            dataSet.push(line)
        }
        setUserData({
            labels: LodashUtils.range(2016, 2020),
            datasets: dataSet
        })
        setDataSets(dataSet)

    }, [])


    const submitRecherche = (values) => {
        console.log(values)
        GET(values.datas).then(res =>  {
            let final = res.filter(data => {
                return data.YEAR <= values.anneMax && data.YEAR >= values.anneMin && data.STATION === values.station
            }).map(data => data[values.datas_types])


            console.log(final)
        })

    }

    const _initStationsList = () => {
        MeteoService.getSTATIONS().then(res => {
            let _stations = []
            res.map(s => _stations.push({label: s.NAME, value: s.STATION}))
            setStations(_stations)
        })
    }

    const _initYears = () => {
        MeteoService.getSLP().then(res => {
            let _uniqueYears = new Set()
            let _ys = []
            res.map(s => _uniqueYears.add(s.YEAR))
            _uniqueYears.forEach(y => _ys.push({label: y, value: y}))
            _ys.sort((a, b) => a.label - b.label)
            setYears(_ys)
        })
    }

    return (
        <SubTpl titreProps={{titre: "recherche"}}>
            <div className="row row-cols-1 row-cols-lg-2 g-4">
                <BlockCmn className="col my-3 p-3 ">
                    <div className="card-ak border h-100 ">
                        MAP
                        {JSON.stringify(years)}
                    </div>
                </BlockCmn>
                <BlockCmn className="col my-3 p-3 ">
                    <div className=" border card-akb h-100">
                        <h3>Recheche de données météorologiques</h3>
                        <hr/>
                        <Formik initialValues={initialValues} onSubmit={submitRecherche}>
                            <Form>
                                <div className="row row-cols-1">
                                    <FormikControl control="select" name="station" label={"Stations"}
                                                   options={stations}/>
                                    <div className="row row-cols-2">
                                        <FormikControl control="select" options={years} name="anneeMin" label={"Début"}/>
                                        <FormikControl control="select" options={years} name="anneMax" label={"Fin"}/>
                                    </div>

                                    <FormikControl control="select" options={MeteoService.SELECTED_DATAS} name="datas"
                                                   label={"Données"}/>
                                    <FormikControl control="select" options={MeteoService.SELECTED_TYPES_DATA}
                                                   name="datas_types" label={"Types de données annuelle"}/>
                                </div>

                                <div className="mb-3 w-100 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary">Rechercher</button>
                                </div>
                            </Form>
                        </Formik>


                    </div>
                </BlockCmn>


            </div>
            <BlockCmn className="my-3 border p-3 w-100">
                <LINE_CHART data={userData}/>
            </BlockCmn>


        </SubTpl>
    );
}

export default RechercheSub;