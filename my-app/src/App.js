import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
function App() {
  return (
    <>
      <div className='h-max bg-black text-white w-h'>
      <Navbar></Navbar>
      <Home></Home>
      </div>
    </>
  );
}

export default App;
