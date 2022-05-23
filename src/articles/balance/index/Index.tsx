import { Link } from "react-router-dom";
import styles from "./Styles.module.css";

const Index = () => {
  return (
    <div className={styles.background}>
      <h1>Equilibrio</h1>
      <p>
        El equilibrio es la capacidad de mantener una posición física controlada
        durante momentos de reposo o actividades dinámicas. Si bien esta
        habilidad necesita de hitos del desarrollo que se adquieren desde el
        nacimiento hasta los cinco años, muchos niños dominan las habilidades de
        equilibrio antes de entrar a preescolar.
      </p>
      <div>
        <Link to="songs">Rondas y canciones</Link>
        <Link to="exercises">Ejercicios</Link>
      </div>
    </div>
  );
};

export default Index;
