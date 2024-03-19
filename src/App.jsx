import { React, useEffect } from 'react';
import ReactGA from 'react-ga';
import Background from './components/Background';
import Foreground from './components/Foreground';

ReactGA.initialize('G-BJMFZWTTXK');

const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div className='relative w-full h-screen bg-zinc-800'>
      <Background />
      <Foreground />
    </div>
  );
};

export default App;
