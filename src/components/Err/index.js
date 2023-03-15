import styles from "./index.module.css";

const Err = ({ err, msg }) => {
  const { status, statusText } = err;

  return (
    <div className={styles.container}>
      {msg && <p>{msg}</p>}
      <p>
        Error {status} - {statusText}
      </p>
    </div>
  );
};

export default Err;
