// import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ContactRow from "./ContactRow";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState(null);
  console.log(selectedContactId);
  useEffect(() => {
    async function getContact() {
      try {
        const response = await fetch(
          `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`
        );
        const result = await response.json();
        setContact(result);
        console.log(`fetch by Id result: ${contact.name}`);
      } catch (error) {
        console.log(`contactId fetch error ${error}`);
      }
    }
    getContact();
  }, []);

  const handleClick = () => setSelectedContactId(null);
  return (
    <>
      {contact && (
        <>
          <h2>{contact.name} </h2>
          <h3>{contact.email}</h3>
          <h3>{contact.phone}</h3>
          <h3>{contact.website}</h3>
        </>
      )}
      <button onClick={handleClick}>Go Back to List</button>
    </>
  );
}
