
import './modal.css';

import { FiX } from 'react-icons/fi';

function fnData() {

    var dt = new Date();
    
    var dia = dt.getDate();
    var mes = dt.getMonth() + 1;
    var ano = dt.getFullYear();
    
    var data = ((dia < 10) ? "0" : "") + dia + "/" + ((mes < 10) ? "0" : "") + mes + "/" + ano;
    
    return data;
    }

export default function Modal({conteudo, close}){

    return(
        <div className="modal">
            <div className="container">
                <button className="close" onClick={ close }>
                    <FiX size={23} color="#FFF" />
                    Voltar
                </button>
                <div>
                    <h2>Detalhes da ocorrência</h2>

                    <div className="row">
                        <span>
                            Código: <a>{conteudo.index}</a>
                        </span>
                    </div>

                    <div className="row">
                        <span>
                            Cliente: <a>{conteudo.cliente}</a>
                        </span>
                    </div>
                
                    <div className="row">
                        <span>
                            Motivo: <a>{conteudo.assunto}</a>
                        </span>
                        <span>
                            Cadastrado em: <a>{conteudo.createdFormated}</a>
                        </span>
                    </div>

                    <div className="row">
                        <span>
                            Status: <a style={{ color: '#FFF', backgroundColor: conteudo.status === 'Aberto' ? '#5cb85c' : '#999' }}>{conteudo.status}</a>
                        </span>
                    </div>

                    {conteudo.complemento !== '' && (
                        <>
                        <h3>Complemento</h3>
                        <p>
                            {conteudo.complemento}
                        </p>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}