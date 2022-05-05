import React, {useEffect, useState} from 'react';
import SubTpl from "../../../components/_template/sub.tpl";
import BlockCmn from "../../../components/_commons/block.cmn";
import {BAR_CHART, COLORS, DATAS, LINE, LINE_CHART} from "../../../ressources/utils/charts.utils";
import {UserData, UserData_2} from "../../../ressources/data/user.data";
import MeteoService from "../../../services/WebService/meteo.service";
import LodashUtils from "../../../ressources/utils/lodash.utils";

function RechercheSub(props) {

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

    const [formBeean, setFormBean] = useState({
        stations: [],
        yearMin: 1980,
        yearMax: 2022,
        donnes: ""
    })

    useEffect(() => {
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


    function changeMin() {
        return undefined;
    }

    function submitRecherche(e) {
        e.preventDefault()
        console.log(formBeean)
    }

    return (
        <SubTpl titreProps={{titre: "recherche"}}>
            <div className="row row-cols-1 row-cols-lg-2 g-4">
                <BlockCmn className="col my-3 p-3 ">
                    <div className="card-ak border h-100 ">
                        MAP

                    </div>
                </BlockCmn>
                <BlockCmn className="col my-3 p-3 ">
                    <div className=" border card-akb h-100">
                        <h3>Recheche de données météorologiques</h3>
                        <hr/>
                        <form action="" onSubmit={submitRecherche}>
                            <div className="w-100 my-1">
                                multiple select station
                            </div>
                            <div className="w-100 my-1">
                                <div className="row row-cols-1 row-cols-md-2">
                                    <div className="">
                                        <label htmlFor="">Year Min</label>
                                        <select name="yearMin" id="yearMin" onChange={changeMin} value={formBeean.yearMin}>
                                            {MeteoService.YEARS.map(y => (
                                                <option value={y}>{y}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className=""></div>
                                </div>

                                anné min / année max
                            </div>
                            <div className="w-100 my-1">
                                select données
                            </div>
                            <div className="w-100 my-1">
                                <button className="btn btn-primary w-100">Rechercher</button>
                            </div>
                        </form>
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