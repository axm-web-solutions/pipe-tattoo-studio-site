import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { translations, type Language } from "./translations";

type I18nContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)[Language];
};

const STORAGE_KEY = "pipe-tattoo-language";

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

const getDefaultLanguage = (): Language => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored === "es" || stored === "en" || stored === "fr") {
    return stored;
  }
  return "es";
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(getDefaultLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used inside I18nProvider");
  }
  return context;
};
