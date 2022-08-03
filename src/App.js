
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import SidebarExample from './component/SidebarExample';
import Home from './component/Home';
import About from './component/About';
import Hobbies from './component/Hobbies';
import Portfolio from './component/Portfolio';
import Contact from './component/Contact';


function App() {
  return (
    <BrowserRouter>   
    <SidebarExample> 
    <Routes>
      <Route path="/"element={<Home/>}/>
      <Route path="/about"element={<About/>}/>
      <Route path="/hobbies"element={<Hobbies/>}/>
      <Route path="/portfolio"element={<Portfolio/>}/>
      <Route path="/contact"element={<Contact/>}/>
    </Routes>
    </SidebarExample> 
    </BrowserRouter>
  );
}

export default App;
