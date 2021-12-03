import Layout from "../components/layouts/Layout";
import Food from "../components/Food";
import RegionInfo from "../components/RegionInfo";

import comidas from '../data/comida.json';

function Costa(){
  return (
    <Layout>
      <RegionInfo 
        titulo="Costa"
        parrafos={[
          `Los platos típicos de la costa peruana son, en su gran mayoría, el resultado
           de la combinación de recetas y técnicas propias de las diferentes culturas que
           han habitado, y habitan el territorio costero del Perú. 
           Algunas de estas culturas son la inca, la española, la musulmana, la africana,
           la italiana, la china y la japonesa.`,
          `Si bien la preparación y los ingredientes de cada plato son diferentes, existen
           algunos como el pescado, el ají amarillo, el ají rojo, los mariscos, la papa y el
           arroz, que suelen ser encontrados en la mayoría de las recetas.`,
        ]}
      />
      <section className="comidas">
        <h3 className="comidas__titulo">Comidas destacadas</h3>
        {comidas.costa.map(({ nombre, url, imagen }) => (
          <Food 
            nombre={nombre}
            url={url}
            imagen={imagen}
          />
        ))}
      </section>
    </Layout>
  );
}

export default Costa;
