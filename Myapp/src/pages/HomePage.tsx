const HomePage = () => {
  return (
    <div className="container mx-auto px-4">
      {/* 
        container: コンテンツの最大幅を設定
        mx-auto: 左右のマージンを自動で調整（中央寄せ）
        px-4: 左右のパディングを1rem（16px）に設定
      */}
      <h1 className="text-2xl font-bold">ホーム</h1>
      {/* 
        text-2xl: フォントサイズを1.5rem（24px）に設定
        font-bold: フォントの太さを太字に設定
      */}
    </div>
  );
};

// コンポーネントをエクスポート
export default HomePage;
