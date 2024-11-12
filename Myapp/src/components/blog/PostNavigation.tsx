import { Link } from 'react-router-dom';
import { BlogPost } from '@/types/blog';

interface PostNavigationProps {
  prevPost: BlogPost | null;
  nextPost: BlogPost | null;
}

const PostNavigation = ({ prevPost, nextPost }: PostNavigationProps) => {
  return (
    <nav className="flex justufy-between items-center py-8 border-t border-gray-200 mt-8">
      {/* 前の記事へのリンク */}
      <div className="flex-1 min-w-0">
        {prevPost ? (
          <Link to={`/blog/${prevPost.slug}`} className="group block">
            <div className="text-sm text-gray-500 mb-1">前の記事</div>
            <div className="test-lg font-medium text-gray-900 trunscate group-hover:text-blue-600">
              {prevPost.title}
            </div>
          </Link>
        ) : (
          <div className="text-sm text-gray-400">前の記事はありません</div>
        )}
      </div>

      {/* 記事一覧へのリンク */}
      <div className="mx-4 flex-shrink-0">
        <Link
          to="/blog"
          className="px-4 py-2 rounded-lg border-gray-300 text-gray-600 hover:bg-gray-50"
        >
          一覧へ
        </Link>
      </div>

      {/* 次の記事へのリンク */}
      <div className="flex-1 min-w-0 text-right">
        {nextPost ? (
          <Link to={`/blog/${nextPost.slug}`} className="group block">
            <div className="text-sm text-gray-500 mb-1">次の記事</div>
            <div className="test-lg font-medium text-gray-900 trunscate group-hover:text-blue-600">
              {nextPost.title}
            </div>
          </Link>
        ) : (
          <div className="text-sm text-gray-400">次の記事はありません</div>
        )}
      </div>
    </nav>
  );
};

export default PostNavigation;
