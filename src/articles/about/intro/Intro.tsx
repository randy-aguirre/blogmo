import styles from "./Styles.module.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className={styles.background}>
      <Link to="/index">
        <HomeIcon className={styles.homeIcon} />
      </Link>
      <h1>Introducción</h1>
      <div>
        <p>
          El desarrollo psicomotor es sumamente importante que se desarrolle
          desde edades tempranas, tal como lo afirma Pacheco (2015):
        </p>
        <p>
          La educación psicomotriz es importante porque contribuye al desarrollo
          integral de los niños y las niñas, ya que, desde una perspectiva
          psicológica y biológica, los ejercicios físicos aceleran las funciones
          vitales y mejoran el estado de ánimo. Fortalece la Salud en gran
          medida al estimular la circulación y la respiración, favoreciendo una
          mejor nutrición de las células y la eliminación de los desechos.
          También fortalece los huesos y los músculos (p.12)
        </p>
        <p>
          En ese orden de ideas, fomentar las actividades psicomotoras trae
          diversos beneficios para salud en la niñez, además fortalece también
          la parte mental porque “potencia el desarrollo y control de
          habilidades motrices permite que los niños y niñas se sientan capaces;
          proporciona satisfacción y libera tensiones o emociones fuertes”
          (Pacheco, 2015, p.13).
        </p>
        <p>
          Dentro de esta propuesta se realizarán seis ejercicios para fortalecer
          el desarrollo psicomotor, dentro de esas actividades se trabajará el
          equilibrio, la coordinación y la motricidad, todo esto se hará en
          compañía de los materiales audiovisuales que estarán en el blog, las
          principales actividades consistirán en saltar, mantener el equilibrio,
          desplazarse de un lugar a otro brincando, quedarse quieto en un lugar
          por un tiempo largo para medir la capacidad de sostenimiento de las
          extremidades, entre otras actividades que ayudarán a hacerle frente al
          sedentarismo que presentan los estudiantes.
        </p>
      </div>
    </div>
  );
};

export default Intro;
