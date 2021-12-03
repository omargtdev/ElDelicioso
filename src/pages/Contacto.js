import Form from "../components/Form";
import Layout from "../components/layouts/Layout";

function Contacto(){
  return (
    <Layout>
      <main className="contacto">
        <img className="contacto__img" src='/images/contacto1.png' alt="contacto" />
        <section className="contacto__section">
          <h2 className="contacto__titulo">Contactanos!</h2>
          <div className="contacto__info">
            <p className="contacto__p"><b>Email:</b> eldelicioso@gmail.com</p>
            <p className="contacto__p"><b>Telefono:</b> 01-521321</p>
            <p className="contacto__p"><b>Whatsapp:</b> +51 987359916 / +51 956812195</p>
          </div>
        </section>
        <Form />
      </main>
    </Layout>
  );
}

export default Contacto;

