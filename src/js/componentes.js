import '../css/componentes.css';
import webpacklogo from '../assets/Img/webpack-logo.png';


export const saludar=(nombre) =>{
    console.log ('Creando etiqueta hi');

    const h1=document.createElement('h1');
    h1.innerText= `Hola Happy Saint Valentine's Day, ${nombre}`;

    document.body.append (h1);

    //Img
    
    //console.log(webpacklogo);
    //const img=document.createElement ('img');
    //img.src=webpacklogo;
    //document.body.append(img);
}









