import { Link } from "react-router-dom";

export default function Confirm() {
  return (
    <div>
      <h2>確認ページ</h2>
      <div className="confirm-wrap">
        <li className="card">
          <div className="img-wrap"></div>
          <div className="profile">
            <p>名前: input.name</p>
            <p>クラス: input.class</p>
            <p>出身: input.origin</p>
            <p>Xアカウント: input.account</p>
            <p>趣味: input.hobby</p>
            <p>受講理由: input.reason</p>
          </div>
        </li>
        <div className="confirm-btn-wrap">
          <Link to="/input">
            <button>戻る</button>
          </Link>
          <Link to="/">
            <button>登録</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
