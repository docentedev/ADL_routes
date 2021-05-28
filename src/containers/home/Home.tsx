import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router'
import ContextLogin from '../../context/ContextLogin'

const Home = () => {
    const history = useHistory()
    const contextLogin = useContext(ContextLogin)
    const [username, setUsename] = useState('')
    const handlerChange = ({ target }: any) => {
        setUsename(target.value)
    }

    const handlerSubmit = (event: any) => {
        event.preventDefault()
        contextLogin.logIn(username, () => history.push('/private-home'))
    }

    const disabled = () => username === ''

    return (
        <div className="col-md-4 offset-md-4" onSubmit={handlerSubmit}>
            <div className="card">
                <form>
                    <div className="card-body">
                        <label>Username</label>
                        <input className="form-control" value={username} onChange={handlerChange} />
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-primary" disabled={disabled()}>Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home
