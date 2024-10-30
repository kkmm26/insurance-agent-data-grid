import { createContext, useContext, useState, ReactNode } from 'react';
import { Language, translations, TranslationKey } from '../constants/language';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  translations: Record<TranslationKey, string>;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'mm' : 'en');
  };

  const value = {
    language,
    toggleLanguage,
    translations: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 