import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AccountBookOutlined,
  LogoutOutlined,
  UnorderedListOutlined,
} from '@ant-design/icons';
import { Layout } from 'antd';
const { Sider } = Layout;
import MenuText from '../../../../sider.json';
import { IItem } from '../type';
import { GlobalContext } from 'App';
import { storage } from 'commons';

export default function LayoutIndex({ setSearchParams }: any) {
  const { menuQuery } = useContext(GlobalContext);

  const navigate = useNavigate();

  const selectMenuHandler = (index: number) => {
    setSearchParams({ menu: String(index) });
    navigate(`/?menu=${index}`);

    if (index === 2) {
      storage.remove('accessToken');
      alert('로그아웃 되었습니다.');
      navigate('/login');
    }
  };

  const items = [
    {
      key: `${MenuText.sider[1].id}`,
      icon: <AccountBookOutlined />,
      label: `${MenuText.sider[1].name}`,
    },
    {
      key: `${MenuText.sider[2].id}`,
      icon: <UnorderedListOutlined />,
      label: `${MenuText.sider[2].name}`,
    },
    {
      key: `${MenuText.sider[3].id}`,
      icon: <LogoutOutlined />,
      label: `${MenuText.sider[3].name}`,
    },
  ];

  return (
    <Sider trigger={null} collapsible>
      {items.map((el: IItem, index: number) => (
        <li
          key={el.key}
          className={`menuList ${
            Number(menuQuery) === index ? 'focused' : 'submenu'
          }`}
          onClick={() => selectMenuHandler(index)}
        >
          {el.icon} <span className="pt-0.5 ml-1.5">{el.label}</span>
        </li>
      ))}
    </Sider>
  );
}
