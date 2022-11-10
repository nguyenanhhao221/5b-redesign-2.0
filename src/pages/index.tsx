import { type NextPage } from "next";
import Head from "next/head";
import { Why5B } from "../components/Why5B";
import { Header } from "../components/Header";
import { Services } from "../components/Services/Services";

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>5B - Warehouse Consultant</title>
      </Head>
      <Header />
      <main className="space-y-4 bg-secondary py-4">
        <section id="services" className="bg-white py-4">
          <Services />
        </section>
        <section id="why-5b">
          <Why5B />
        </section>
      </main>
    </>
  );
};

export default HomePage;
