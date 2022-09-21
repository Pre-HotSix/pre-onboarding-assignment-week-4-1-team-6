import { RecoilRoot } from 'recoil';
import 'styles/App.css';
import Router from './routes';

export default function App() {
  return (
    <RecoilRoot>
      <Router />
    </RecoilRoot>
  );
}
