import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import ContactCard from "../components/ContactCard";         

const Home = () => {
  const { contacts } = useContext(GlobalContext);

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Lista de contactos</h2>
        
        <Link to="/add" className="btn btn-success">
          Añadir nuevo contacto
        </Link>
      </div>
      
      <div className="contact-list">
        {contacts && contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactCard key={contact.id} contact={contact} />
          ))
        ) : (
          <div className="text-center mt-5">
            <p className="text-muted">No hay contactos disponibles.</p>
            <p>Haz clic en el botón verde para agregar el primero.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;