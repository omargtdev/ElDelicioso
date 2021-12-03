import { useParams, Link } from "react-router-dom";
import NotFound from "./NotFound";

import infoComida from '../data/comida_info.json'

function Comida(){
  
  //nombre de la comida
  const { nombre } = useParams();

  const info = infoComida.find(info => info.nombre === nombre); 

  return !info ? <NotFound /> : 
    <div className="info-container">
      <article className="info-comida__comida">
        <div className="info-comida__div">
          <h1 className="info-comida__titulo">{info.titulo}</h1>
          <p className="info-comida__desc">{info.descripcion}</p>
        </div>
        <img src={info.imagen} className="info-comida__img" alt={info.titulo} />
      </article>
      <section className="info-comida__ingredientes">
        <h3 className="info-comida__subtitulo">Ingredientes</h3>
        <ul className="info-comida__lista">
          {info.ingredientes.map((e, i) => <li key={i} className="info-comida__li">&diams; {e}</li>)}
        </ul>
      </section>
      <section className="info-comida__preparacion">
        <h3 className="info-comida__subtitulo">Preparacion</h3>
        <ol className="info-comida__lista">
          {info.preparacion.map((e, i) => <li key={i} className="info-comida__li">{i + 1}. {e}</li>)}
        </ol>
      </section>
      <footer className="info-comida__footer">
        <h3 className="info-comida__subtitulo">ESPERAMOS A VERLE AYUDADO</h3>
        <div className="info-comida__links">
          <Link className="info-comida__link" to={`/${info.region}`}><i className="fas fa-arrow-left"></i> Volver a {info.region}</Link>
          <Link className="info-comida__link" to='/'><i className="fas fa-home"></i> Volver al inicio</Link>
        </div>
      </footer>
    </div> 
  ;
}

export default Comida;
