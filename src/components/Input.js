const validarCelular = e => {
    const k = e.key.charCodeAt(0);
    if(e.target.value.length > 9 || k < 48 || k > 57){
      e.preventDefault();
    }
}

function Input({ className = 'form__input', id, name, type = 'text' }){
  return(
    <input 
      className={className}
      id={id}
      name={name}
      type={type}
      onKeyPress={e => name === "celular" ? validarCelular(e) : null}
    />
  )
}


export default Input;
