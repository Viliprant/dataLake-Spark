import React, {useEffect, useRef, useState} from 'react';
import {Routes, Route} from "react-router-dom";
import AuthService from "./auth.service";

import SiteHomeView from "../../views/Site/site.home.view";

import UserHomeView from "../../views/User/user.home.view";


import AdminHomeView from "../../views/Admin/admin.home.view";

import AdminUserHomeView from "../../views/Admin/User/admin.user.home.view";
import AdminUserListSub from "../../views/Admin/User/sub/admin.user.list.sub";

import AdminUserSingleHomeSub from "../../views/Admin/User/sub/admin.user.single.home.sub";


import AdminUserSingleEditSub from "../../views/Admin/User/sub/admin.user.single.edit.sub";  // todo: modal ?

import AdminUserSingleDeleteSub from "../../views/Admin/User/sub/admin.user.single.delete.sub"; // todo: modal

import LoginHomeView from "../../views/Login/login.home.view";
import RechercheSub from "../../views/Meteo/sub/recherche.sub";
import HistoriqueRechercheSub from "../../views/Meteo/sub/historique.recherche.sub";
import StationMapSub from "../../views/Meteo/sub/station.map.sub";
import MeteoService from "../WebService/meteo.service";

{/* // todo: modal */
}


export default function RouterService() {
    const [stations, setStations] = useState()

    useEffect(() => {
        MeteoService.getSTATIONS().then(res => setStations(res))
    }, [])
    return (
        <Routes>
            <Route path="/" element={<SiteHomeView/>}>
                <Route path="" element={<StationMapSub stations={stations}/>}/>
                <Route path="recherche" element={<RechercheSub _stations={stations}/>}/>
                <Route path="historique-recherche" element={<HistoriqueRechercheSub/>}/>
            </Route>
            <Route path="/login"
                   element={<LoginHomeView access={AuthService.IsUnLoggedIn}/>}/> {/* // todo: modal */}

            <Route path="/mon-espace" element={<UserHomeView/>}/>

            {/* admin routes */}
            <Route path="/admin" element={<AdminHomeView access={AuthService.IsAdmin}/>}/>


            <Route path="/gestion-user" element={<AdminUserHomeView access={AuthService.IsAdmin}/>}>
                <Route path="" element={<AdminUserListSub/>}/>
                <Route path=":idUser" element={<AdminUserSingleHomeSub/>}/>
                <Route path=":idUser/edit" element={<AdminUserSingleEditSub/>}/>
                <Route path=":idUser/delete" element={<AdminUserSingleDeleteSub/>}/> {/* // todo: modal */}
            </Route>

        </Routes>
    );
}

export const MenuLink = () => {

}
