import styles from "./styles.module.scss";

export function Header() {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });

  return (
    <div className={styles.background}>
      <img src="/images/Eu.png" alt="Foto de Henrique Casagrande" />

      <div className={styles.titleWrapper}>
        <h1>Henrique Casagrande</h1>
        <p>Front-End Developer</p>
      </div>

      <div className={styles.menu}>
        <p>
          {month}, {year}
        </p>
        <div>
          <a href="mailto:riquecasa@gmail.com" target="_blank" rel="noreferrer">
            <img src="/images/Email.svg" alt="icone de email" />
          </a>
          <a
            href="https://github.com/casa-henrique"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/Github.svg" alt="icone do github" />
          </a>
          <a
            href="https://www.linkedin.com/in/henrique-casa/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/images/Linkedin.svg" alt="icone do linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
