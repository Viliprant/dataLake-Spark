import axios from "axios";
import LodashUtils from "../../ressources/utils/lodash.utils";
import ws, {GET} from "./web.service";


export default class MeteoService {

    static SELECTED_DATAS = [
        {label: "Température" , value: 'temp'}, // tempe
        {label: "Vitesse du vent" , value: 'wind-speed'},
        {label: "Angle du vent" , value: 'wind-angle'},
        {label: "Visibilité" , value: 'vis'},
        {label: "Pression de l'air" , value: 'slp'},
        {label: "Obstruction du ciel" , value: 'cig'}

    ]


    /**
     * # Données pour la température
     * 'TEMP_CALCUL': to_database_format(df_quality_tmp, 'TMP_DEGREE').toPandas(),
     *
     * # Données pour la vitesse du vent
     * 'WIND_SPEED_CALCUL': to_database_format(df_quality_wind_speed, 'WND_SPEED').toPandas(),
     *
     * # Données pour l'angle du vent
     * 'WIND_ANGLE_CALCUL': to_database_format(df_quality_wind_angle, 'WND_ANGLE').toPandas(),
     *
     * # Données pour l'obstruction du ciel
     * 'CIG_CALCUL': to_database_format(df_quality_sky, 'CIG_HEIGHT').toPandas(),
     *
     * # Données pour la visibilité
     * 'VIS_CALCUL': to_database_format(df_quality_vis, 'VIS_DISTANCE').toPandas(),
     *
     * # Données pour air pressure
     * 'SLP_CALCUL': to_database_format(df_quality_slp, 'SLP_AIR_PRESSURE').toPandas(),
     *
     *
     *
     *         "MOYENNE": 19481.717791411043,
     *         "STD": 5619.633020081577,
     *         "MIN": 1200,
     *         "%25": 22000,
     *         "%50": 22000,
     *         "%75": 22000,
     *         "MAX": 22000
     *
     */
    static SELECTED_TYPES_DATA = [
        //MOYENNE, STD, 25%, 50%, 75%, MIN, MAX
        {label: "Moyenne" , value: 'MOYENNE'},
        {label: "Ecart type" , value: 'STD'},
        {label: "Minimal" , value: 'MIN'},
        {label: "Maximal" , value: 'MAX'},
        {label: "25%" , value: '%25'},
        {label: "50%" , value: '%50'},
        {label: "75%" , value: '%75'}
    ]

    static getSTATIONS = () => GET("station")

    static getCIG = () => GET("cig")
    static getWIND_SPEED = () => GET("wind-speed") // vitessd
    static getSLP = () => GET("slp") // pression
    static getTEMP = () => GET("temp") // température


    static getWIND_ANGLE = () => GET("wind-angle") // angle


}