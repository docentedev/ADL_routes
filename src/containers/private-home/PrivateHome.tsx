import React, { useContext } from 'react'
import ContextLogin from '../../context/ContextLogin'

const PrivateHome = () => {
    const contextLogin = useContext(ContextLogin)

    const handlerClick = () => {
        contextLogin.logOut()
    }
    return (
        <div>
            Private Home
            <button className="btn btn-primary" onClick={handlerClick}>Logout</button>
        </div>
    )
}

export default PrivateHome
