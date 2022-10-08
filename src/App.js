import "./App.css";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Content from "./component/Content";
import Card from "./component/Card";
import Partner from "./component/Partner";
import Carousel from "./component/Carousel";

function App() {
  return (
    <>
      <Navbar />
      <Content />
      <Card />
      {/* 
      <Carousel />
      <Partner />
      <Footer /> */}
    </>
  );
}

export default App;
