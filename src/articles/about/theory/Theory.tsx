import { Link } from "react-router-dom";
import styles from "./Styles.module.css";
import HomeIcon from "@mui/icons-material/Home";

const Theory = () => {
  return (
    <div className={styles.background}>
      <Link to="/index">
        <HomeIcon className={styles.homeIcon} />
      </Link>
      <h1>Consideraciones Teóricas</h1>
      <div>
        <p>
          Para el diseño de la propuesta pedagógica, se partió de algunos
          principios teóricos de vital importancia para apoyar el diseño, el
          acceso, la realización y evaluación de actividades y talleres que
          fortalecerán las actividades psicomotoras para poder disminuir el
          sedentarismo en la comunidad educativa estudiada.
        </p>
        <p>
          El término psicomotricidad integra interacciones cognitivas,
          emocionales, simbólicas y sensorio motrices en la capacidad del ser y
          de expresarse en un contexto psicosocial y es necesario desarrollarla
          desde edades tempranas para desarrollar de forma correcta las
          capacidades del individuo, tal como lo afirma Pacheco (2015):
        </p>
        <p>
          La psicomotricidad se propone, como objetivo general, desarrollar o
          restablecer, mediante un abordaje corporal (a través del movimiento,
          la 11 postura, la acción y el gesto), las capacidades del individuo.
          Se puede incluso decir que pretende llegar por la vía corporal al
          desarrollo de las diferentes aptitudes y potencialidades del sujeto en
          todos sus aspectos (motor, afectivo social, comunicativo-lingüístico,
          intelectual-cognitivo) (p.11)
        </p>
        <p>
          Por su parte, un blog educativo, es una novedosa herramienta que tiene
          por objetivo compartir los contenidos educativos, que tiene como uno
          de sus beneficios que los estudiantes tengan fácil acceso a él y les
          sea de utilidad. "Los Blogs también ofrecen al docente facilidades
          para crear, visualizar, actualizar y compartir con otros colegas su
          propio banco de proyectos de clase y de actividades” (López, 2008). En
          este sentido es de vital importancia considerar esta propuesta como
          método, para fortalecer la comprensión lectora de los estudiantes
        </p>
      </div>
    </div>
  );
};

export default Theory;
