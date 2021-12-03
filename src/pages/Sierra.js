import Layout from "../components/layouts/Layout";
import Food from "../components/Food";
import RegionInfo from "../components/RegionInfo";

import comidas from '../data/comida.json';

function Sierra(){
  return (
    <Layout>
      <RegionInfo 
        titulo="Sierra"
        parrafos={[
          `La sierra peruana cuenta con la gastronomía más tradicional de nuestro país.
           Sus platos son exquisitos porque están hechos con ingredientes provenientes del suelo peruano
           , por ello es que la comida típica de la sierra es realmente deliciosa.`,
          `Podemos encontrar una variedad de platos típicos tradicionales en diversas recetas que tras
           el paso del tiempo aún se mantienen vigentes. Si piensas viajar a la serranía del Perú, aquí te dejamos una
           lista con los mejores platos típicos de la sierra peruana que no debes dejar de degustar.`,
        ]}
      />
      <section className="comidas">
        <h3 className="comidas__titulo">Comidas destacadas</h3>
        {comidas.sierra.map(({ nombre, url, imagen }) => (
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

export default Sierra;
