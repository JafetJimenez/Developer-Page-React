import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_aj30', 'template_aj30', {nombre, telefono, email,mensaje}, {
            publicKey: 'EoGSI8y0MgnDF5cXL',
        })
        .then(
            (response) => { 
                console.log('SUCCESS!', response.status, response.text);
            },
            (err) => {
                console.log('FAILED...', err);
            }
        );
    };

    return (
        <section>
            <h2>Contacto</h2>
            <form ref={form} className="formulario" onSubmit={sendEmail}>
                <fieldset>
                    <legend>Contáctanos llenando todos los campos</legend>
                    <div className="contenedor-campos">
                        <div className="campo">
                            <label>Nombre</label>
                            <input className="input-text" type="text" placeholder="Tu nombre" name="nombre" />
                        </div>

                        <div className="campo">
                            <label>Teléfono</label>
                            <input className="input-text" type="tel" placeholder="Tu teléfono" name="telefono" />
                        </div>

                        <div className="campo">
                            <label>Correo electrónico</label>
                            <input className="input-text" type="email" placeholder="Tu email" name="email" />
                        </div>

                        <div className="campo">
                            <label>Mensaje</label>
                            <textarea className="input-text" name="mensaje"></textarea>
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