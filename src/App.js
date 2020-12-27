import './App.css';
import Hero from './Hero';

function App() {
  return (
    <div class="px-4 sm:px-6 md:px-8">
      <Hero />
      <div class="border-t border-gray-200 py-6 flex space-x-2 items-center justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
        <button>Email</button>
        <button>LinkedIn</button>
        <button>GitHub</button>
        <button>Resume</button>
      </div>
    </div>
  );
}

export default App;
