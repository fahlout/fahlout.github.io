import './App.css';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import AppCard from './components/AppCard';
import Footer from './components/Footer';
import ProfileImageVector from './resources/nik-fahl-vector.svg';
import App1Icon from './resources/algo-traffic-icon.png';
import App2Icon from './resources/ua-safety-icon.png';
import App3Icon from './resources/caps-leave-icon.png';
import App4Icon from './resources/tcso-icon.png';

function App() {
  const heroTitle = "Hi, I'm Nik! 👋🏼";
  const heroSubtext = "I am an iOS developer with over 6 years of experience developing and deploying apps and a passion for designing and implementing beautiful and pixel-perfect user interfaces.";
  const heroImage = ProfileImageVector;
  const heroLinkPath = "/documents/Niklas-Fahl-Resume.pdf";
  const heroLinkTitle = "View my Resume";

  const appSectionTitle = "My Apps";
  const appSectionSubtitle = "App Store";
  const appSectionSubtext = "Below are the apps that I have designed and developed for various clients as part of my team at the Center for Advanced Public Safety. All of these apps are available in the App Store.";

  const app1Name = "ALGO Traffic";
  const app1ClientName = "Alabama Department of Transportation"
  const app1Icon = App1Icon;
  const app1Description = "This app provides users with live traffic updates such as accidents, road work, and other road hazards for state funded roads (i.e. Interstates, State Routes, US Routes) in Alabama. The app also features live camera feeds that lets the user monitor traffic in certain areas they may be traveling. When traveling the user can engage driving mode, which provides traffic updates of what’s ahead while driving.";
  const app1Color = "#1E824C";
  const app1Link = "https://apps.apple.com/us/app/algo-traffic-by-aldot-alea/id1141136558?itsct=apps_box&itscg=30200";

  const app2Name = "UA Safety";
  const app2ClientName = "University of Alabama Office of Emergency Management"
  const app2Icon = App2Icon;
  const app2Description = "This app provides users with live safety updates including push notifications for the University of Alabama campus community such as university alerts and weather alerts. The app also features a listing of all buildings on campus and their safety features such as storm shelters and defibrillators as well as safety guidelines for events such as severe weather.";
  const app2Color = "#990000";
  const app2Link = "https://apps.apple.com/us/app/ua-safety/id1198780581?itsct=apps_box&itscg=30200";

  const app3Name = "CAPS Leave";
  const app3ClientName = "Center for Advanced Public Safety"
  const app3Icon = App3Icon;
  const app3Description = "This app lets users add work-leave events to their outlook calendar directly through the app using predefined leave types such as annual leave and sick leave. The app also features report functionality that lets the users get an overview of the leaves taken during a certain period of time. The user is also able to get an overview of other people’s leave events that are coming up today or in the future if they have been invited to the event.";
  const app3Color = "#990000";
  const app3Link = "https://apps.apple.com/us/app/caps-leave/id1170389084?itsct=apps_box&amp;itscg=30200";

  const app4Name = "TCSO";
  const app4ClientName = "Tuscaloosa County Sheriff's Office"
  const app4Icon = App4Icon;
  const app4Description = "This app gives users an overview of recent arrests, most wanted, people with warrants, crime reports, and sex offenders in Tuscaloosa County. The app also provides information about services Tuscaloosa County Sheriff’s Office provides and lets users submit tips anonymously directly to the Tuscaloosa County Sheriff’s Office.";
  const app4Color = "#4444AA";
  const app4Link = "https://apps.apple.com/us/app/tuscaloosa-county-sheriff/id905485668?itsct=apps_box&itscg=30200";

  return (
    <div className="px-4 sm:px-6 md:px-8 pt-10 bg-white dark:bg-black">
      <Hero title={heroTitle} subtext={heroSubtext} image={heroImage} linkPath={heroLinkPath} linkTitle={heroLinkTitle} />
      <SectionHeader title={appSectionTitle} subtitle={appSectionSubtitle} subtext={appSectionSubtext} />
      <div className="max-w-screen-2xl grid auto-rows-max grid-cols-1 xl:grid-cols-2 mx-auto md:mt-36 sm:mt-24 mt-20 py-2 gap-8 md:gap-12 xl:gap-10">
        <AppCard name={app1Name} clientName={app1ClientName} appIcon={app1Icon} description={app1Description} color={app1Color} appStoreLink={app1Link} />
        <AppCard name={app2Name} clientName={app2ClientName} appIcon={app2Icon} description={app2Description} color={app2Color} appStoreLink={app2Link} />
        <AppCard name={app3Name} clientName={app3ClientName} appIcon={app3Icon} description={app3Description} color={app3Color} appStoreLink={app3Link} />
        <AppCard name={app4Name} clientName={app4ClientName} appIcon={app4Icon} description={app4Description} color={app4Color} appStoreLink={app4Link} />
      </div>
      <div className="divider"></div>
      <Footer />
    </div>
  );
}

export default App;
