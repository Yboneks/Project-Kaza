import logements from '../data/logements.json';
import {Link} from 'react-router-dom';

export function Card() {

    
    return (
    <div className="gallery">
      {logements.map((logement) => (
        <Link
          key={logement.id}
          to={`/logement/${logement.id}`}
          className="card"
        >
          <img
            src={logement.cover}
            alt={logement.title}
            className="card-cover"
          />
          <h3 className="card-title">{logement.title}</h3>
        </Link>
      ))}
    </div>
    );
}