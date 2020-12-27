import './App.css';
import Hero from './Hero';
import ProfileImageVector from './resources/nik-fahl-vector.svg';

function App() {
  return (
    <div class="px-4 sm:px-6 md:px-8">
      <Hero />
      <div class="border-t border-gray-200 py-6 flex space-x-2 items-center justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
        <p class="text-gray-500 mr-2">© 2020 Niklas Fahl</p>
        <img class="w-8 h-8 rounded-full" src={ProfileImageVector} alt="Logo"></img>
      </div>
    </div>
  );
}

export default App;
