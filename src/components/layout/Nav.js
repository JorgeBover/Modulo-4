import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <div className="holder">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/habitaciones">Habitaciones</Link></li>
                    <li><Link to="/servicios">Servicios</Link></li>
                    <li><Link to="/reservas">Reservas</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;