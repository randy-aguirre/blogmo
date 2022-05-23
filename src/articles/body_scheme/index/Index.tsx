import styles from "./Styles.module.css";
import bodySchemes from "../../../assets/images/esquema-corporal.png";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className={styles.background}>
      <h1>Esquema Corporal</h1>
      <div className={styles.content}>
        <div>
          <p>
            Podemos definir esquema corporal como la representación que tenemos
            de nuestro propio cuerpo, de las partes corporales, de sus
            posibilidades de movimiento y acción, así como de sus diferentes
            limitaciones.
          </p>
          <p>
            La representación del esquema corporal y de las relaciones
            medio-cuerpo se va construyendo mediante un largo proceso de ensayo
            y error, mediante la experiencia que niños y niñas tienen con su
            cuerpo y de las vivencias que con el se tienen, es un proceso
            gradual, consecuencia de la maduración y de los aprendizajes.
          </p>
          <p>
            Una vez conocido el esquema corporal los niños/as van a ser capaces
            de ajustar sus acciones a sus propósitos, como por ejemplo saber la
            fuerza que tienen que aplicar al coger un juguete pesado, o poder
            llevarse la cuchara a la boca.
          </p>
        </div>

        <img src={bodySchemes} alt="Esquema corporal niño y niña" />
        <div>
          <Link to="songs">Rondas y canciones</Link>
          <Link to="exercises">Ejercicios</Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
