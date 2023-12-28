import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
function App() {

  return (
    <div className="App">
      <Navbar />
      <MainRoutes />
      <Footer/>
    </div>
  );
}

export default App;
