
import { useContext } from 'react';
import './header.css';
import { AuthContext } from '../../contexts/auth';
import avatar from '../../assets/avatar.png';

import { Link } from 'react-router-dom';
import { FiHome, FiUser, FiSettings } from  "react-icons/fi";

export default function Header(){
    const { user } = useContext(AuthContext);

    return(
    <div className="sidebar">
        <div>
            <img src={user.avatarUrl === null ? avatar : user.avatarUrl } alt="Foto avatar" />
        </div>

        <Link to="/dashboard">
            <FiHome color="#FFF" size={20} />
            Monitoramento
        </Link>
        <Link to="/dashboard">
            <FiHome color="#FFF" size={20} />
            Acesso
        </Link>
        <Link to="/dashboard">
            <FiHome color="#FFF" size={20} />
            Serviços
        </Link>
        <Link to="/dashboard">
            <FiHome color="#FFF" size={20} />
            Ocorrências
        </Link>
        <Link to="/Home">
            <FiHome color="#FFF" size={20} />
            Tarefas
        </Link>
        <Link to="/customers">
            <FiUser color="FFF" size={20} />
            Orçamentos
        </Link>
        <Link to="/dashboard">
            <FiHome color="#FFF" size={20} />
            Pedidos
        </Link>
        <Link to="/customers">
            <FiUser color="FFF" size={20} />
            Cadastro
        </Link>
        <Link to="/profile">
            <FiSettings color="FFF" size={20} />
            Configurações
            </Link>
        
    </div>
    )
}