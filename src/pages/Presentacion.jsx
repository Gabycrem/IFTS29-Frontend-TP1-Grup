import Card from '../components/Card/Card';
import "../styles/global.css";
import "../styles/presentacion.css";
import perfillucas from '/assets/perfillucas.jpg';
import perfilmica from '/assets/perfilmica.jpg';
import perfilnazarena from '/assets/perfilnazarena.jpg';
import perfilmirta from '/assets/perfilmirta.jpg';

const integrantes = [
  {
    nombre: 'Nazarena Macre',
    imagen: perfilnazarena,
    descripcion: 'Lider de proyecto y estructuracion ✨',
  },
  {
    nombre: 'Micaela Luaces',
    imagen: perfilmica,
    descripcion: 'Frontend con alma creativa ✨',
  },
  {
     nombre: 'Lucas Blaci',
    imagen: perfillucas,
    descripcion: 'El cerebro detrás de los JSON y la lógica de datos. ✨',
    
  },
  {
    nombre: 'Mirta Verón',
    imagen: perfilmirta,
    descripcion: 'Diseñadora visual y funcional. ✨',
  },
];

export default function Presentacion() {
  return (
    <section className="presentacion">
      <h1>Nos presentamos</h1>
      <div className="tarjetas-container">
        {integrantes.map((i, idx) => (
          <Card
            key={idx}
            title={i.nombre}
            image={i.imagen}
            description={i.descripcion}
            className="card-grande"
          />

        ))}
      </div>
    </section>
  );
}


