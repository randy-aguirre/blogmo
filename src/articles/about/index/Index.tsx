import { Link } from "react-router-dom";
import styles from "./Styles.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";

const Index = () => {
  return (
    <>
      <div className={styles.background}>
        <Link to="/index">
          <HomeIcon className={styles.homeIcon} />
        </Link>
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
        </div>
      </div>
    </>
  );
};

export default Index;
