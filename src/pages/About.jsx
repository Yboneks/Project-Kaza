import {Banner} from "../component/Banner";
import {Collapse} from "../component/Collapse";

export function About() {

    return <>
    <Banner
        image="src/assets/img/about-banner.svg"
    />
    <div className="collapseList">
        <Collapse
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou perturbateur entraînera une exclusion de notre plateforme."
        />
        <Collapse
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N’hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services."
        />
    </div>
    </>
}