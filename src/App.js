import './App.css';
import NavigationBar from './components/NavigationBar';
import Proizvodi from './components/Proizvodi';
import Korpa from './components/Korpa';
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BottomBar from './components/BottomBar';


function App() {

  const [korpaBroj, postaviKorpaBroj] = useState(0);
  const [korpaProizvodi, postaviKorpaProizvodi] = useState([]);

  const [proizvodi] = useState([
    {
      id: 1,
      naziv: "Capricciosa",
      sastojci:
        "Sir, šunka, šampinjoni, masline",
      kolicina: 0,
      vrsta: "pice",
      cena: 700,
      slika: "capricciosa.jpg",
    },
    {
      id: 2,
      naziv: "Pepperoni",
      sastojci:
        "Pepperoni, sir",
      kolicina: 0,
      vrsta: "pice",
      cena: 750,
      slika: "pepperoni.jpg",
    },
    {
      id: 3,
      naziv: "4 vrste sira",
      sastojci:
        "Sir, gorgonzola, parmezan, dimljeni sir",
      kolicina: 0,
      vrsta: "pice",
      cena: 720,
      slika: "4sira.jpg",
    },
    {
      id: 4,
      naziv: "Calzone",
      sastojci:
        "Sir, šunka, pančeta, kisela pavlaka, šampinjoni",
      kolicina: 0,
      vrsta: "pice",
      cena: 600,
      slika: "calzone.jpg",
    },
    {
      id: 5,
      naziv: "Big burger",
      sastojci:
        "Juneće meso, topljeni sir, kečap, burger sos, iceberg salata, paradajz, luk, pomfrit",
      kolicina: 0,
      vrsta: "burgeri",
      cena: 780,
      slika: "bigburger.jpg",
    },
    {
      id: 6,
      naziv: "Cheeseburger",
      sastojci:
        "Juneće meso, topljeni sir, big burger sos, tartar sos, iceberg salata, paradajz, pohovani kačkavalj, pomfrit",
      kolicina: 0,
      vrsta: "burgeri",
      cena: 780,
      slika: "cheeseburger.jpg",
    },
    {
      id: 7,
      naziv: "Gorgonzola burger",
      sastojci:
        "Juneće meso, gorgonzola sos, paradajz, iceberg salata, rukola, onion rings, pomfrit",
      kolicina: 0,
      vrsta: "burgeri",
      cena: 800,
      slika: "gorgonzola.jpg",
    },


    
  ]);


  function vrsta(v){
    let proizvodi_pice = proizvodi.filter((prod) => prod.vrsta === v);
    return proizvodi_pice;
  }

  function korpa() {
    let pKorpa = proizvodi.filter((prod) => prod.kolicina > 0);
    postaviKorpaProizvodi(pKorpa);
  }

  function dodaj(id) {

    postaviKorpaBroj(korpaBroj + 1);

    proizvodi.forEach((prod) => {
      if (prod.id === id) {
        prod.kolicina++;
      }
      console.log(prod.kolicina);
      
    });

    korpa();
  }
    
    function oduzmi(id) {
      if (korpaBroj > 0 ) postaviKorpaBroj(korpaBroj - 1);
      
      proizvodi.forEach((prod) => {
        if (prod.id === id) {
          if(prod.kolicina > 0){
          prod.kolicina--;
          }
        }
        console.log(prod.kolicina);
        korpa();
      });
    }

    // const stil = { background-color: "rgb(153, 76, 0)"};
  

  return (
    <BrowserRouter className="App">
      <NavigationBar></NavigationBar>
      <Routes>
        <Route
          path="/"
          element={<Proizvodi przi={proizvodi} dodaj={dodaj} oduzmi = {oduzmi}/>}
        />
        <Route path="/pice"
          element={<Proizvodi przi={vrsta("pice")} dodaj = {dodaj} oduzmi = {oduzmi} />} />
      <Route path="/burgeri"
          element={<Proizvodi przi={vrsta("burgeri") }  dodaj = {dodaj} oduzmi = {oduzmi}/>} />

          <Route path="/korpa" element={<Korpa proizvodi={korpaProizvodi} />} />
      </Routes>
      
      <BottomBar></BottomBar>
    </BrowserRouter>
  );
}

export default App;

