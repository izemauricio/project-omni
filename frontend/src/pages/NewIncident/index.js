import React, {useState} from 'react';
import './style.css';
import logoImg from "../../assets/logo.svg";
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

export default function NewIncident() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    async function handleNewIncident(e) {
        e.preventDefault();
        const data = {
            title,
            description,
            value
        };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });

            history.push('/profile');
        } catch(e) {
            alert('error ao criar incident');
        }
    }

    return (
        <div className="new-incident">
            <div className="content">
                <section>
                    <img src={logoImg}></img>

                    <h1>Cadastrar novo caso</h1>

                    <p>Descreva o caso detalhamente para encontrar um heroi para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color={"#E02041"} />

                Voltar para home
            </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        />

                    <textarea 
                        placeholder="Descricao"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        />

                    <input 
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        />

                    <button className="button" type="submit">Enviar</button>  
                </form>
            </div>
        </div>
    );
}