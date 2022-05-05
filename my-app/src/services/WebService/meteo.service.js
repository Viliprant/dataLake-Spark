import axios from "axios";
import LodashUtils from "../../ressources/utils/lodash.utils";


export default class MeteoService {

    static STATIONS = [
        {name: "", location: "FRANCE", id: "07876099999"},
        {name: "", location: "NEW ZEALAND", id: "93420099999"},
        {name: "", location: "CANADA", id: "71002099999"},
        {name: "", location: "COLOMBIE", id: "80112099999"},
        {name: "", location: "INDE", id: "43372099999"},
    ]

    static YEARS = LodashUtils.range(1980, 2022);




}

class LINE {
    label;
    da

}