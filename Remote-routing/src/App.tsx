import './App.css';
import PlayerControlButton from './components/PlayerControlButton';
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import WatchApp from './watchApp';

const App = () => {
  return (
    <div className="content">
      <h1>Rsbuild with React</h1>
      <p>Start building amazing things with Rsbuild.</p>
      <PlayerControlButton><VolumeUpIcon /></PlayerControlButton>
      <WatchApp />
    </div>
  );
};

export default App;
