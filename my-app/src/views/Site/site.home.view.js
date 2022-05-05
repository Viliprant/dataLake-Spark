import React, {useEffect} from 'react';
import ViewsTpl from "../../components/_template/views.tpl";
import * as MeteoService from "../../services/WebService/meteo.service";
import NavTpl from "../../components/_template/nav.tpl";
import {Link, Outlet} from "react-router-dom";



function SiteHomeView() {


    useEffect(() => {

    }, [])

    return (
        <ViewsTpl className="container" titre={`Bienvenue sur ${process.env.REACT_APP_SITE_NAME}`} >
            <NavTpl>
                <Link className="nav-link" to={`/`}>Cartographies des stations</Link>
                <Link className="nav-link" to={`/recherche`}>Recherche</Link>
                <Link className="nav-link" to={`/historique-recherche`}>Historique</Link>
            </NavTpl>
            <Outlet/>
        </ViewsTpl>
    );
}

export default SiteHomeView;
