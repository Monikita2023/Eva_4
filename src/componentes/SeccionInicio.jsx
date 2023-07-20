import React, { useEffect } from 'react';
// Componente ControlCookies: Se encarga de mostrar la notificación de cookies y controlar si debe mostrarse o no.
function ControlCookies() {
  useEffect(() => {  // El useEffect se ejecuta solo una vez cuando se monta el componente.
  
  
    if (!sessionStorage.controlcookie || sessionStorage.controlcookie <= 0) {   // Aquí verificamos si sessionStorage.controlcookie no existe o es menor o igual a 0.
      const cookie1 = document.getElementById('cookie1');// Si es así, significa que no se ha aceptado aún o se ha eliminado el valor, por lo que mostramos la notificación.
 
      if (cookie1) {
        cookie1.style.animation = 'desaparecer 5s';
      }
    }
  }, []);

  return null;
}
// handleAccept: Esta función se ejecuta cuando el usuario acepta las cookies.
const handleAccept = () => { // Aumentamos el contador de control de cookies almacenado en sessionStorage.
 
  sessionStorage.controlcookie = sessionStorage.controlcookie ? parseInt(sessionStorage.controlcookie) + 1 : 1;
  const cookie1 = document.getElementById('cookie1');
  if (cookie1) {
    cookie1.style.display = 'none';
  }
};

// Componente SeccionInicio: Representa una sección de la página.
function SeccionInicio() {
  return (
  <div>
      <section className="section" id="inicio">
      <div className="articulos">
        <article className="article">
          <img src="https://images.pexels.com/photos/811572/pexels-photo-811572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h3>AGENDAS PERSONALIZADAS</h3>
          <h2>Variedades de Diseños</h2>
          <p>Tenemos una gran variedad de diseños, pero si tú quieres uno especial, nos puedes enviar tu diseño.</p>
        </article>
        <article className="article">
          <img src="https://media.istockphoto.com/id/1359597432/es/foto/trabajador-masculino-usando-un-horno-de-secado-para-camiseta-en-un-taller.jpg?b=1&s=612x612&w=0&k=20&c=0hd7xUQU-Q4uJ4EwjYcqJJA1X4i-q5GrOR9WfDL57I4=" alt="" />
          <h3>ESTAMPADOS</h3>
          <h2>Poleras</h2>
          <p>Tenemos una gran variedad de diseños, pero si tú quieres uno especial, nos puedes enviar tu diseño.</p>
        </article>
        <article className="article">
          <img src="https://images.pexels.com/photos/3493047/pexels-photo-3493047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <h3>TAZONES PERSONALIZADOS</h3>
          <h2>Variedades de Diseños</h2>
          <p>Tenemos una gran variedad de diseños, pero si tú quieres uno especial, nos puedes enviar tu diseño.</p>
        </article>
        <article className="article">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyu1t4N9rJXmaDv066rHhtYYEfkyaItoCVOA&usqp=CAU" alt="" />
          <h3>LLAVEROS PERSONALIZADOS</h3>
          <h2>Para toda ocasión!!!</h2>
          <p>Recuerdos para cumpleaños, baby shower, matrimonio, etc.</p>
        </article>
      </div>
      <aside className="aside">
        <div className="publicidad">
          <h4>CHAPITAS PERSONALIZADAS</h4>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhsGEP9NrW_FbdMucVyU5Y0LSicJnZXoCYfRI_MsPVdcjdi-r7pgUX_0qXFAM4bhah44&usqp=CAU" alt="" />
        </div>
        <div className="publicidad">
          <h4>NUESTROS TRABAJOS</h4>
          <img src="data:image/jpeg;base64,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" alt="" />
        </div>
      </aside>
      
      
    </section>

    <div id="cookie1" className="cookiesms">
    
    <p>Este sitio web utiliza cookies. Si continúa utilizando este sitio, asumiremos que está de acuerdo con ello.</p>
    <button onClick={handleAccept}>Aceptar</button>
    
  </div>
  <ControlCookies />
<div className="footer section bg-white">
<footer>
   <p>Derechos reservados &copy; 2023</p>
   <p>impresionesmonikita@hotmail.com</p>
    <p>Nuestro número de contacto es: +569 68 464501</p>
</footer>
</div>
</div> 
  );
}

export default SeccionInicio;