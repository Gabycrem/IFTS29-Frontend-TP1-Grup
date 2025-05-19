import Card from '../components/Card/Card';

const integrantes = [
  { nombre: 'Lucas Blaci', imagen: '/img/lucas.jpg' },
  { nombre: 'Micaela Luaces', imagen: '/img/micaela.jpg' },
  { nombre: 'Nazarena Macre', imagen: '/img/nazarena.jpg' },
  { nombre: 'Mirta Verón', imagen: '/img/mirta.jpg' }
];

export default function Presentacion() {
  return (
    <section className="tarjetas-container">
      {integrantes.map((i, idx) => (
        <Card
          key={idx}
          title={i.nombre}
          image={i.imagen}
          description={i.descripcion}
        />
      ))}
    </section>
  );
}


