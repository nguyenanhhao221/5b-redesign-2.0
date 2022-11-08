import { type NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/Header";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>5B - Warehouse Consultant</title>
      </Head>
      <Header />
    </>
  );
};

export default HomePage;
