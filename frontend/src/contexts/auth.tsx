import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { postTask } from '../services/api';

interface AuthContextData {
  writtenTask: string;
  setWrittenTask: any;
  handlePostTask: any;
  onOff: number;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [writtenTask, setWrittenTask] = useState('');
  const [onOff, setOnOff] = useState(1);

  const handlePostTask = (states: object) => {
    setOnOff((prevState) => prevState += 1);
    return postTask(states);
  };

  return (
    <AuthContext.Provider value={{ writtenTask, setWrittenTask, handlePostTask, onOff }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };