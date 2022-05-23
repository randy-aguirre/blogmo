import styles from "./Styles.module.css";

const Songs = () => {
  return (
    <div className={styles.background}>
      <h1>Rondas y Canciones</h1>
      <div className={styles.content}>
        <div>
          <div>01</div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3XZs7fR_eI8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Songs;
