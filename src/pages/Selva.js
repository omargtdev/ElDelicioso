import Layout from "../components/layouts/Layout";
import Food from "../components/Food";
import RegionInfo from "../components/RegionInfo";

import comidas from '../data/comida.json';

function Selva(){
  return (
    <Layout>
      <RegionInfo 
        titulo="Selva"
        parrafos={[
          `La amazonía peruana está llena de sabores muy diversos y exquisitos, que conquistan los
           paladares de quienes se animan a probarlos. Por ello, muchos platos típicos de la selva se han vuelto
           bastante solicitados en distintas partes del Perú y el mundo.`,
          `Tradicionales comidas como el juane, el tacacho con cecina y la patarashca incorporan ingredientes típicos de esta
           región y son bastante sencillos de preparar.`,
        ]}
      />
      <section className="comidas">
        <h3 className="comidas__titulo">Comidas destacadas</h3>
        {comidas.selva.map(({ nombre, url, imagen }) => (
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

export default Selva;
