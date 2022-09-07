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
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [writtenTask, setWrittenTask] = useState('');
  
  const handlePostTask = (states: object) => {
    return postTask(states);
  };

  return (
    <AuthContext.Provider value={{ writtenTask, setWrittenTask, handlePostTask }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };