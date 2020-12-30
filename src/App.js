import './App.css';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import AppCard from './components/AppCard';
import Footer from './components/Footer';
import ProfileImageVector from './resources/nik-fahl-vector.svg';
import ALGOIcon from './resources/algo-traffic-icon.png';
import UASIcon from './resources/ua-safety-icon.png';
import CLICon from './resources/caps-leave-icon.png';
import TCSOIcon from './resources/tcso-icon.png';
import ALGOScreen from './resources/algo-screenshot.png';
import UASScreen from './resources/ua-safety-screenshot.png';
import CLScreen from './resources/caps-leave-screenshot.png';
import TCSOScreen from './resources/tcso-screenshot.png';

const heroData = {
  title: "Hi, I'm Nik! 👋🏼",
  subtext: "I am an iOS developer with over 6 years of experience developing and deploying apps and a passion for designing and implementing beautiful and pixel-perfect user interfaces.",
  image: ProfileImageVector,
  linkPath: "/documents/Niklas-Fahl-Resume.pdf",
  linkTitle: "View my Resume"
}

const appSection = {
  title: "My Apps",
  subtitle: "App Store",
  subtext: "Below are the apps that I have designed and developed for various clients as part of my team at the Center for Advanced Public Safety. All of these apps are available in the App Store."
}

const apps = [
  {
    name: "CAPS Leave",
    clientName: "Center for Advanced Public Safety",
    icon: CLICon,
    description: "This app lets users add work-leave events to their outlook calendar directly through the app using predefined leave types such as annual leave and sick leave. The app also features report functionality that lets the users get an overview of the leaves taken during a certain period of time. The user is also able to get an overview of other people’s leave events that are coming up today or in the future if they have been invited to the event.",
    color: "#a30a25",
    link: "https://apps.apple.com/us/app/caps-leave/id1170389084?itsct=apps_box&amp;itscg=30200",
    tags: ["Swift", "Figma", "UIKit", "Storyboard", "Microsoft Auth Library", "Git"],
    screenshot: CLScreen
  },
  {
    name: "UA Safety",
    clientName: "University of Alabama Office of Emergency Management",
    icon: UASIcon,
    description: "This app provides users with live safety updates including push notifications for the University of Alabama campus community such as university alerts and weather alerts. The app also features a listing of all buildings on campus and their safety features such as storm shelters and defibrillators as well as safety guidelines for events such as severe weather.",
    color: "#a30a25",
    link: "https://apps.apple.com/us/app/ua-safety/id1198780581?itsct=apps_box&itscg=30200",
    tags: ["Swift", "Sketch", "UIKit", "Firebase SDK", "MapKit", "CoreLocation", "RESTful JSON API", "Swift Package Manager", "Git"],
    screenshot: UASScreen
  },
  {
    name: "ALGO Traffic",
    clientName: "Alabama Department of Transportation",
    icon: ALGOIcon,
    description: "This app provides users with live traffic updates such as accidents, road work, and other road hazards for state funded roads (i.e. Interstates, State Routes, US Routes) in Alabama. The app also features live camera feeds that lets the user monitor traffic in certain areas they may be traveling. When traveling the user can engage driving mode, which provides traffic updates of what’s ahead while driving.",
    color: "#1E824C",
    link: "https://apps.apple.com/us/app/algo-traffic-by-aldot-alea/id1141136558?itsct=apps_box&itscg=30200",
    tags: ["Swift", "Sketch", "UIKit", "Google Maps SDK", "Firebase SDK", "GeoJSON", "CoreLocation", "AVFoundation", "CocoaPods", "RESTful JSON API", "Git"],
    screenshot: ALGOScreen
  },
  {
    name: "TCSO",
    clientName: "Tuscaloosa County Sheriff's Office",
    icon: TCSOIcon,
    description: "This app gives users an overview of recent arrests, most wanted, people with warrants, crime reports, and sex offenders in Tuscaloosa County. The app also provides information about services Tuscaloosa County Sheriff’s Office provides and lets users submit tips anonymously directly to the Tuscaloosa County Sheriff’s Office.",
    color: "#5643e5",
    link: "https://apps.apple.com/us/app/tuscaloosa-county-sheriff/id905485668?itsct=apps_box&itscg=30200",
    tags: ["Swift", "Sketch", "UIKit", "OneSignal SDK", "Firebase SDK", "CocoaPods", "RESTful JSON API", "Git"],
    screenshot: TCSOScreen
  }
];

function App() {
  let appList;

  if (apps) {
    appList = apps.map((app) => (
      <AppCard key={app.name} name={app.name} clientName={app.clientName} appIcon={app.icon} description={app.description} color={app.color} appStoreLink={app.link} tags={app.tags} screenshot={app.screenshot} />
    ))
  }

  let appsContent;
  if (apps) {
    appsContent = <div className="max-w-screen-2xl grid auto-rows-max grid-cols-1 xl:grid-cols-2 mx-auto md:mt-36 sm:mt-24 mt-20 py-2 gap-8 md:gap-12 xl:gap-10">{appList}</div>;
  }

  return (
    <div className="px-4 sm:px-6 md:px-8 pt-10 bg-white dark:bg-black">
      <Hero title={heroData.title} subtext={heroData.subtext} image={heroData.image} linkPath={heroData.linkPath} linkTitle={heroData.linkTitle} />
      <SectionHeader title={appSection.title} subtitle={appSection.subtitle} subtext={appSection.subtext} />
      {appsContent}
      <div className="divider"></div>
      <Footer />
    </div>
  );
}

export default App;
