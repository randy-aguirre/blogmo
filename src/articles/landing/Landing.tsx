import { Link } from "react-router-dom";
import styles from "./Styles.module.css";
const Landing = () => {
  return (
    <div className={styles.background}>
      <div className={styles.linkContainer}>
        <Link to="index">Ir al índice</Link>
        <Link to="about">Ir a sección acerca de</Link>
      </div>
    </div>
  );
};

export default Landing;
