import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialCheck = {}; // Valor padrão para 'check'

type CheckboxProviderProps = {
  children: React.ReactNode;
};

type CheckboxContextType = {
  check: { [date: string]: boolean };
  setCheck: React.Dispatch<React.SetStateAction<{ [date: string]: boolean }>>;
};

const CheckboxContext = createContext<CheckboxContextType | undefined>(undefined);

export function CheckboxProvider({ children }: CheckboxProviderProps): JSX.Element {
  const [check, setCheck] = useState(initialCheck);

  // Recupere o estado do AsyncStorage ao montar o componente
  useEffect(() => {
    const loadCheckFromStorage = async () => {
      try {
        const storedCheck = await AsyncStorage.getItem('check');
        if (storedCheck) {
          setCheck(JSON.parse(storedCheck));
        }
      } catch (error) {
        console.error('Erro ao carregar o estado do AsyncStorage:', error);
      }
    };

    loadCheckFromStorage();
  }, []);

  // Atualize o estado do AsyncStorage sempre que o estado 'check' for alterado
  useEffect(() => {
    const saveCheckToStorage = async () => {
      try {
        await AsyncStorage.setItem('check', JSON.stringify(check));
      } catch (error) {
        console.error('Erro ao salvar o estado do AsyncStorage:', error);
      }
    };

    saveCheckToStorage();
  }, [check]);

  return (
    <CheckboxContext.Provider value={{ check, setCheck }}>
      {children}
    </CheckboxContext.Provider>
  );
}

export function useCheckbox() {
  const context = useContext(CheckboxContext);

  if (context === undefined) {
    throw new Error('useCheckbox deve ser usado dentro de um CheckboxProvider');
  }

  return context;
}
