import React from 'react';
import SubTpl from "../../../components/_template/sub.tpl";
import ListSingleTpl from "../../../components/_template/list.single.tpl";

function HistoriqueRechercheSub() {
    return (
        <SubTpl titreProps={{titre: "historique de recherche"}}>

            <ListSingleTpl />

        </SubTpl>
    );
}

export default HistoriqueRechercheSub;