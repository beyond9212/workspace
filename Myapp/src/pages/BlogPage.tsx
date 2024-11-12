import { useEffect, useState } from 'react';
import { BlogPost } from '@/types/blog';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { mockPosts } from '@/data/mockPosts';

const BlogPage = () => {
  const [posts, serPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // モックデータを読み込む
    // 実際のAPIを使用する場合は、ここでフェッチ処理を行う
    const fetchPosts = () => {
      setIsLoading(true);
      // API読み出しを模擬するため意図的に遅延を入れる
      setTimeout(() => {
        serPosts(mockPosts);
        setIsLoading(false);
      }, 500);
    };

    fetchPosts();
  }, []);

  return (
    <div className="space-y-8">
      {/*ページヘッダー*/}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">記事一覧</h1>
        <p className="mt-2 text-gray-600">記事をお届けします</p>
      </div>
      {/*ローディング表示*/}
      {isLoading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="text-gray-600">読み込み中...</div>
        </div>
      ) : (
        // 記事一覧
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogPostCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogPage;
