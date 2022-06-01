import { Link } from "react-router-dom";
import styles from "./Styles.module.css";
import HomeIcon from "@mui/icons-material/Home";

const Index = () => {
  return (
    <div className={styles.background}>
      <Link to="/index">
        <HomeIcon className={styles.homeIcon} />
      </Link>
      <div>
        <h1>Lateralidad</h1>
        <p>
          La lateralidad es el predominio funcional de un lado del cuerpo humano
          sobre el otro, determinado por la supremacía de uno de los hemisferios
          cerebrales. Este concepto se refiere a la capacidad del cerebro para
          controlar los dos lados del cuerpo. La lateralidad en los niños se
          consolida a los 4 o 5 años de edad.
        </p>
        <p>
          Para lograr una organización neurológica completa, un niño debe tener
          un dominio hemisférico en todas las áreas funcionales. Esto significa
          que el niño no solo debe usar la misma mano consistentemente, sino que
          debe coincidir con sus ojos, orejas y piernas.
        </p>
        <div>
          <Link to="songs">Rondas y canciones</Link>
          <Link to="exercises">Ejercicios</Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
