import React from "react";


export default function  ConditionRender (props) {
 
        if ( props.msg ==='ok'){
            return  <div>OK</div>
        }
        return <div>Fail</div>

}