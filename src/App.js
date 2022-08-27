import logo from './logo.svg';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Proizvodi from './components/Proizvodi';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  const [proizvodi] = useState([
    {
      id: 1,
      naziv: "Capricciosa",
      sastojci:
        "Sir, šunka, šampinjoni, masline",
      amount: 0,
      vrsta: "pice",
    },
    {
      id: 2,
      naziv: "Pepperoni",
      sastojci:
        "Pepperoni, sir",
      amount: 0,
      vrsta: "pice",
    },
    {
      id: 3,
      naziv: "4 vrste sira",
      sastojci:
        "Sir, gorgonzola, parmezan, dimljeni sir",
      amount: 0,
      vrsta: "pice",
    },
    {
      id: 4,
      naziv: "Calzone",
      sastojci:
        "Sir, šunka, pančeta, kisela pavlaka, šampinjoni",
      amount: 0,
      vrsta: "pice",
    },
  ]);

  // const [proizvodi] = useState(pice);

  function pice(){
    let proizvodi_pice = proizvodi.filter((prod) => prod.vrsta == "pice");
    return proizvodi_pice;
  }
  

  return (
    <BrowserRouter className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route
          path="/"
          element={<Proizvodi przi={proizvodi} />}
        />
        <Route path="/pice"
          element={<Proizvodi przi={pice()} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
