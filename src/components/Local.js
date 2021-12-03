

function Local({ titulo, lugar, descripcion }){
  return(
    <article className='local'>
      <h3 className="local__titulo">{titulo}</h3>
      <iframe src={lugar} title={titulo} className='local__mapa' allowfullscreen="" loading="lazy" />
      <p className="local__descripcion">{descripcion}</p>
    </article> 
  );
}

export default Local;
