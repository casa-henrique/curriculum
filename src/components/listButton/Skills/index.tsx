import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import ability from "../../../utils/skills.json";

interface Itens {
  name: string;
  img: string;
}

interface AbilityProps {
  title: string;
  itens: Itens[];
}

export function Skills() {
  const [skills, setSkills] = useState<AbilityProps[]>([]);

  useEffect(() => {
    setSkills(ability);
  }, []);

  return (
    <section className={styles.skillsSection}>
      {skills.map((skills) => (
        <table key={skills.title} className={styles.skillsTable}>
          <tr>
            <th>{skills.title}</th>
          </tr>
          <tr>
            {skills.itens.map((item: Itens) => (
              <td key={item.name}>
                <img src={item.img} alt={`Logo ${item.name}`} />
                <p>{item.name}</p>
              </td>
            ))}
          </tr>
        </table>
      ))}
    </section>
  );
}
