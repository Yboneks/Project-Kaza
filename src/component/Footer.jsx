import Logo from '../assets/img/Logo-White.svg'

export function Footer() {
    return <footer>
        <img src={Logo} alt="Logo de l'entreprise Kaza en blanc" />
        <p><i className="fa-regular fa-copyright"></i> 2020 Kasa. All right reserved</p>
    </footer>
}