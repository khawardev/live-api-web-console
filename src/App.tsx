import "./App.scss";
import {useLiveAPIContext } from "./contexts/LiveAPIContext";
import ControlTray from "./components/control-tray/ControlTray";
import { useState } from "react";
import cn from "classnames";

const API_KEY = process.env.REACT_APP_GEMINI_API_KEY as string;
if (typeof API_KEY !== "string") {
  throw new Error("set REACT_APP_GEMINI_API_KEY in .env");
}

function App() {
  const { connected } = useLiveAPIContext();
  const [open, setOpen] = useState(true);

  return (
    <div className="App">
     
        <div className="streaming-console">
          {/* <SidePanel /> */}
          <div className={cn("streaming-indicator", { connected })}>
            {connected
              ? `🔵${open ? " Streaming" : ""}`
              : `⏸️${open ? " Paused" : ""}`}
          </div>
          <main>
            <ControlTray
              enableEditingSettings={true}
            >
            </ControlTray>
          </main>
        </div>
      
    </div>
  );
}

export default App;