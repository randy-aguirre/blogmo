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
        <h1>Coordinación Óculo-Manual</h1>
        <p>
          La coordinación óculo manual es una habilidad cognitiva compleja, en
          la cual se requiere una coordinación precisa entre la vista y los
          movimientos de la mano. Durante la coordinación óculo manual, la vista
          debe guiar los movimientos de la mano mediante un proceso de
          retroalimentación de información que crea un plano de ubicación y
          estímulo visual.
        </p>
        <p>
          Esta habilidad es necesaria para el desarrollo y aprendizaje de los
          niños en la escuela. La lectura, la escritura y los deportes son
          actividades que se desarrollan con un uso continuo de la coordinación
          óculo manual. De igual manera, es utilizada en gran parte de las
          actividades que realizamos a diario que requieren una coordinación
          entre ojos y manos
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
