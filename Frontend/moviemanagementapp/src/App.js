import './App.css';
import { Routes, Route } from 'react-router-dom';
import AddMovies from './Components/AddMovies';
import ViewMovies from './Components/ViewMovies';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ViewMovies/>}/>
        <Route path='/add' element={<AddMovies data={{movieName:"",actor:"",actress:"",genre:"",director:"",releaseYear:"",camera:"",producer:"",language:""}} method='post'/>}/>
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
