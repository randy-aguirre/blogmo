import { Link } from "react-router-dom";
import styles from "./Styles.module.css";

const Index = () => {
  return (
    <div className={styles.background}>
      <div className={styles.linkContainer}>
        <Link to="/">Inicio</Link>
        <Link to="/about">A cerca de</Link>
        <Link to="/body-scheme">Esquema corporal</Link>
        <Link to="/motor-skills">Motricidad</Link>
        <Link to="/basic-actions">Acciones básicas</Link>
        <Link to="/balance">Equilibrio</Link>
        <Link to="/coordination">Coordinación</Link>
        <Link to="/eye-hand-coordination">Coordinación Óculo-Manual</Link>
        <Link to="/eye-foot-coordination">Coordinación Óculo-Pédica</Link>
        <Link to="/laterality">Lateralidad</Link>
        <Link to="/alternative-resources">Recursos alernativos</Link>
      </div>
    </div>
  );
};

export default Index;
