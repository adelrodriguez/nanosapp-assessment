import { createContext } from 'react';

type AlertContextType = {
  error: string;
  setError: (error: string) => void;
};

const AlertContext = createContext({
  error: '',
  setError: () => undefined,
} as AlertContextType);

export default AlertContext;
