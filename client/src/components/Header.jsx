import { useNavigate } from 'react-router-dom';
import { basicButton, activeButton } from 'styles/theme';

function Header({ cate, chooseUrl }) {
  const navigate = useNavigate();
  const worker = sessionStorage.getItem('worker');
  const headerTitle = (category) => {
    return `${category} / ${worker}`
  };

  const search = (e) => {
    e.preventDefault();
    const value = e.target.search.value;
    navigate(chooseUrl(1, value), {
      state: {
        text: value
      }
    });
  };


  return (
    <header className="navbar pr-6">
      <div className="flex-1">
        <div className="px-4">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </div>
        <p className="text-base">{headerTitle(cate)}</p>
      </div>
      <div className="flex-none gap-2">
        <form onSubmit={search} className="flex input-group">
          <input type="text" name="search" placeholder="Search" className="input input-bordered" />
          <button type="submit" className={`btn btn-square ${basicButton} ${activeButton}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;