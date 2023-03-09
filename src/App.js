import logo from './logo.svg';
import './App.css';
import Review from './components/Review';
import Tarjeta from './components/Tarjeta';
 
  function App() {
  return (
    <div className="App">
        <Review 
        texto="Me gusto mucho la pelicula"
        nombre="Emmanuel"
        cargo="Vendedor"
        imagen="tontin"/>

        <Review 
        texto="Me gusto mucho la pelicula"
        nombre="Evelin"
        cargo="Recolectora de residuos"
        imagen="zulma"/>

        <Review 
        texto="Me gusto mucho la pelicula"
        nombre="Paula"
        cargo="Actriz"
        imagen="wanda"/>

      <div className='d-flex'>

     
      <Tarjeta 
        cimg="image-equilibrium"
        titulo="Equilibrium #3429"
        texto="Our Equilibrium collection promotes balance and calm."
        imgt="icon-ethereum"
        texto2="0.041 ETH"
        imgt2="icon-clock"
        texto3="3 days left"
        imgp="image-avatar"
        t1="Creation of"
        t2="Jules Wyvern"
        />
      <Tarjeta 
        cimg="koala"
        titulo="Koala"
        texto="El koala es una especie de marsupial diprotodonto de la familia Phascolarctidae, endémico de Australia."
        imgt="icon-ethereum"
        texto2="0.041 ETH"
        imgt2="icon-clock"
        texto3="3 days left"
        imgp="selena-gomez"
        t1="Creation of"
        t2="Selena Gomez"
        />
      <Tarjeta 
        cimg="husky"
        titulo="Husky Siberiano"
        texto=" El husky siberiano es un perro de trabajo originaria del norte de Siberia."
        imgt="icon-ethereum"
        texto2="0.041 ETH"
        imgt2="icon-clock"
        texto3="3 days left"
        imgp="angelina"
        t1="Creation of"
        t2="Angelina Jolie"
        />
         </div>
    </div>   
  ); 
 }  
 

export default App;

/* `hola mundo yo me llamo ${nombre} y estoy aprendiendo a ${tema}!!` */