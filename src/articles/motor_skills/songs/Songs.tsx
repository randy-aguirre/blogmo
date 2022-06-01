import styles from "./Styles.module.css";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const Songs = () => {
  return (
    <div className={styles.background}>
      <Link to="/index">
        <HomeIcon className={styles.homeIcon} />
      </Link>
      <h1>Rondas y Canciones</h1>
      <div className={styles.content}>
        <div>
          <div>01</div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/z6DoPp-LkTA"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div>
          <div>02</div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1dC3gdbhr48"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div>
          <div>03</div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/d80h0xmEjbI"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Songs;
