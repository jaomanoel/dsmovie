import "./style.css";
import arrow from '../../assets/imgs/arrow.svg';

function index() {
    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button" disabled={true} >
                    <img src={arrow} alt="Voltar pagina" />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dsmovie-pagination-button" disabled={false} >
                    <img className="dsmovie-flip-horizontal" src={arrow} alt="Avancar pagina" />
                </button>
            </div>
        </div>
    )
}

export default index;