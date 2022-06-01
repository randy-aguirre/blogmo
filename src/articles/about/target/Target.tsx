import { Link } from "react-router-dom";
import styles from "./Styles.module.css";
import HomeIcon from "@mui/icons-material/Home";

const Target = () => {
  return (
    <div className={styles.background}>
      <Link to="/index">
        <HomeIcon className={styles.homeIcon} />
      </Link>
      <h1>Objetivos</h1>
      <div>
        <h2>Objetivo General</h2>
        <p>
          Fortalecer el desarrollo psicomotor de los estudiantes de preescolar
          de la Escuela Normal Superior la Hacienda a través de una intervención
          pedagógica.
        </p>
        <h2>Objetivos específicos</h2>
        <ul>
          <li>
            <p>
              Promover el desarrollo psicomotor en los estudiantes de preescolar
              por medio del blog educativo “Juega, diviértete y aprende”.{" "}
            </p>
          </li>
          <li>
            <p>
              Fomentar habilidades psicomotoras enfocadas en el equilibrio, la
              coordinación y la lateralidad a través del blog educativo “Juega,
              diviértete y aprende”.
            </p>
          </li>
          <li>
            <p>
              Evaluar, a través del blog educativo “Juega, diviértete y aprende”
              el desempeño de los estudiantes en el desarrollo psicomotor antes,
              durante y después de la ejecución de la propuesta pedagógica.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Target;
