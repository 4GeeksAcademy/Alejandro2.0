import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const { addContact } = useContext(GlobalContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState(""); // Nuevo estado para la imagen

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      id: Date.now(),
      name: name,
      phone: phone,
      address: address,
      // Si el usuario no pone imagen, usamos una por defecto
      image: image || "https://via.placeholder.com/150" 
    };

    addContact(newContact);
    navigate("/");
  };

  return (
    <div className="container mt-5">
      <h2>Añadir Contacto con Foto</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" placeholder="Nombre" onChange={e => setName(e.target.value)} required />
        <input className="form-control mb-2" placeholder="Teléfono" onChange={e => setPhone(e.target.value)} required />
        <input className="form-control mb-2" placeholder="Dirección" onChange={e => setAddress(e.target.value)} required />
        
        
        <input 
          className="form-control mb-2" 
          placeholder="URL de la imagen (ej: https://...)" 
          onChange={e => setImage(e.target.value)} 
        />
        
        <button type="submit" className="btn btn-primary w-100">Guardar con Foto</button>
      </form>
    </div>
  );
};

export default AddContact;