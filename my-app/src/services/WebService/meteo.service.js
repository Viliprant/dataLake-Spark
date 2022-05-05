import axios from "axios";
import LodashUtils from "../../ressources/utils/lodash.utils";
import ws, {GET} from "./web.service";


export default class MeteoService {

    static STATIONS = [
        {label: "FRANCE", value: "07876099999"},
        {label: "NEW ZEALAND", value: "93420099999"},
        {label: "CANADA", value: "71002099999"},
        {label: "COLOMBIE", value: "80112099999"},
        {label: "INDE", value: "43372099999"},
    ]

    static YEARS = LodashUtils.range(1980, 2022);

    static getCGI = () => GET("cgi")


}