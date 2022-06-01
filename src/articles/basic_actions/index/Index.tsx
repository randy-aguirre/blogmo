import { Link } from "react-router-dom";
import styles from "./Styles.module.css";
import HomeIcon from "@mui/icons-material/Home";

const Index = () => {
  return (
    <div className={styles.background}>
      <Link to="/index">
        <HomeIcon className={styles.homeIcon} />
      </Link>
      <h1>Acciones Básicas</h1>
      <p>
        Desde luego que se puede definir los patrones fundamentales como los
        movimientos organizados de forma secuencial, rutinarios establecidos que
        ayudan al desplazamiento de un cuerpo. Las habilidades locomotrices se
        adquieren y se desarrollan en forma automática, ya que son movimientos
        naturales y heredados, sobre los que se pueden desarrollar varias
        habilidades fundamentales, habilidades que con el crecimiento del
        individuo van madurando y se van diversificando en varias formas, de
        acuerdo con los factores externos que influyen en la especialización
        motriz de cada niño. Entre las habilidades locomotrices se encuentran
        las siguientes: Andar, correr, saltar, variaciones del salto, etc.
      </p>
      <div>
        <Link to="songs">Rondas y canciones</Link>
        <Link to="exercises">Ejercicios</Link>
      </div>
    </div>
  );
};

export default Index;
