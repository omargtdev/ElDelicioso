import {useEffect, useState} from "react";
import Layout from "../components/layouts/Layout";
import Local from "../components/Local";
let counter = 2;

function Home(){
  
  const [image, setImage] = useState('/images/restaurants/rest1.jpg');

  useEffect(() => {
    const interval = setInterval(() => {
      counter = counter > 5 ? 1 : counter; 
      setImage(`/images/restaurants/rest${counter}.jpg`)
      counter++;
    }, 2000);
    return () => clearInterval(interval);
  }, [])

  return (
    <Layout>
        <img id="banner" src={image} alt="Restaurante" />
      <article className="presentacion">
        <h2 className="presentacion__titulo">¿QUIENES SOMOS?</h2>
        <img className="presentacion__img" src='/images/logo.jpg' alt="Mesa de restaurante" />
        <div className="presentacion__descr">
          <p className="presentacion__txt"> 
            El Resraurante "El Delicioso", es un restaurante con mas de 10 años de experiencia en la cocina. 
            Siendo conocido en todo el Perú y tambien en algunos paises como: Argentina,España y Francia.
            Ganando varios premios tanto como nacional (Ganamos dos años seguidos: "La mejor sason" 2015-2016) e internacional (Ganamos un premio: "Mejor plato tipico" 2018)
          </p>
          <p className="presentacion__txt">Actualmente nos puedes visitar en nuestros dos locales, ubicados en Miraflores, en Larcomar y en Barranco, en el Puente de los Suspiros</p>
        </div>
      </article>
      <section className="locales">
        <h2 className="locales__titulo">Locales</h2>
        <Local 
          titulo='Miraflores' 
          lugar='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.712717359574!2d-77.03243536471523!3d-12.131798097665184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7e1b4b5a533%3A0xa549043226dcfb18!2sLarcomar!5e0!3m2!1ses!2spe!4v1636073096317!5m2!1ses!2spe'
          descripcion='Mal. de la Reserva 610 Miraflores 15074, Larcomar'
        />
        <Local 
          titulo='Barranco' 
          lugar='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.4573937259484!2d-77.02473138561642!3d-12.149232247121885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7ed834fd9f9%3A0xb90fc20e31cc0a04!2sPuente%20de%20los%20Suspiros!5e0!3m2!1ses!2spe!4v1636073393063!5m2!1ses!2spe'
          descripcion='Jr. Batallon, Ayacucho 271 Barranco, Puente de los suspiros'
        />
      </section>
    </Layout>
  );
}

export default Home;
