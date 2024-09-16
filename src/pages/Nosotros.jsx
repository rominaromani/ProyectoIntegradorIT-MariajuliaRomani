import useTitulo from '../hooks/useTitulo'
import './Nosotros.scss'

const Nosotros = () => {
  useTitulo('Nosotros')

  return (
    <section className="marca-section">
        <div className="marca-section__header">
            <h2 className="marca-section__title">DETRÁS DE LA MARCA</h2>
        </div>
        
        <div className="marca-section__images">
            <img src="/img/nosotros-img2.webp" alt="Hoja" className="marca-section__image marca-section__image--left" />
            <img src="/img/nosotros-img1.webp" alt="Persona" className="marca-section__image marca-section__image--right" />
        </div>
        
        <p className="marca-section__description">
          FashionFusion nació en 2008 en un pequeño taller en el corazón de Lima, Perú. La visión de sus fundadores era simple pero ambiciosa: crear una marca que combinara la rica herencia textil peruana con las últimas tendencias de la moda global. Inspirados por la belleza de los paisajes andinos y la vibrante cultura local, comenzaron a diseñar piezas únicas que capturaban la esencia del Perú, utilizando materiales sostenibles y técnicas artesanales. Desde sus humildes comienzos, la marca se ganó rápidamente un lugar en el corazón de los fashionistas locales, expandiéndose poco a poco gracias al boca a boca y a su creciente presencia en las redes sociales.
        </p>

        <p className="marca-section__description">
          Con el paso de los años, FashionFusion ha evolucionado, pero sin perder su esencia. Hoy en día, es reconocida a nivel internacional por su compromiso con la sostenibilidad y la responsabilidad social. Cada colección es una oda a la biodiversidad y las tradiciones peruanas, combinando colores vivos y patrones intrincados con cortes modernos y elegantes. Además, la marca trabaja en estrecha colaboración con comunidades locales, asegurando condiciones justas y apoyando el desarrollo de las economías rurales. FashionFusion no es solo una marca de ropa, es un movimiento que celebra la diversidad y el arte de la moda consciente.
        </p>
    </section>
  )
}

export default Nosotros
