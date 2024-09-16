const FormularioContacto = () => {
    return (
      <section className="contact-form">
        <header className="contact-form__header">
          <h1>Contacto</h1>
        </header>
  
        <p className="contact-form__instructions">
          Para cualquier consulta sobre una compra, envíanos el número y la fecha de tu compra.
        </p>
  
        <form action="#" className="contact-form__form">
          <div className="contact-form__group">
            <div className="contact-form__field">
              <label htmlFor="first-name" className="contact-form__label">Introduce tu nombre</label>
              <input type="text" id="first-name" className="contact-form__input" placeholder="Nombre" />
            </div>
            <div className="contact-form__field">
              <label htmlFor="last-name" className="contact-form__label">Introduce tu apellido</label>
              <input type="text" id="last-name" className="contact-form__input" placeholder="Apellido" />
            </div>
          </div>
  
          <div className="contact-form__group">
            <div className="contact-form__field">
              <label htmlFor="email-contact" className="contact-form__label">Introduce tu email *</label>
              <input type="email" id="email-contact" className="contact-form__input" placeholder="Email" />
            </div>
            <div className="contact-form__field">
              <label htmlFor="phone" className="contact-form__label">Introduce tu teléfono</label>
              <input type="tel" id="phone" className="contact-form__input" placeholder="Teléfono" />
            </div>
          </div>
  
          <div className="contact-form__field">
            <label htmlFor="message" className="contact-form__label">Escribe tu mensaje aquí</label>
            <textarea id="message" className="contact-form__textarea" placeholder="Mensaje"></textarea>
          </div>
  
          <button type="submit" className="contact-form__button">Enviar</button>
        </form>
      </section>
    )
  }
  
  export default FormularioContacto
  