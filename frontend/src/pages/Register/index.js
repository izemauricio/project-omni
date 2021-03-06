import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from "../../assets/logo.svg";
import api from '../../services/api';
import './styles.css'



export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        };

        try {
            const res = await api.post('ongs', data);
            alert(`registrado com id: ${res.data.id}`);
            history.push('/');
        } catch (e) {
            alert('erro ao criar request');
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg}></img>
                    <h1>Cadastro</h1>
                    <p>Faca seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color={"#E02041"} />
                Voltar para login
            </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input value={name} onChange={e => setName(e.target.value)} placeholder="Nome da ONG" />

                    <input value={email} onChange={e => setEmail(e.target.value)} placeholder="E-mail" type="email" />

                    <input value={whatsapp} onChange={e => setWhatsapp(e.target.value)} placeholder="Whatsapp" />

                    <div className="input-group">
                        <input value={city} onChange={e => setCity(e.target.value)} placeholder="Cidade" />

                        <input value={uf} onChange={e => setUf(e.target.value)} placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button className="button" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}