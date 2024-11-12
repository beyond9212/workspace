const NotFoundPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold">404 - ページが見つかりません</h1>
      <p className="mt-4 text-gray-600">お探しのページは存在しないか、移動した可能性があります</p>
      {/* 
        mt-4: margin-top(上マージン) 4 = 1rem(16px)
        text-gray-600: text = テキストの色を指定 gray = グレースケールカラー 600 = カラーの濃さを指定
      */}
    </div>
  );
};

export default NotFoundPage;
