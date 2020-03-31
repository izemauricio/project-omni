import React, { useEffect, useState } from 'react';
import './styles.css';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiPower, FiTrash2 } from 'react-icons/fi';
import api from '../../services/api';

export default function Profile() {
    const [incidents, setIncidents] = useState([]);

    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongId,
            }
        })
            .then(response => {
                setIncidents(response.data);
            });
    }, [ongId]);

    function handleLogout() {
        localStorage.clear();
        history.push('/');
    }

    async function handleDeleteIncident(id) {
        try {
            await api.delete(`incidents/${id}`, {
                headers: {
                    Authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => {
                return (incident.id !== id);
            }));
        } catch (e) {
            alert('erro ao deletar caso');
        }
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="logo"></img>
                <span>Bem vinda, {ongName}</span>
                <Link className="button" to="incidents/new">Cadastrar novo caso</Link>
                <button>
                    <FiPower onClick={handleLogout} color="#E02041" size={18}></FiPower>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ul>
                {
                    incidents.map(incident => (
                        <li key={incident.id}>
                            <strong>CASO</strong>
                            <p>{incident.title}</p>

                            <strong>DESCRICAO</strong>
                            <p>{incident.description}</p>

                            <strong>VALOR</strong>
                            <p>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(incident.value)}</p>

                            <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                                <FiTrash2 color="#A8A8B3" size={20}></FiTrash2>
                            </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}