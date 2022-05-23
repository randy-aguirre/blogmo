import { Link } from "react-router-dom";
import styles from "./Styles.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Index = () => {
  return (
    <>
      <div className={styles.background}>
        <div className={styles.linkContainer}>
          <div>
            <FavoriteIcon className={styles.icon} />
            <Link to="intro">Introducción</Link>
          </div>
          <div>
            <FavoriteIcon className={styles.icon} />
            <Link to="justification">Justificación</Link>
          </div>
          <div>
            <FavoriteIcon className={styles.icon} />
            <Link to="objective">Objetivos</Link>
          </div>
          <div>
            <FavoriteIcon className={styles.icon} />
            <Link to="theory-considetarions">Consideraciones Teóricas</Link>
          </div>
          <div>
            <FavoriteIcon className={styles.icon} />
            <Link to="methodology">Ruta Metodológica</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
