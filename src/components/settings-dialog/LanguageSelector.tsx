import { useLiveAPIContext } from '../../contexts/LiveAPIContext';
import './LanguageSelector.scss';

const LanguageSelector = ({ targetLanguage, onLanguageChange }:any) => {
    const {  connected } = useLiveAPIContext();

    const languageOptions = [
        { value: "Hindi", label: "हिंदी (Hindi)", flag: "🇮🇳" },
        { value: "Spanish", label: "Español (Spanish)", flag: "🇪🇸" },
        { value: "French", label: "Français (French)", flag: "🇫🇷" },
        { value: "German", label: "Deutsch (German)", flag: "🇩🇪" },
        { value: "Italian", label: "Italiano (Italian)", flag: "🇮🇹" },
        { value: "Portuguese", label: "Português (Portuguese)", flag: "🇵🇹" },
        { value: "Japanese", label: "日本語 (Japanese)", flag: "🇯🇵" },
        { value: "Korean", label: "한국어 (Korean)", flag: "🇰🇷" },
        { value: "Chinese", label: "中文 (Chinese)", flag: "🇨🇳" },
        { value: "Arabic", label: "العربية (Arabic)", flag: "🇸🇦" },
        { value: "Russian", label: "Русский (Russian)", flag: "🇷🇺" },
        { value: "Dutch", label: "Nederlands (Dutch)", flag: "🇳🇱" },
    ];

    return (
        <div >
            <select
                disabled={connected}
                style={{margin:'0px 0px 10px 0px'}}
                id="language-select"
                value={targetLanguage}
                onChange={onLanguageChange}
                className="language-selector__dropdown"
            >
                {languageOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.flag} {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;