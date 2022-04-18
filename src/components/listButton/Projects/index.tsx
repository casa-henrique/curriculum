import { useEffect, useState } from "react";
import axios from "axios";

import styles from "./styles.module.scss";

import { RepoItem } from "./RepoItem";

interface RepositoryProps {
  name: string;
  description?: string;
  html_url: string;
}

export function Projects() {
  const [repositories, setRepositories] = useState<RepositoryProps[]>([]);

  const list_repos = async () => {
    const response = await axios.get(
      "https://api.github.com/users/casa-henrique/repos"
    );

    setRepositories(response.data);
  };

  useEffect(() => {
    try {
      list_repos();
    } catch (error) {
      console.log(error);
    }
  }, [repositories]);

  return (
    <section className={styles.repositoryList}>
      <ul>
        {repositories.map((repository) => (
          <RepoItem repository={repository} key={repository.name} /> //Key é utilizado para a distinção entre cada elemento que será renderizado, uma informação unica, algo que não se repita entre eles
        ))}
      </ul>
    </section>
  );
}
