import { Link } from "react-router-dom";

export default function InputPage() {
  return (
    <div>
      <h2>入力ページ</h2>
      <div className="input-container">
        <div className="input-wrap">
          <div className="img-c-wrap">
            <div className="img-select">
              <span className="img-select_text">画像選択</span>
            </div>
            <div className="color-select">
              カラー選択
              <div className="color-bar"></div>
            </div>
          </div>

          <div className="input-wrap_r">
            <div className="input-field">
              <label htmlFor="name">名前</label>
              <input type="text" id="name" />
            </div>
            <div className="input-field">
              <label htmlFor="class">クラス</label>
              <input type="text" id="class" />
            </div>
            <div className="input-field">
              <label htmlFor="account">Xアカウント</label>
              <input type="text" id="account" />
            </div>
            <div className="input-field">
              <label htmlFor="origin">出身</label>
              <input type="text" id="origin" />
            </div>
            <div className="input-field">
              <label htmlFor="hobby">趣味</label>
              <input type="text" id="hobby" />
            </div>
            <div className="input-field">
              <label htmlFor="reason">受講理由</label>
              <textarea id="reason" />
            </div>
          </div>
        </div>
        <div className="exp-wrap">
          <label htmlFor="name">〇名前</label>
          <p>半角英字で記入</p>
          <br />
          <label htmlFor="class">〇クラス</label>
          <p>Webアプリ・・・1期生→1</p>
          <p>デザイン・・・42期生→42a,42b</p>
          <br />
          <label htmlFor="account">〇Xアカウント</label>
          <p>@honyararara</p>
          <br />
          <label htmlFor="origin">〇出身</label>
          <p>詳細度は自由に！</p>
          <br />
          <label htmlFor="hobby">〇趣味</label>
          <p>交流のきっかけに！</p>
          <br />
          <label htmlFor="reason">〇受講理由</label>
          <p>理由や頑張りたいこと、目標など！</p>
        </div>
      </div>
      <div className="btn-wrap">
        <Link to="/confirm">
          <button>確認画面へ</button>
        </Link>
      </div>
    </div>
  );
}
