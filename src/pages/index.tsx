import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "../components/Header";
import { Infos } from "../components/Infos";
import { ListButton } from "../components/listButton";
import { Widget } from "../components/Widget";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <Head>
        <title>Curriculo - Henrique Casagrande</title>
      </Head>

      <Header />
      <Infos />
      <ListButton />

      <Widget />
    </div>
  );
};

export default Home;
