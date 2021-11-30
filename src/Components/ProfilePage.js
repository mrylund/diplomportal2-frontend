import React, { useEffect, useState } from "react";
import { updateCurrentUserName } from "../libs/requests";
import '../styles/profile.css'


export const ProfilePage = () => {

    const [inputName, setInputName] = useState('')
    const [isUpdated, setIsUpdated] = useState(false)

    const handleClick = async () => {
        const response = await updateCurrentUserName(inputName, window.localStorage.getItem('portal-jwt-Token'));
        console.log(response.data)
        if (!!response.data) setIsUpdated(true)
    }

    return (
        <div class="input-custom">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-default">Navn til visning:</span>
                </div>
                <input type="text" onChange={e => setInputName(e.target.value)} name="name" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                <div class="input-group-append">
                    <button onClick={handleClick} class="btn btn-outline-secondary" type="button">Opdatér</button>
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