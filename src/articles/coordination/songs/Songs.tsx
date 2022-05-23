import styles from "./Styles.module.css";

const Songs = () => {
  return (
    <div className={styles.background}>
      <h1>Rondas y Canciones</h1>
      <div className={styles.content}>
        <div>
          <div>01</div>
          <iframe
            src="https://www.youtube.com/embed/53ePiCirfvk"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div>
          <div>02</div>
          <iframe
            src="https://www.youtube.com/embed/mrxTQZW9b08"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Songs;
