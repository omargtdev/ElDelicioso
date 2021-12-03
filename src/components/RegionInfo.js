
function RegionInfo({ titulo, parrafos }){
  
  return (
    <article className="region">
      <h3 className="region__titulo">{titulo}</h3>
      {parrafos.map(content => <p className="region__p">{content}</p>)}
    </article>
  );
}

export default RegionInfo;
