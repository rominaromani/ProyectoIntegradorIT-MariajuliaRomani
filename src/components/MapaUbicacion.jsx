const MapaUbicacion = () => {
    return (
      <section className="map">
        <header className="map__header">
          <h2>Ubicación</h2>
        </header>
  
        <div className="map__container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31207.38271441921!2d-77.04275463955078!3d-12.046373000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8bc2a6583a5%3A0x106576ccbfef78c0!2sAv.%20Almirante%20Miguel%20Grau%2C%20Lima%2015074%2C%20Per%C3%BA!5e0!3m2!1ses-419!2sus!4v1621537112134!5m2!1ses-419!2sus"
            width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy">
          </iframe>
        </div>
      </section>
    )
  }
  
  export default MapaUbicacion
  