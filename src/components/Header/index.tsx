import styles from "./styles.module.scss";

export function Header() {
  return (
    <div className={styles.background}>
      <img src="/images/Eu.png" alt="Foto de Henrique Casagrande" />

      <div className={styles.titleWrapper}>
        <h1>Henrique Casagrande</h1>
        <p>Front-End Developer</p>
      </div>

      <div className={styles.menu}>
        <p>Abril 2022</p>
        <div>
          <a href="mailto:riquecasa@gmail.com" target="_blank">
            <img src="/images/Email.png" alt="icone de email" />
          </a>
          <a href="https://github.com/casa-henrique" target="_blank">
            <img src="/images/Github.png" alt="icone do github" />
          </a>
          <a href="https://www.linkedin.com/in/henrique-casa/" target="_blank">
            <img src="/images/Linkedin.png" alt="icone do linkedin" />
          </a>
        </div>
      </div>
    </div>
  );
}
