import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Carousel } from "../component/Carousel";
import { Collapse } from "../component/Collapse";
import { Rating } from "../component/Rating";
import data from "../data/logements.json";
import { Erreur } from "./Erreur";

export function Logement() {
  // Récupère l'id dans le fichier JSON
  const { id } = useParams();
  const navigate = useNavigate();

  // on regarde le logement sur lequel on a cliqué
  const logement = data.find((item) => item.id === id);

  // On vérifie si on trouve bien le logement, si non on renvoi la page erreur
  useEffect(() => {
    if (!logement) {
      navigate("/erreur", { replace: true });
    }
  }, [logement, navigate]);

  if (!logement) {
    return null;
  }

  return (
    <div className="logement-container">
      <Carousel pictures={logement.pictures} />
      <div className="logement-header">
        <div>
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="tags">
            {logement.tags &&
              logement.tags.map((tag, i) => (
                <span key={i} className="tag">
                  {tag}
                </span>
              ))}
          </div>
        </div>
        <div className="host-rating">
          <div className="host">
            <span>{logement.host?.name}</span>
            <img
              src={logement.host?.picture}
              alt={logement.host?.name}
            />
          </div>
          <Rating rating={logement.rating} />
        </div>
      </div>
      <div className="collapseList collapseListLogement">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments &&
                logement.equipments.map((eq, i) => <li key={i}>{eq}</li>)}
            </ul>
          }
        />
      </div>
    </div>
  );
}