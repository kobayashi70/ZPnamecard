export default function InputPage() {
  return (
    <div>
      <div className="input-container">
        <h2>入力ページ</h2>
        <div className="input-wrap">
          <div className="img-c-wrap">
            <div className="img-select"><span className="img-select_text">画像選択</span></div>
            <div className="color-select">カラー選択
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
          <input type="text" id="class"  />
        </div>
        <div className="input-field">
          <label htmlFor="account">Xアカウント</label>
          <input type="text" id="account" />
        </div>
        <div className="input-field">
          <label htmlFor="origin">出身</label>
          <input type="text" id="origin"  />
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
      </div>
    </div>
  );
}