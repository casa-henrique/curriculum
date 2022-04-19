import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "../components/Header";
import { Infos } from "../components/Infos";
import { ListButton } from "../components/listButton";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Curriculo - Henrique Casagrande</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>

      <Header />
      <Infos />
      <ListButton />
    </div>
  );
};

export default Home;
