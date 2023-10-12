import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const candidatos = [
    {nombre: "Chris Badillos", mail: "a@q.com", stocked: true, url_cv: "url_al_file"},
    {nombre: "Erick Muñoz", mail: "b@q.com",stocked: true, url_cv: "url_al_file"},
    {nombre: "Javi Noble", mail: "c@q.com",stocked: false, url_cv: "url_al_file"},
    {nombre: "Alex Gaucho", mail: "d@q.com",stocked: true, url_cv: "url_al_file"},
    {nombre: "Ninia Morra", mail: "e@q.com",stocked: false, url_cv: "url_al_file"},
    {nombre: "Anuar ", mail: "f@q.com",stocked: true, url_cv: "url_al_file"}
  ]


  const invokeLambdaFunction = async () => {
    try {
      const response = await fetch('URL_de_la_API_Gateway', {
        method: 'GET', // O 'POST', 'PUT', etc. dependiendo de tu configuración
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Procesa la respuesta de la función Lambda
      } else {
        console.error('Error al invocar la función Lambda');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };
  
  invokeLambdaFunction();
  


ReactDOM.render(<App candidatos={candidatos}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
