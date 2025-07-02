import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import SliderOne from "../components/sliderone/SliderOne";
function Home() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="container">
          <SliderOne />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
