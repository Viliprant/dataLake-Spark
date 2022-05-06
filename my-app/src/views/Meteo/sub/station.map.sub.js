import React, {useEffect} from 'react';
import SubTpl from "../../../components/_template/sub.tpl";
import BlockCmn from "../../../components/_commons/block.cmn";
import MapSection from "../section/map.section";

function StationMapSub({stations = []}) {
    return (
        <SubTpl titreProps={{titre: "La cartographie des stations", className: "py-5"}}>
            <BlockCmn className="vh-100 m-0 pb-3">
                <MapSection stations={stations}/>
            </BlockCmn>

        </SubTpl>
    );
}

export default StationMapSub;