import "./App.css";
import BookNOw from "./components/BookNow/BookNOw";
import Food from "./components/Food/Food";
import Heading from "./components/Heading/Heading";
import Market from "./components/Market/Market";
import Navbar from "./components/Navbar/Navbar";
import background from "./assets/book-now.jpg";
import Review from "./components/Review/Review";
import Footer from "./components/Footer/Footer";
import footer_bg from "./assets/footer-bg.jpg";

function App() {
  return (
    <>
      <header>
        <div className="lg:px-32 px-4 bg-[#BD1F17]">
          <Navbar></Navbar>
          <Heading></Heading>
        </div>
      </header>
      <main>
        <div className="lg:px-32 px-4">
          <Market></Market>
        </div>
        <div className="lg:px-32 px-4 bg-[#FBF7F2]">
          <Food></Food>
        </div>
        <div
          className="lg:px-32 px-4"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <BookNOw></BookNOw>
        </div>
        <div className="lg:px-32 px-4">
          <Review></Review>
        </div>
      </main>
      <footer
        className="lg:px-32 px-4"
        style={{
          backgroundImage: `url(${footer_bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Footer></Footer>
      </footer>
    </>
  );
}

export default App;
