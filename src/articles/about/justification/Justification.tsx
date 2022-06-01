import { Link } from "react-router-dom";
import styles from "./Styles.module.css";
import HomeIcon from "@mui/icons-material/Home";

const Justification = () => {
  return (
    <div className={styles.background}>
      <Link to="/index">
        <HomeIcon className={styles.homeIcon} />
      </Link>
      <h1>Justificación</h1>
      <div>
        <p>
          Desarrollar esta propuesta pedagógica es importante ya que el
          sedentarismo es la causa de muchas enfermedades tales como el riesgo
          cardiovascular, la diabetes, la obesidad, trastornos del sueño, entre
          otras, es por eso que el desarrollo y el fomentar la psicomotricidad
          de los estudiantes desde temprana edad ayudará a que el sedentarismo
          disminuya dentro de la comunidad educativa.
        </p>
        <p>
          A su vez, genera un impacto a nivel social, ya que las personas que
          tengan un acercamiento con los participantes, tales como amigos o
          familiares también pueden tomar conciencia de la problemática y
          comenzar a realizar las actividades con sus hijos, de la misma forma
          los docentes y directivos docentes de la institución.
        </p>
        <p>
          También, es pertinente realizar este tipo de propuestas ya que los
          altos índices de sedentarismo son evidentes, con la llegada de los
          aparatos tecnológicos aún más, por ende, en esta época donde la
          tecnología está por encima de la actividad física es menester fomentar
          y desarrollar este tipo de propuestas que generen un impacto positivo
          en la salud de los niños y que la actividad física se vuelva hábito
          para la creación de una sociedad más saludable.
        </p>
        <p>
          Por último, este proyecto es viable en cuanto a la producción del
          material de trabajo, ya que no se utilizaron recursos económicos
          elevados, se trabajará con material audiovisual el cual se puede
          obtener de forma gratuita en plataformas como YouTube, por ende no fue
          necesario la recolección elevada de recursos económicos.
        </p>
      </div>
    </div>
  );
};

export default Justification;
