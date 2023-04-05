import React, {useEffect, useState} from 'react';
import * as S from './styles'; 
import { Link } from 'react-router-dom';

import logo from '../../../assets/logo.png';
import bell from '../../../assets/bell.png';

import api from '../../../services/api';
import isConnected from '../../../utils/Tarefas/isConnected';

function Header({ clicaNotificacao }) {
  const [lateCount, setLateCount] = useState();
  
  async function lateVerify(){
    await api.get(`/task/filter/late/${isConnected}`)
    .then(Response => {
      setLateCount(Response.data.length);
    })
  }

  async function Logout(){
    localStorage.removeItem('@tarefas/macaddress');
    window.location.reload();
  }

  useEffect(() => {
    lateVerify();
  })

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo" />
      </S.LeftSide>
      <S.RightSide>
        <Link to="/home">INÍCIO</Link>
        <span className="dividir" />
        <Link to="/task">NOVA TAREFA</Link>
        <span className="dividir" />
        { !isConnected ? 
          <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
          :
          <button type="button" onClick={Logout}>SAIR</button>
        }
        {
          lateCount &&
          <>
        <span className="dividir" />
        <button onClick={clicaNotificacao} id="notification">
          <img src={bell} alt="Notificação" />
          <span>{lateCount}</span>
        </button>
        </>
        }
      </S.RightSide>
    </S.Container>
  )
}
export default Header;