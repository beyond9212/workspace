import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { BlogPost } from '@/types/blog';
import { mockPosts } from '@/data/mockPosts';

type BlogPostParams = {
  slug: string;
};

const BlogPostPage = () => {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams<BlogPostParams>();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = () => {
      setIsLoading(true);

      const foundPost = mockPosts.find((p) => p.slug === slug);

      if (foundPost) {
        setPost(foundPost);
      } else {
        navigate('/404');
      }
      setIsLoading(false);
    };
    fetchPost();
  }, [slug, navigate]);

  // ローディング中の表示
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-gray-600">読み込み中...</div>
      </div>
    );
  }

  if (!post) {
    return null;
  }

  return (
    <article className="max-w-3xl mx-auto">
      {/*ヘッダー部分*/}
      <header className="mb-8">
        {/*カテゴリー*/}
        <div className="mb-4">
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        {/*タイトル*/}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>

        {/*メタ情報*/}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString('ja-JP')}
          </time>
          <span className="mx-2">・</span>
          <span>{post.readingTime} min read</span>
        </div>

        {/* タグ */}
        <div className="flex flex-wrap gap2-">
          {post.tags.map((tag) => (
            <span key={tag.id} className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
              {tag.name}
            </span>
          ))}
        </div>
      </header>
      {/* 記事本文 */}
      <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-blue-600">
        <ReactMarkdown
          rehypePlugins={[rehypeRaw, rehypeSanitize]}
          components={{
            //見出しのカスタマイズ
            h1: ({ node, ...props }) => <h1 className="text-3xl font-bols mb-4" {...props} />,
            h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mt-8 mb-4" {...props} />,
            // リンクのカスタマイズ
            a: ({ node, ...props }) => (
              <a className="text-blue-600 hover:text-blue-800 underline" {...props} />
            ),
            // コードブロックのカスタマイズ
            pre: ({ node, ...props }) => (
              <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto" {...props} />
            ),
          }}
        >
          {post.content}
        </ReactMarkdown>
      </div>
      {/* サムネイル画像 */}
      <div className="mb-8">
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-lg"
        />
      </div>
    </article>
  );
};

export default BlogPostPage;
