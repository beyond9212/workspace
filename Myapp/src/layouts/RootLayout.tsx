import { Outlet, Link } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* ナビケーションバー */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            {/* ロゴ/サイト名 */}
            <div className="flex items-center">
              <Link to="/" className="text-xl font-bols-text-gray-800">
                ilblog
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                ホーム
              </Link>
              <Link to="/gallery" className="text-gray-600 hover:text-gray-900">
                ギャラリー
              </Link>
              <Link to="/blog" className="text-gray-600 hover:text-gray-900">
                ブログ
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* メインコンテンツ */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
