import Header from "../Header";
import Hour from "../Hour";
import Nav from "../Nav";
import Footer from "../Footer";

function Layout({ children }){
  return(
    <>
      <div id="container">
        <Header />
        <Nav />
        <Hour />
        {children}
        <Footer />
      </div>
    </>
        
  );
}

export default Layout;
