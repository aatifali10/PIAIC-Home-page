import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Content from "./component/Content";
import Card from "./component/Card";
import Partner from "./component/Partner";
// import Carousel from "./component/Carousel";
import Caro from "./component/Caro";

function App() {
  return (
    <>
      <Navbar />
      <Content />
      <Card />
      {/* <Carousel /> */}
      <Caro />
      <Partner />
      <Footer />
    </>
  );
}

export default App;
