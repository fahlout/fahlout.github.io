import './App.css';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import Footer from './components/Footer';
import ProfileImageVector from './resources/nik-fahl-vector.svg';

function App() {
  const heroTitle = "Hi, I'm Nik! 👋🏼";
  const heroSubtext = "I am an iOS developer with over 6 years of experience developing and deploying apps and a passion for designing and implementing beautiful and pixel-perfect user interfaces.";
  const heroImage = ProfileImageVector;
  const heroLinkPath = "/documents/Niklas-Fahl-Resume.pdf";
  const heroLinkTitle = "View my Resume";

  const appSectionTitle = "My Apps";
  const appSectionSubtitle = "App Store";
  const appSectionSubtext = "Below are the apps that I have designed and developed for various clients as part of my team at the Center for Advanced Public Safety. All of these apps are available in the App Store.";

  return (
    <div className="px-4 sm:px-6 md:px-8 pt-10 bg-white dark:bg-black">
      <Hero title={heroTitle} subtext={heroSubtext} image={heroImage} linkPath={heroLinkPath} linkTitle={heroLinkTitle} />
      <SectionHeader title={appSectionTitle} subtitle={appSectionSubtitle} subtext={appSectionSubtext} />
      <p className="text-xl md:text-3xl text-center leading-none font-bold text-gray-900 dark:text-gray-100 tracking-tight pt-5 md:pt-14">Coming Soon 🚧</p>
      <div className="divider"></div>
      <Footer />
    </div>
  );
}

export default App;
