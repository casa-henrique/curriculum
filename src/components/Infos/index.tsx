import styles from "./styles.module.scss";

export function Infos() {
  return (
    <div className={styles.sectionsWrapper}>
      <section className={styles.experience}>
        <h2>Experiência Profissional</h2>

        <div>
          <img
            src="/images/Timeline.png"
            alt="Timeline das experiências profissionais"
          />

          <div>
            <div>
              <h3>2020 - 2022</h3>
              <p>
                <span>Zenix Tech - Dev Front-end</span> <br />
                Administrador; <br />
                Product Owner; <br />
                Desenvolvedor Front-end; <br />
                Sites e Lojas em WordPress; <br />
                Práticas em SEO;
              </p>
            </div>

            <div>
              <h3>2019 - 2021</h3>
              <p>
                <span>Happy Code School - Professor</span> <br />
                Games 2D e 3D ( Construct 2, RPGMaker e Unity); <br />
                Produção de conteúdo (Blender e Filmora); <br />
                Modelagem 3D (Blender); <br />
                Maker (Arduino, Micro:bits, SamLabs); <br />
                Aplicativo (MIT App Inventor); <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.doubleSections}>
        <div className={styles.school}>
          <h2>Escolaridade</h2>

          <div>
            <div>
              <h3>
                2019/2 <br /> - <br /> 2023/2
              </h3>
              <p>
                Análise e desenvolvimento de sistemas <br />
                <span>Uniasselvi - 3 Semestre</span>
              </p>
            </div>

            <div>
              <h3>
                2015 <br /> - <br /> 2017
              </h3>
              <p>
                Ensino médio <br /> <span>Colégio Marista Ipanema</span>
              </p>
            </div>
          </div>
        </div>

        <div className={styles.objective}>
          <h2>Objetivo</h2>
          <p>
            Ser referência na área de programadores e profissionais em TI. Como
            um grande profissional, ser altamente capacitado nas principais
            linguagens e frameworks do mercado. Ter grandes avanços nos estudos
            e realizações profissionais. Sempre buscando uma evolução tanto
            pessoal quanto Profissional.
          </p>
        </div>
      </section>

      <section className={styles.platforms}>
        <h2>Plataformas de Estudo</h2>
        <div>
          <a
            href="https://www.rocketseat.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/plataforms/Rocketseat-logo.png"
              alt="Rocketseat logo"
            />
          </a>
          <a href="https://fullcycle.com.br/" target="_blank" rel="noreferrer">
            <img
              src="/images/plataforms/Fullcycle-logo.png"
              alt="Fullcycle logo"
            />
          </a>
          <a href="https://www.alura.com.br/" target="_blank" rel="noreferrer">
            <img src="/images/plataforms/Alura-logo.png" alt="Alura logo" />
          </a>
          <a href="https://www.udemy.com/" target="_blank" rel="noreferrer">
            <img src="/images/plataforms/Udemy-logo.png" alt="Udemy logo" />
          </a>
          <a href="https://www.dio.me/" target="_blank" rel="noreferrer">
            <img src="/images/plataforms/Dio-logo.png" alt="Dio logo" />
          </a>
        </div>
      </section>
    </div>
  );
}
