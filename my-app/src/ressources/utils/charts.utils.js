import {Chart as ChartJS} from "chart.js/auto";

import {Line} from "react-chartjs-2";
import {UserData, UserData_2} from "../data/user.data";
import LodashUtils from "./lodash.utils";

export const COLORS = [
    "#CB2722",
    "#000000",
    '#E9892B',
    '#2850F1',
    '#F1E537',
    "#691E80",
    '#36792B',
    "#88CDE5",
    "#573A1E",
    "#EAABC0"
]

export const LINE_CHART = ({data}) => (<Line data={data}/>)

export const DATAS = [
    UserData,
    UserData_2
]

export class LINE {
    label;
    data;
    backgroundColor;
    borderColor;


    constructor(label, data, backgroundColor, borderColor) {
        this.label = label;
        this.data = data;
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
    }

    static build(label, data, color) {
        return new LINE(label, data, color, color)
    }

    static create_data_set = (minDate, maxDate, datas) => {
        let dataSet = [];
        for (let i = 0; i < datas.length; i++) {
            let line = LINE.build(Object.keys({datas})[0], datas[i].map(d => d.userGain), COLORS[i])
            dataSet.push(line)
        }
        return {
            labels: LodashUtils.range(minDate, maxDate),
            datasets: dataSet
        }
    }
}

