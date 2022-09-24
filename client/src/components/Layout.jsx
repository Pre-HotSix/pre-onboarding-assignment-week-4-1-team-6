import { Header, Footer, Sider } from './index';

function Layout(props) {
  return (
    <div className="flex min-h-screen">
      <Sider />
      <div className="min-h-screen w-full">
        <Header cate={props.cate} chooseUrl={props.chooseUrl}/>
        {props.children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;