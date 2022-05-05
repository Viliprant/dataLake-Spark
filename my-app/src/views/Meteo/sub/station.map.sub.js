import React from 'react';
import SubTpl from "../../../components/_template/sub.tpl";
import BlockCmn from "../../../components/_commons/block.cmn";

function StationMapSub() {
    return (
        <SubTpl titreProps={{titre: "La cartographie des stations", className: "py-5"}}>
            <BlockCmn className="my-3 border text-center d-flex flex-column justify-content-around align-items-center h-100">
                <p>normalement ici il devrait y'avoir une carte</p>
                <p>c'est mieux tu clique sur <b>"Recherche"</b> ou <b>"Historique"</b></p>
            </BlockCmn>

        </SubTpl>
    );
}

export default StationMapSub;