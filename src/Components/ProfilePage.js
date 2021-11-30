import React, { useEffect, useState } from "react";
import { updateCurrentUserName } from "../libs/requests";
import '../styles/profile.css'
import { getTokenFromClient } from "../utils";


export const ProfilePage = () => {

    const [inputName, setInputName] = useState('')
    const [isUpdated, setIsUpdated] = useState(false)

    const handleClick = async () => {
        const response = await updateCurrentUserName(inputName, getTokenFromClient());
        console.log(response.data)
        if (!!response.data) setIsUpdated(true)
    }

    return (
        <div className="input-custom">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-default">Navn til visning:</span>
                </div>
                <input type="text" onChange={e => setInputName(e.target.value)} name="name" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                <div className="input-group-append">
                    <button onClick={handleClick} className="btn btn-outline-secondary" type="button">Opdatér</button>
                </div>
            </div>
            {
                isUpdated
                ? <p>Dit navn er opdateret.</p>
                : <p></p>
            }
        </div>
    )

}