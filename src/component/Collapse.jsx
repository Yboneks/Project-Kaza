import React, {useState} from "react";

export function Collapse({title, content}) {
    
    const [isOpen, setIsOpen] = useState(false);
    
    
    return (
        <div className="collapse">
            <div className="collapse__header" onClick={()=> setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                <i className={`fa-solid fa-chevron-up collapse__icon ${isOpen ? "open" : ""}`}></i>
            </div>
            <div className={`collapse__content ${isOpen ? "open" : "closed"}`}>
                {content}
            </div>
        </div>
    )
}