import "./styles.css";
import { Link } from "react-router-dom";

function Card(){
    return (
        <>
            <section className="container">
                <div className="card">
                    <h3>Laboratório de Informárica</h3>
                    <p>Responsável: Johnattan</p>
                    <p>07:30 - 17:00</p>
                    <div className="card-btn">
                        <Link to="/Reservado">Ver Reservas</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Card;