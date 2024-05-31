import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactForm() {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleInputChange = (event) => {
        switch (event.target.name) {
            case "nombre":
                setNombre(event.target.value);
                break;
            case "telefono":
                setTelefono(event.target.value);
                break;
            case "email":
                setEmail(event.target.value);
                break;
            case "mensaje":
                setMensaje(event.target.value);
                break;
            default:
                break;
        }
    };

    const enviarCorreo = (event) => {
        event.preventDefault();

        emailjs.send('service_aj30', 'template_aj30', {nombre, telefono, email, mensaje}, 'EoGSI8y0MgnDF5cXL')
         .then((response) => {
             console.log('SUCCESS!', response.status, response.text);
          }, (err) => {
             console.log('FAILED...', err);
          });
    };

    return (
        <section>
            <h2>Contacto</h2>
            <form className="formulario" onSubmit={enviarCorreo}>
                <fieldset>
                    <legend>Contáctanos llenando todos los campos</legend>
                    <div className="contenedor-campos">
                        <div className="campo">
                            <label>Nombre</label>
                            <input className="input-text" type="text" placeholder="Tu nombre" name="nombre" value={nombre} onChange={handleInputChange} />
                        </div>

                        <div className="campo">
                            <label>Teléfono</label>
                            <input className="input-text" type="tel" placeholder="Tu teléfono" name="telefono" value={telefono} onChange={handleInputChange} />
                        </div>

                        <div className="campo">
                            <label>Correo electrónico</label>
                            <input className="input-text" type="email" placeholder="Tu email" name="email" value={email} onChange={handleInputChange} />
                        </div>

                        <div className="campo">
                            <label>Mensaje</label>
                            <textarea className="input-text" name="mensaje" value={mensaje} onChange={handleInputChange}></textarea>
                        </div>
                    </div>
                    <div className="alinear-derecha flex">
                        <input className="boton w-sm-100" type="submit" value="Enviar" />
                    </div>
                </fieldset>
            </form>
        </section>
    );
}

export default ContactForm;