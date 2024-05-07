import { Outlet, Link } from 'react-router-dom';

export default function Root() {
  return (
    <>
        <header>
          <h1>
            ZeroPlus NameCard
        </h1>
        <nav>
          <Link to="/">
            <button>トップページ</button>
          </Link>
          <Link to="/input">
            <button>入力ページ</button>
          </Link>
          </nav>
      </header>
      
      <Outlet />

      </>
  );
}