import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const ContactCard = ({ contact }) => {
  const { deleteContact } = useContext(GlobalContext);

  return (
    <div className="card mb-3 shadow-sm" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          {/* Usamos la propiedad contact.image que creamos antes */}
          <img 
            src={contact.image} 
            className="img-fluid rounded-start h-100" 
            alt="Foto de contacto"
            style={{ objectFit: "cover" }} 
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{contact.name}</h5>
            <p className="card-text mb-1"><strong>📍 Dir:</strong> {contact.address}</p>
            <p className="card-text mb-3"><strong>📞 Tel:</strong> {contact.phone}</p>
            
            <button 
              className="btn btn-outline-danger btn-sm" 
              onClick={() => deleteContact(contact.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;