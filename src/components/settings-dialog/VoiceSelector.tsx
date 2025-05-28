import { useCallback, useEffect, useState } from "react";
import { useLiveAPIContext } from "../../contexts/LiveAPIContext";
import '../settings-dialog/LanguageSelector.scss';
const voiceOptions = [
  { value: "Puck", label: "Puck" },
  { value: "Charon", label: "Charon" },
  { value: "Kore", label: "Kore" },
  { value: "Fenrir", label: "Fenrir" },
  { value: "Aoede", label: "Aoede" },
];

export default function VoiceSelector() {
  const { config, setConfig, connected } = useLiveAPIContext();

  useEffect(() => {
    const voiceName =
      config.speechConfig?.voiceConfig?.prebuiltVoiceConfig?.voiceName ||
      "Atari02";
    const voiceOption = { value: voiceName, label: voiceName };
    setSelectedOption(voiceOption);
  }, [config]);

  const [selectedOption, setSelectedOption] = useState<{
    value: string;
    label: string;
  } | null>(voiceOptions[5]);

  const updateConfig = useCallback(
    (voiceName: string) => {
      setConfig({
        ...config,
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: {
              voiceName: voiceName,
            },
          },
        },
      });
    },
    [config, setConfig]
  );

  return (
    <div className="select-group">

      <select
        disabled={connected}
        style={{ margin: '0px 0px 10px 0px' }}
        id="language-select"
        value={selectedOption?.value || ""}

        onChange={(e) => {
          const value = e.target.value;
          const option = voiceOptions.find((opt) => opt.value === value) || null;
          setSelectedOption(option);
          if (option) {
            updateConfig(option.value);
          }
        }}

        
        className="language-selector__dropdown"
      >
        {voiceOptions.map((option) => (
          <option key={option.value} value={option.value}>
           {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
