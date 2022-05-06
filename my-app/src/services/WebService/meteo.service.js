
import {FETCH, GET} from "./web.service";


export default class MeteoService {

    static SELECTED_DATAS = [
        {label: "Température" , value: 'temp'}, // température
        {label: "Vitesse du vent" , value: 'wind-speed'}, // vitesse
        {label: "Angle du vent" , value: 'wind-angle'}, // angle du vent
        {label: "Visibilité" , value: 'vis'}, // Visibilité
        {label: "Pression de l'air" , value: 'slp'}, // pression
        {label: "Obstruction du ciel" , value: 'cig'}

    ]

    static SELECTED_TYPES_DATA = [
        {label: "Moyenne" , value: 'MOYENNE'},
        {label: "Ecart type" , value: 'STD'},
        {label: "Minimal" , value: 'MIN'},
        {label: "Maximal" , value: 'MAX'},
        {label: "25%" , value: '%25'},
        {label: "50%" , value: '%50'},
        {label: "75%" , value: '%75'}
    ]

    static getSTATIONS = () => FETCH("station")

    static getSelectedDatas = selectedDatas => FETCH(selectedDatas)


}