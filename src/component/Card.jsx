import logements from '../data/logements.json';

export function Card() {

    
    return <div className="gallery">
        {logements.map((logement)=> (
            <div key={logement.id} className="card">
                <img 
                src= {logement.cover} 
                alt= {logement.title} 
                className="card-cover"
                />
                <h3 className='card-title'>{logement.title}</h3>
            </div>
        ))}
    </div>
}