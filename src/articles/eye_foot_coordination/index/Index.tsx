import { Link } from "react-router-dom";
import styles from "./Styles.module.css";

const Index = () => {
  return (
    <div className={styles.background}>
      <h1>Coordinación Óculo-Pédica</h1>
      <p>
        Hablamos mucho sobre la{" "}
        <b>
          <a href="https://babysparks.com/es/2019/05/14/hand-eye-coordination-how-the-eyes-brain-and-hands-work-together/">
            coordinación ojo-mano
          </a>{" "}
        </b>
        puesto que se relaciona con casi cualquier actividad que los pequeños
        hacen con sus manos. Pero la coordinación ojo-pie es igual de importante
        porque le permite al niño realizar tareas con precisión con las piernas
        y los pies{" "}
        <b>
          <a href="https://babysparks.com/es/2020/03/25/the-evolution-of-learning-to-climb-stairs/">
            como subir escaleras
          </a>
        </b>{" "}
        o{" "}
        <b>
          <a href="https://babysparks.com/es/2020/01/23/the-evolution-of-kicking/">
            {" "}
            patear una pelota
          </a>
        </b>
        . A medida que el sistema vestibular y la propiocepción se desarrollan,
        adquieren más equilibrio, entienden dónde están sus miembros y cómo se
        mueven, y tienen acciones más coordinadas. Agrégale la coordinación
        ojo-pie a la mezcla y mejorarán en las tareas relacionadas con los pies.
      </p>
      <div>
        <Link to="songs">Rondas y canciones</Link>
        <Link to="exercises">Ejercicios</Link>
      </div>
    </div>
  );
};

export default Index;
