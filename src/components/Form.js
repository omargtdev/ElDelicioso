import {useState} from "react";
import Input from "./Input";

const emailCorrect = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 

const isAnyEmpty = arr => {
  for(const e of arr){
    if(e === ''){
      return true;
    }
  }
  return false;
}

const generarMsg = (txt, type) => (
    <div style={
      { 
        background : (type === 0 ? 'red' : 'green'), 
        color : '#fff',
        padding : '15px',
        textAlign : 'center',
        fontWeight : 'bold'
      }
    }>
      {txt}
    </div>
);

const validarForm = (e, setMsg) => {
  e.preventDefault();

  const $form = e.target;
  const name = $form.nombre.value.trim();
  const lastname = $form.apellidos.value.trim();
  const cel = $form.celular.value.trim();
  const email = $form.email.value.trim();
  const mensaje = $form.mensaje.value.trim();

  if(isAnyEmpty([name, lastname, cel, email, mensaje])){
    setMsg(generarMsg('Debe completar todos los campos', 0))
    return;
  }else if(!emailCorrect.test(email)){
    setMsg(generarMsg('Debe colocar un email correcto', 0))
    return;
  }

  setMsg(generarMsg('Datos enviados correctamente', 1))
  $form.reset();
}
   

function Form(){

  const [msg, setMsg] = useState(null)

  if(msg){
    setTimeout(() => setMsg(null), 2500);
  }

  return(
    <form id="form" onSubmit={e => validarForm(e, setMsg)}>
      <h3 className="form__titulo">Envianos un correo!</h3>
      <div className="form__grupo">
        <label className="form__lbl" htmlFor="nombre">Nombre(s)</label>
        <Input id="nombre" name="nombre" />
      </div>
      <div className="form__grupo">
        <label className="form__lbl" htmlFor="apellidos">Apellidos</label>
        <Input id="apellidos" name="apellidos" />
      </div>
      <div className="form__grupo">
        <label className="form__lbl" htmlFor="cel">Celular</label>
        <Input id="cel" name="celular" />
      </div>
      <div className="form__grupo">
        <label className="form__lbl" htmlFor="email">Email</label>
        <Input id="email" name="email" type="email"/>
      </div>
      <div className="form__grupo">
        <label className="form__lbl" htmlFor="msg">Mensaje</label>
        <textarea id="msg" className="form__input" name="mensaje" cols="30" rows="10"></textarea>
      </div>
      <input className="form__btn" type="submit" value="Enviar" />
      {msg}
    </form>
  )
}


export default Form;
