import styles from "./Styles.module.css";
import SettingsIcon from "@mui/icons-material/Settings";

const Exercises = () => {
  return (
    <div className={styles.background}>
      <h1>Ejercicios</h1>
      <div className={styles.content}>
        <div>
          <div>
            <SettingsIcon />
          </div>
          <div>
            <h2>Mechanical Energy</h2>
            <p>Venus is the second planet from the Sun</p>
          </div>
        </div>

        <div>
          <div>
            <SettingsIcon />
          </div>
          <div>
            <h2>Mechanical Energy</h2>
            <p>Venus is the second planet from the Sun</p>
          </div>
        </div>

        <div>
          <div>
            <SettingsIcon />
          </div>
          <div>
            <h2>Mechanical Energy</h2>
            <p>Venus is the second planet from the Sun</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exercises;
