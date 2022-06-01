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
        <h1>Coordinación</h1>
        <p>
          La coordinación motora es la capacidad nata de las personas para
          realizar correcta y eficientemente movimientos corporales, gracias a
          una adecuada comunicación entre el cerebro y las extremidades. En
          estos movimientos se incluyen también el equilibrio, la
          sincronización, la orientación y la fuerza aplicada. La coordinación
          motora se desarrolla de forma gradual durante los primeros años de
          vida hasta la adolescencia. Por lo tanto, podemos dividirlo en etapas
          esperables, las cuales aparecen por ser capacidades innatas pero
          también es necesario estimularlas para pulirlas o enseñar habilidades
          un poco más complejas.
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
