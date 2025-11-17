import { useNavigate } from 'react-router-dom';

function Contacto() {
  const navigate = useNavigate();

  return (
    <div className="contacto-bg">
      <h2>Contactame por Aqui</h2>
      <h3>Envia tu Mensaje</h3>
      <form className="form-contacto" action="https://formsubmit.co/rodriguezlima1984@gmail.com" method="POST">
        <input type="text" name="name" placeholder="Tu nombre" required />
        <input type="email" name="email" placeholder="Tu correo" required />
        <textarea name="mensaje" placeholder="Tu mensaje" required />
        <button type="submit">Enviar</button>
      </form>

      <div style={{ marginTop: 10 }}>
        <button onClick={() => navigate('/')} style={{ marginRight: 8, padding: '10px', background: '#333', color: '#fff', border: 'none', cursor: 'pointer' }}>Volver</button>
      </div>
    </div>
  );
}
export default Contacto