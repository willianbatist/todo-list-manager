import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { AuthContextData } from '../types/index';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [writtenTask, setWrittenTask] = useState('');

  return (
    <AuthContext.Provider value={{ writtenTask, setWrittenTask }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };