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

    const [isLoaded, setIsLoaded] = useState(false)

    const [stations, setStations] = useState([])
    const [years, setYears] = useState([])

    const [filteredDatas, setFilteredDatas] = useState([])

    const [dataSets, setDataSets] = useState([])
    const [userData, setUserData] = useState({})

    const initialValues = {
        stations: [],
        anneeMax: 2022,
        anneeMin: 1980,
        datas_types: '',
        datas: ''
    }


    useEffect(() => {
        _initStationsList()
        _initYears()
        console.log("init",userData)
    }, [])


    const submitRecherche = (values) => {
        setIsLoaded(true)
        setDataSets([])
        console.log(values)

        values.stations.map(async (station, i) => {
            let res = await MeteoService.getSelectedDatas(values.datas)
            let final = res.filter(data => data.YEAR <= values.anneeMax && data.YEAR >= values.anneeMin && data.STATION === station
            ).map(data => {
                return {year: parseInt(data.YEAR), value: data[values.datas_types]}
            }).sort((a, b) => parseInt(a.year) - parseInt(b.year))

            let line = LINE.build(station, final, COLORS[i])
            console.log(line)
            setDataSets(datas => [...datas, line])


        })
        console.log('yeeaahhhhhhhh')
        setUserData({
            labels: LodashUtils.range(1980, 2022),
            datasets: dataSets
        })

        console.log("submit",userData)

    }

    const _initStationsList = () => {
        let _stations = MeteoService.getSTATIONS().then(res => {
            let _stations = []
            res.map(s => _stations.push({label: s.NAME, value: s.STATION}))
            setStations(_stations)
        })
    }

    const _initYears = () => {
        MeteoService.getSelectedDatas('temp').then(res => {
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
                        Ici il devrait y'avoir une map mais tu connais ligaments croisés

                        {JSON.stringify(dataSets)}
                    </div>
                </BlockCmn>
                <BlockCmn className="col my-3 p-3 ">
                    <div className=" border card-akb h-100">
                        <h3>Recheche de données météorologiques</h3>
                        <hr/>
                        <Formik initialValues={initialValues} onSubmit={submitRecherche}>
                            <Form>
                                <div className="row row-cols-1">
                                    <FormikControl control="select-multi" name="stations" label={"Stations"}
                                                   options={stations}/>
                                    <div className="row row-cols-2">
                                        <FormikControl control="select" options={years} name="anneeMin"
                                                       label={"Début"}/>
                                        <FormikControl control="select" options={years} name="anneeMax" label={"Fin"}/>
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
            {isLoaded && (
                <BlockCmn className="my-3 border p-3 w-100" id="chart">
                    <LINE_CHART data={userData}/>
                </BlockCmn>
            )}



        </SubTpl>
    );
}

export default RechercheSub;