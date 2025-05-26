import "./App.scss";
import { useLiveAPIContext } from "./contexts/LiveAPIContext";
import ControlTray from "./components/control-tray/ControlTray";
import VoiceSelector from "./components/settings-dialog/VoiceSelector";
import Connection from "./components/connection";
import { useEffect, useState } from "react";
import LanguageSelector from "./components/settings-dialog/LanguageSelector";

function App() {
  const { config, setConfig } = useLiveAPIContext();
  const [targetLanguage, setTargetLanguage] = useState("Hindi");

  const generateInstruction = (language: any) => {
    return `You are a real-time voice translation assistant for live, one-on-one conversations. Your task is to listen to each speaker, automatically detect whether they are speaking in English or ${language}, and then translate what they said into the other language, while preserving the original meaning and context.

### Instructions:
1. This is a live two-way conversation between two people.
2. When a person speaks in English, translate it into natural, fluent ${language}.
3. When a person speaks in ${language}, translate it into natural, fluent English.
4. Do not translate word-for-word – instead, capture and convey the intended meaning and tone.
5. Speak only the translation – no extra commentary, labels, or explanations.
6. Automatically detect the spoken language in each utterance.
7. If the language is unclear, make your best guess and continue.
8. For short, partial, or unclear speech, still attempt to translate naturally.
9. Respond instantly and smoothly, as if interpreting in real-time.`;
  };

  useEffect(() => {
    setConfig({
      ...config,
      systemInstruction: generateInstruction(targetLanguage),
    });
  }, [targetLanguage]);

  const handleLanguageChange = (event: any) => {
    setTargetLanguage(event.target.value);
  };
  return (
    <div className="App">
      <div className="streaming-console">
        <LanguageSelector
          targetLanguage={targetLanguage}
          onLanguageChange={handleLanguageChange}
        />
        <VoiceSelector />
        {/* <Connection /> */}
      </div>
        <ControlTray
          enableEditingSettings={true}
        >
        </ControlTray>
    </div>
  );
}

export default App;