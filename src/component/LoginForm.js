import React from "react";

export default function LoginForm(props){
    return(
        <form>
            <div>
                <label>User Name</label>
                <input type="text"></input>
            </div>
            <div>
                <label>Password</label>
                <input type="text"></input>
            </div>
            <div>
                <button onClick={props.hi}>Login</button>
            </div>
        </form>
    )
}