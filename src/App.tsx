import "./App.scss";
import { LiveAPIProvider } from "./contexts/LiveAPIContext";
import SidePanel from "./components/side-panel/SidePanel";
import ControlTray from "./components/control-tray/ControlTray";
import { Altair } from "./components/altair/Altair";
import VoiceSelector from "./components/settings-dialog/VoiceSelector";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY as string;
if (typeof API_KEY !== "string") {
  throw new Error("set REACT_APP_GEMINI_API_KEY in .env");
}

function App() {

  return (
    <div className="App">
      <LiveAPIProvider options={{ apiKey: API_KEY }}>
        <div className="streaming-console">
          <SidePanel />
          <main>
            <ControlTray
              enableEditingSettings={true}
            >
            </ControlTray>
          </main>
        </div>
      </LiveAPIProvider>
    </div>
  );
}

export default App;