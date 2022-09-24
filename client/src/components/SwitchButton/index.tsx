import { Switch } from 'antd';
import './style.css';

interface IButton {
  active?: boolean;
  onChangeActive?: () => void;
}

export default function SwitchButton({ active, onChangeActive }: IButton) {
  return (
    <Switch size="small" defaultChecked={active} onChange={onChangeActive} />
  );
}
