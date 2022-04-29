import { useState } from "react";
import Lottie from "react-lottie";

import styles from "./styles.module.scss";

import mailData from "../../animations/mailAnimation.json";
import gitData from "../../animations/githubAnimation.json";
import linkedinData from "../../animations/linkedinAnimation.json";

export function Header() {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "long" });

  const [mailAnimationState, setMailAnimationState] = useState({
    isStopped: true,
    isPaused: false,
  });

  const [gitAnimationState, setGitAnimationState] = useState({
    isStopped: true,
    isPaused: false,
  });

  const [linkedinAnimationState, setLinkedinAnimationState] = useState({
    isStopped: true,
    isPaused: false,
  });

  const mailOptions = {
    loop: false,
    autoplay: false,
    animationData: mailData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const gitOptions = {
    loop: false,
    autoplay: false,
    animationData: gitData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const linkedinOptions = {
    loop: false,
    autoplay: false,
    animationData: linkedinData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
          <a
            href="mailto:riquecasa@gmail.com"
            target="_blank"
            rel="noreferrer"
            onMouseOver={() =>
              setMailAnimationState({
                ...mailAnimationState,
                isStopped: !mailAnimationState.isStopped,
              })
            }
          >
            <div>
              <Lottie
                options={mailOptions}
                height={120}
                width={120}
                isStopped={mailAnimationState.isStopped}
                isPaused={mailAnimationState.isPaused}
              />
            </div>
          </a>
          <a
            href="https://github.com/casa-henrique"
            target="_blank"
            rel="noreferrer"
            onMouseOver={() =>
              setGitAnimationState({
                ...gitAnimationState,
                isStopped: !gitAnimationState.isStopped,
              })
            }
          >
            <div>
              <Lottie
                options={gitOptions}
                height={80}
                width={80}
                isStopped={gitAnimationState.isStopped}
                isPaused={gitAnimationState.isPaused}
              />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/henrique-casa/"
            target="_blank"
            rel="noreferrer"
            onMouseOver={() =>
              setLinkedinAnimationState({
                ...linkedinAnimationState,
                isStopped: !linkedinAnimationState.isStopped,
              })
            }
          >
            <div>
              <Lottie
                options={linkedinOptions}
                height={40}
                width={40}
                isStopped={linkedinAnimationState.isStopped}
                isPaused={linkedinAnimationState.isPaused}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
