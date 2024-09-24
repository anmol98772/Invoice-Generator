import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "react-bootstrap/Container";
import InvoiceForm from "./components/InvoiceForm";
import Navbar from "react-bootstrap/Navbar"; // Import Bootstrap Navbar
import Nav from "react-bootstrap/Nav"; // Import Bootstrap Nav

const App = () => {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      {/* Add a header section */}
      <Navbar className="w-100 mb-4 " style={{backgroundColor:"#FFD7D7"}}>
        <Container>
          <Navbar.Brand href="#home" className="header-title">
            Invoice Generator
          </Navbar.Brand>
         
        </Container>
      </Navbar>

      {/* Main content */}
      <Container>
        <InvoiceForm />
      </Container>
    </div>
  );
};

export default App;