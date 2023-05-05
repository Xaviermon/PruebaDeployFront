import DetailPokemon from "./components/views/DetailPokemon/DetailPokemon";
import LandingPage from "./components/views/LandingPage/LandingPage";
import Home from "./components/views/Home/Home";
import FormPage from "./components/FormPage/FormPage";
import { Route, Routes } from "react-router-dom";
import UpdateForm from "./components/UpdateForm/UpdateForm"
import axios from 'axios'

//axios.defaults.baseURL = 'http://localhost:3001'
axios.defaults.baseURL = 'https://deploy-production-a99f.up.railway.app/'


function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/DetailPokemon/:id" element={<DetailPokemon />} />
        <Route path="/create" element={<FormPage />} />
        <Route path="/create/:id" element={<UpdateForm />} />
      </Routes>
    </div>
  );
}

export default App;
