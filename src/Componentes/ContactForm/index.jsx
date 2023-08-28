import React, { useState } from 'react';
const campos = [
    { name: 'name', label: 'Nome', type: 'text' },
    { name: 'email', label: 'Email', type: 'email' },
  ];
function ContactForm({ fields = campos }) {
  const [formValues, setFormValues] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulário enviado:', formValues);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="contact-form">
      <h1>Fale Conosco</h1>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index}>
            <label htmlFor={field.name}>{field.label}</label>
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formValues[field.name] || ''}
              onChange={handleInputChange}
            />
          </div>
        ))}
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default ContactForm;
