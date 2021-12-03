import { useEffect, useState } from 'react';

function Hour(){
    
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const tick = setInterval(() => setHora(new Date()), 1000)
    return () => clearInterval(tick);
  }, [])

  return(
    <div className="tiempo">
      <p id="hora">Hora: {
        hora.toLocaleTimeString().split(':')[0] > 10 
          ? hora.toLocaleTimeString() 
          : '0' + hora.toLocaleTimeString()
      }</p>
      <p id="fecha">Fecha: {hora.toLocaleDateString()}</p>
    </div>
  );
}


export default Hour;
