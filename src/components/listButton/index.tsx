import { useState } from "react";

import { Skills } from "./Skills";
import { Projects } from "./Projects";

import styles from "./styles.module.scss";

export function ListButton() {
  const [content, setContent] = useState(true);

  return (
    <div className={styles.contentWrapper}>
      <div className={styles.buttonsWrapper}>
        <button
          onClick={() => setContent(true)}
          className={content == true ? styles.enabled : styles.disabled}
        >
          Habilidades
        </button>
        <button
          onClick={() => setContent(false)}
          className={content == false ? styles.enabled : styles.disabled}
        >
          Projetos
        </button>
      </div>

      <div>{content == true ? <Skills /> : <Projects />}</div>
    </div>
  );
}
