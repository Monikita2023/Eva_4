import React, { useState, useEffect } from 'react';

const SeccionContact = (props) => {
  // Definición de los estados locales utilizando el hook 'useState'
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [numero, setNumero] = useState('');
  const [opcion, setOpcion] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [acepto, setAcepto] = useState(false);
  const [registroExitoso, setRegistroExitoso] = useState(false);
  const [registros, setRegistros] = useState([]);
  const [modoEdicion, setModoEdicion] = useState(false);
  const [registroEditado, setRegistroEditado] = useState(null);

   // useEffect se utiliza para realizar efectos secundarios, como cargar datos iniciales

  useEffect(() => {
     // Obtenemos los registros almacenados en el localStorage y los guardamos en el estado 'registros'
    const registrosGuardados = JSON.parse(localStorage.getItem('registros')) || [];
    setRegistros(registrosGuardados);
  }, []);
  // Función para obtener la hora actual en formato "HH:mm:ss"
  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };
  // Event handlers para actualizar los estados locales cuando se modifican los campos del formulario
  const handleNombreChange = (e) => {
    setNombre(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFechaChange = (e) => {
    setFecha(e.target.value);
  };

  const handleNumeroChange = (e) => {
    setNumero(e.target.value);
  };

  const handleOpcionChange = (e) => {
    setOpcion(e.target.value);
  };

  const handleMensajeChange = (e) => {
    setMensaje(e.target.value);
  };

  const handleAceptoChange = (e) => {
    setAcepto(e.target.checked);
  };
   // Event handler para el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de los campos obligatorios
    if (!nombre || !email || !acepto) {
      alert('Por favor, completa todos los campos obligatorios');
      return;
    }

    const currentTime = getCurrentTime();

    if (modoEdicion && registroEditado !== null) {
      // Modo edición
      const registrosActualizados = registros.map((registro, index) => {
        if (index === registroEditado) {
          return {
            ...registro,
            nombre,
            email,
            fecha,
            numero,
            opcion,
            mensaje,
            acepto,
            hora: currentTime,
          };
        }
        return registro;
      });
      // Actualiza los registros en el estado y en el localStorage
      localStorage.setItem('registros', JSON.stringify(registrosActualizados));
      setRegistros(registrosActualizados);
      setModoEdicion(false);
      setRegistroEditado(null);
    } else {
      // Modo creación: agrega un nuevo registro 
      const registro = {
        nombre,
        email,
        fecha,
        numero,
        opcion,
        mensaje,
        acepto,
        hora: currentTime,
      };
      // Guarda el nuevo registro en el estado y en el localStorage
      const registrosGuardados = JSON.parse(localStorage.getItem('registros')) || [];
      registrosGuardados.push(registro);
      localStorage.setItem('registros', JSON.stringify(registrosGuardados));
      setRegistros(registrosGuardados);
    }
    // Reinicia los campos del formulario y muestra un mensaje de registro exitoso
    setNombre('');
    setNombre('');
    setEmail('');
    setFecha('');
    setNumero('');
    setOpcion('');
    setMensaje('');
    setAcepto(false);
    setRegistroExitoso(true);
  };
  // Event handler para editar un registro existente
  const handleEditarRegistro = (index) => {
    const registro = registros[index];
    setNombre(registro.nombre);
    setEmail(registro.email);
    setFecha(registro.fecha);
    setNumero(registro.numero);
    setOpcion(registro.opcion);
    setMensaje(registro.mensaje);
    setAcepto(registro.acepto);
    setModoEdicion(true);
    setRegistroEditado(index);
  };
  // Event handler para eliminar un registro existente
  const handleEliminarRegistro = (index) => {
    const nuevosRegistros = [...registros];
    nuevosRegistros.splice(index, 1);
    localStorage.setItem('registros', JSON.stringify(nuevosRegistros));
    setRegistros(nuevosRegistros);
  };
  // Event handler para limpiar todos los registros almacenados
  const handleLimpiarRegistros = () => {
    localStorage.removeItem('registros');
    setRegistros([]);
  };
  // Event handler para exportar los registros en formato JSON
  const handleExportarRegistros = () => {
    const registrosExportados = JSON.stringify(registros, null, 2);
    const blob = new Blob([registrosExportados], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'registros.json';
    a.click();
  };
  // useEffect para mostrar el mensaje de registro exitoso durante 3 segundos y luego ocultarlo
  useEffect(() => {
    let timeout;
    if (registroExitoso) {
      timeout = setTimeout(() => {
        setRegistroExitoso(false);
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [registroExitoso]);
// Renderizado del componente
  return (
    <section id="contacto" className="contact-section">
      <div className="container-form">
        <form id="contacto-form" onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" value={nombre} onChange={handleNombreChange} required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} required />

          <label htmlFor="fecha">Fecha:</label>
          <input type="date" id="fecha" name="fecha" value={fecha} onChange={handleFechaChange} />

          <label htmlFor="numero">Número:</label>
          <input type="number" id="numero" name="numero" value={numero} onChange={handleNumeroChange} />

          <label htmlFor="opciones">Cual es tu Consulta?:</label>
          <select id="opciones" name="opciones" value={opcion} onChange={handleOpcionChange}>
            <option value=""></option>
            <option value="cotizacion">Cotizacion</option>
            <option value="reclamo">Reclamo</option>
          </select>

          <label htmlFor="mensajes">Dejanos tu mensaje:</label>
          <textarea name="mensaje" value={mensaje} onChange={handleMensajeChange} placeholder="Ingresa tu mensaje"></textarea>

          <label htmlFor="acepto">Acepto los términos:</label>
          <input type="checkbox" id="acepto" name="acepto" checked={acepto} onChange={handleAceptoChange} />

          <input type="submit" value={modoEdicion ? 'Guardar' : 'Enviar'} />
        </form>
      </div>

      {registroExitoso && (
        <div className="registro-exitoso">
          <p>¡¡¡Registro exitoso!!!. Los datos han sido almacenados.</p>
        </div>
      )}

      <section className="section bg-white" id="registros-contacto">
        <div>
          <h2>Registros</h2>
          {registros.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Email</th>
                  <th>Fecha</th>
                  <th>Número</th>
                  <th>Consulta</th>
                  <th>Mensaje</th>
                  <th>Hora</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {registros.map((registro, index) => (
                  <tr key={index}>
                    <td>{registro.nombre}</td>
                    <td>{registro.email}</td>
                    <td>{registro.fecha}</td>
                    <td>{registro.numero}</td>
                    <td>{registro.opcion}</td>
                    <td>{registro.mensaje}</td>
                    <td>{registro.hora}</td>
                    <td>
                      <button onClick={() => handleEditarRegistro(index)}>Editar</button>
                      <button onClick={() => handleEliminarRegistro(index)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No hay registros almacenados.</p>
          )}

          {registros.length > 0 && (
            <button className="boton-accion1" onClick={handleLimpiarRegistros}>
              Limpiar Registros
            </button>
          )}

          {registros.length > 0 && (
            <button className="boton-accion1" onClick={handleExportarRegistros}>
              Exportar Registros (JSON)
            </button>
          )}
        </div>
      </section>
    </section>
  );
};

export default SeccionContact;
