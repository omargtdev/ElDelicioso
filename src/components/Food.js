import { Link } from 'react-router-dom';

function Food({ nombre, imagen, url }){
  return (
    <article class="comida">
      <h4 className="comida__nombre">{nombre}</h4>
      <Link className="comida__link" to={url}>
        <img className="comida__img" src={imagen} alt={nombre} />
      </Link> 
    </article>
  );
}

export default Food;
