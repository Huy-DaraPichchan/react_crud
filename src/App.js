import '../src/assets/App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="App flex flex-col items-center justify-center file:h-screen bg-custom-red">
      <div className='w-1/3 h-screen'>
        <Navbar />
        <div className='w-full h-px bg-gray-800 mb-10'>

        </div>
        <div className='flex justify-center mt-5'>
          <Home />
        </div>
      </div>

    </div>
  );
}

export default App;
