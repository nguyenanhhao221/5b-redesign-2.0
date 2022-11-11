import type { NextPage } from "next";
import Head from "next/head";
import { Why5B } from "../components/Why5B";
import { Header } from "../components/Header";
import { Services } from "../components/Services/Services";
import { Testimonial } from "../components/Testimonial";
import { Partners } from "../components/Partners";
import { PhoneIcon } from "@heroicons/react/24/solid";
import { CompanyInfo } from "../components/Footer/CompanyInfo";

//Experimental Edge
export const config = {
  runtime: "experimental-edge",
};

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>5B - Warehouse Consultant</title>
        <meta
          name="description"
          content="Founded in 2021, 5B is a solution provider for your warehouses and factories need."
        ></meta>
      </Head>
      <Header />
      <main className="space-y-4 pt-4">
        <section id="services" className="py-4">
          <Services />
        </section>
        <section id="why-5b">
          <Why5B />
        </section>
        <section id="testimonial">
          <Testimonial />
        </section>
        <section id="partners">
          <Partners />
        </section>
        <section className="flex flex-col items-center gap-4 py-32 sm:mx-auto sm:max-w-[80%] sm:flex-row sm:justify-center">
          <h2 className="section-title sm:basis-1/2 sm:text-left sm:capitalize">
            Need help ?
          </h2>
          <a
            className="cta-primary flex  items-center justify-between gap-2 text-black transition-transform hover:motion-safe:scale-105 sm:basis-1/2 sm:justify-center"
            href="tel:+84862705559"
            title="Call 5B Hotline"
          >
            <span>086 270 5559</span>
            <PhoneIcon className="h-6 w-6 motion-safe:animate-bounce" />
          </a>
        </section>
      </main>
      <footer className="flex flex-col items-start gap-4 border-t bg-secondary py-4">
        <CompanyInfo />
        <div className="mx-auto flex flex-col items-center gap-4">
          <div className="text-sm">Copyright © 2022 5B JSC</div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
