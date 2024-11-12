import { BlogPost } from '@/types/blog';
import { Link } from 'react-router-dom';

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  // 日付をフォーマットする関数
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Link to={`/blog/${post.slug}`} className="block">
      <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        {/*サムネイル画像*/}
        {post.thumbnail && (
          <img
            src={post.thumbnail}
            alt={post.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        )}

        {/*記事情報*/}
        <div className="p-6">
          {/*カテゴリー*/}
          <div className="mb-2">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
              {post.category}
            </span>
          </div>

          {/*タイトル*/}
          <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>

          {/*抜粋*/}
          <p className="text-gray-600 mb-4">{post.excerpt}</p>

          {/*メタ情報*/}
          <div className="flex items-center test-sm text-gray-500">
            <span>{formatDate(post.publishedAt)}</span>
            <span className="mx-2">・</span>
            <span>{post.readingTime} min read</span>
          </div>

          {/*タグ*/}
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag.id} className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default BlogPostCard;
