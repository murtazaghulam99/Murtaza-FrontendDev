import Head from "next/head";
import HeroSection from "components/HeroSection";
import SkillsSection from "components/SkillsSection";
import ProjectsSection from "components/ProjectsSection";
import ContactSection from "components/ContactSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Murtaza - React Developer</title>
        <meta name="description" content="Ghulam Murtaza - Frontend Web Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </>
  );
}
