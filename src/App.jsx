import Home from "./comp/pages/Home"
import Mywork from "./comp/pages/Mywork";
import './comp/styles/App.css';
import Tools from "./comp/pages/Tools";
import About from "./comp/pages/About";
import Footer from "./comp/pages/Footer";
export default function App() {
 return(
    <div id="App_con">

        <div>
            <Home />
        </div>
        <div id="Work">
        <Mywork />

        </div>
        <div>
            <Tools />
    </div>
    <div>
        <About />
        
    </div>
    <fiv>
        <Footer />
    </fiv>
    </div>
 )    
};
