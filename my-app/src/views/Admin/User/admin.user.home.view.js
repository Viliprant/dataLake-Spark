import React from 'react';
import {Link, Outlet} from "react-router-dom";
import ViewsTpl from "../../../components/_template/views.tpl";
import NavTpl from "../../../components/_template/nav.tpl";

function AdminUserHomeView ({access}){
    return (
        <ViewsTpl className="container" titre={"Gestion Utilisateurs"} access={access}>
            <NavTpl>
                <Link className="nav-link" to={`/admin`}>Retour</Link>
                <Link className="nav-link" to={``}>Home</Link>
            </NavTpl>
            <Outlet/>
        </ViewsTpl>
    );
};

export default AdminUserHomeView;
