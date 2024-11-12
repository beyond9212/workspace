// 記事のステータス
export type PostStatus = 'draft' | 'published';

// 記事のカテゴリ
export type PostCategory = 'tutorial' | 'technique' | 'diary' | 'news';

// 記事タグ
export interface Tag {
  id: string;
  name: string;
  slug: string;
}

// 記事データの型定義
export interface BlogPost {
  id: string; // 記事のユニークID
  title: string; // 記事タイトル
  slug: string; //URL用のスラッグ
  excerpt: string; // 記事の抜粋
  content: string; // 記事の本文(マークダウン)
  thumbnail?: string; //サムネイルの画像のURL(任意)
  category: PostCategory; // カテゴリー
  tags: Tag[]; //タグ一覧
  status: PostStatus; // 記事の状態
  publishedAt: string; // 公開日時
  updateAt: string; // 更新日時
  readingTime: number; // 推定読了時間(分)
}
