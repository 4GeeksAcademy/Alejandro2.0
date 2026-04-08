import { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactCard from "../components/ContactCard";

const Contact = () => {
  const { contacts } = useContext(ContactContext);

  return (
    <div className="container">
      <h1>Lista de Contactos</h1>

      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default Contact;