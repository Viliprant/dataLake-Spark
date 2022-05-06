import React, {useEffect, useState} from 'react';
import SubTpl from "../../../components/_template/sub.tpl";
import BlockCmn from "../../../components/_commons/block.cmn";
import {COLORS, LINE, LINE_CHART} from "../../../ressources/utils/charts.utils";
import MeteoService from "../../../services/WebService/meteo.service";
import {FormikControl} from "../../../ressources/utils/forms.utils";
import {Formik, Form} from "formik";
import {SubViewTitre} from "../../../components/atoms/view.titre";

function RechercheSub({_stations = []}) {

    const [isLoaded, setIsLoaded] = useState(false)

    const [filters, setFilters] = useState([])

    const [stations, setStations] = useState([])
    const [years, setYears] = useState([])

    const [dataSets, setDataSets] = useState({
        datasets: [],
        labels: [],
    })

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
    }, [])


    const submitRecherche = async (values) => {
        if(values.stations.length === 0) values.stations = stations.map(station => station.value)
        setIsLoaded(true)
        setFilters({
            anneMin : values.anneeMin,
            anneMax: values.anneeMax,
            dataSelected: MeteoService.SELECTED_DATAS.find(sd => sd.value === values.datas).label,
            dataTypesSelected: MeteoService.SELECTED_TYPES_DATA.find(std => std.value === values.datas_types).label,
            stations: values.stations.length
        })
        const lines = []

        await Promise.all(
            values.stations.map(async (station, i) => {
                let res = await MeteoService.getSelectedDatas(values.datas)
                let final = res.filter(data => parseInt(data.YEAR) <= parseInt(values.anneeMax) && parseInt(data.YEAR) >= parseInt(values.anneeMin) && data.STATION === station
                ).map(data => {
                    return {year: parseInt(data.YEAR), value: data[values.datas_types]}
                }).sort((a, b) => parseInt(a.year) - parseInt(b.year))
                // console.log(final.map(obj => obj.value))
                let line = LINE.build(
                    stations.find(_station => _station.value === station).label,
                    final.map(obj => obj.value),
                    COLORS[i]
                )

               lines.push(line)
            }))
        setDataSets({
            datasets: lines,
            labels: years.map(year => year.value)
                .filter(year => parseInt(values.anneeMin) <= parseInt(year) && parseInt(year) <= parseInt(values.anneeMax)),
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
                    <div className="card-ak border h-100 d-flex align-items-center justify-content-around">
                        <p className="text-center">Ici il devrait y'avoir une map mais tu connais ligaments croisés</p>

                    </div>
                </BlockCmn>
                <BlockCmn className="col my-3 p-3 ">
                    <div className=" border card-akb h-100 p-3">
                        <h3>Recheche de données météorologiques</h3>
                        <hr/>
                        <Formik initialValues={initialValues} onSubmit={async (test) => await submitRecherche(test)}>
                            <Form>
                                <div className="row row-cols-1">
                                    <FormikControl control="select-multi" name="stations" label={"Stations"} options={stations}/>
                                    <div className="row row-cols-2 my-2">
                                        <FormikControl control="select" options={years} name="anneeMin" label={"Début"}/>
                                        <FormikControl control="select" options={years} name="anneeMax" label={"Fin"}/>
                                    </div>

                                    <FormikControl className="my-2 "control="select" options={MeteoService.SELECTED_DATAS} name="datas" label={"Données"}/>
                                    <FormikControl className="my-2" control="select" options={MeteoService.SELECTED_TYPES_DATA} name="datas_types" label={"Types de données annuelle"}/>
                                </div>

                                <div className="my-2 w-100 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary">Rechercher</button>
                                </div>
                            </Form>
                        </Formik>

                    </div>
                </BlockCmn>

            </div>
            {isLoaded && (
                <BlockCmn className="my-3 border p-3 w-100" id="chart">
                    <SubViewTitre className={"h6 p-5 text-center"} titre={`${filters.dataSelected} / ${filters.dataTypesSelected} entre les années ${filters.anneMin} à ${filters.anneMax} sur ${filters.stations} station(s).`}/>
                    <LINE_CHART data={dataSets}/>
                </BlockCmn>
            )}

        </SubTpl>
    );
}

export default RechercheSub;