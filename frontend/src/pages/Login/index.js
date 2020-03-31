import React, { useState } from 'react';
import './style.css';
import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";
import { FiLogIn } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

function Login(props) {

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('session', {id});
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('/profile');
        } catch(e) {
            alert('error');
        }
    }

    const [id, setId] = useState('');
    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg}></img>
                <form onSubmit={handleLogin}>
                    <h1>Faca seu login</h1>

                    <input value={id} onChange={e => setId(e.target.value)} placeholder="Sua ID"></input>
                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color={"#E02041"} />
                Nao tenho registro
            </Link>
                </form>


            </section>
            <img src={heroesImg}></img>
        </div>
    )
}
export default Login;