import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
function App() {
  return (
        <div>
            <Navbar />
            <div className="flex">
                <Main />
                <Sidebar />
            </div>
            <Footer />
        </div>
    );
}

export default App;
