import { Link } from "react-router-dom";
import styles from "./Styles.module.css";

const Index = () => {
  return (
    <div className={styles.background}>
      <h1>Motricidad</h1>
      <div>
        <p>
          La motricidad es una capacidad que trata sobre el desarrollo de
          diversos movimientos y gestos. Existen dos tipos de destrezas
          motrices:
        </p>
        <p>
          <u>Motricidad gruesa</u>: Comprenden los movimientos motrices
          complejos como lanzar objetos, patear una pelota o saltar la soga.
        </p>
        <p>
          <u>Motricidad fina</u>: Se refieren a las actividades que requieren la
          coordinación ojo-mano y la coordinación de los músculos cortos.
          Ejemplos: Recortar figuras o agarrar el lápiz para dibujar.
        </p>
      </div>
      <div>
        <Link to="songs">Rondas y canciones</Link>
        <Link to="exercises">Ejercicios</Link>
      </div>
    </div>
  );
};

export default Index;
