import { createContext, Dispatch, SetStateAction, useState } from 'react';
import Router from 'routes';
import './styles/GlobalStyle.css';

interface IGlobalContext {
  menuQuery?: object | undefined;
  setMenuQuery?: Dispatch<SetStateAction<object[]>> | any;
  detailId?: number | any;
  setDetailId?: Dispatch<SetStateAction<number>> | any;
  userInfo?:
    | {
        accessToken: string;
        user: { email: string; id: number };
      }
    | any;
  setUserInfo?: Dispatch<SetStateAction<object>> | any;
}

export const GlobalContext = createContext<IGlobalContext>({});

function App(): JSX.Element {
  const [userInfo, setUserInfo] = useState({});
  const [menuQuery, setMenuQuery] = useState<object[]>([]);
  const [detailId, setDetailId] = useState<number>(0);

  const value = {
    menuQuery,
    setMenuQuery,
    detailId,
    setDetailId,
    userInfo,
    setUserInfo,
  };

  return (
    <GlobalContext.Provider value={value}>
      <Router />
    </GlobalContext.Provider>
  );
}

export default App;
