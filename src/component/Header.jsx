import {Link} from 'react-router-dom';
import Logo from '../assets/img/LOGO.svg';


export function Header () {
    return <header>
        <img src={Logo} alt="Image du logo de l'entreprise Kaza" />
        <nav>
            <ul>
                <li><Link to="/">Acceuil</Link></li>
                <li><Link to="/a-propos">A propos</Link></li>
            </ul>
        </nav>
    </header>
}