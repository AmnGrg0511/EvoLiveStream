import Navbar from "./components/navbar";
import Pricing from "./components/pricing";
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from "./components/home";
import Footer from "./components/footer";
import Startupprogram from "./components/startupprogram";
function App() {
  return (
    <>  
      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/startup" component={Startupprogram}></Route>
        <Route path="/pricing" component={Pricing}></Route>
        <Route path="/" component={Home}></Route>
      </Switch>
      <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
