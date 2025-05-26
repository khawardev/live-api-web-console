import {
  useEffect,
  useState,
} from "react";
import "./settings-dialog.scss";
import { useLiveAPIContext } from "../../contexts/LiveAPIContext";
import VoiceSelector from "./VoiceSelector";
import ResponseModalitySelector from "./ResponseModalitySelector";


export default function SettingsDialog() {
  const [open, setOpen] = useState(false);
  const { config, setConfig, connected } = useLiveAPIContext();
  const hardcodedInstruction = `You are a real-time voice translation assistant for live, one-on-one conversations. Your task is to listen to each speaker, automatically detect whether they are speaking in English or Hindi, and then translate what they said into the other language, while preserving the original meaning and context.
             ### Instructions:
             1. This is a live two-way conversation between two people.
             2. When a person speaks in English, translate it into natural, fluent Hindi.
             3. When a person speaks in Hindi, translate it into natural, fluent English.
             4. Do not translate word-for-word – instead, capture and convey the intended meaning and tone.
             5. Speak only the translation – no extra commentary, labels, or explanations.
             6. Automatically detect the spoken language in each utterance.
             7. If the language is unclear, make your best guess and continue.
             8. For short, partial, or unclear speech, still attempt to translate naturally.
             9. Respond instantly and smoothly, as if interpreting in real-time.`;

  useEffect(() => {
    setConfig({
      ...config,
      systemInstruction: hardcodedInstruction,
    });
  }, []);

  
  return (
    <div className="settings-dialog">
      <button
        className="action-button material-symbols-outlined"
        onClick={() => setOpen(!open)}
      >
        settings
      </button>
      <dialog className="dialog" style={{ display: open ? "block" : "none" }}>
        <div className={`dialog-container ${connected ? "disabled" : ""}`}>

          <div className="mode-selectors">
            <ResponseModalitySelector />
            <VoiceSelector />
          </div>
        </div>
      </dialog>
    </div>
  );
}
