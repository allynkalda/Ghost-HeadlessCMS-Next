import styles from '../styles/Home.module.css'
import { getPosts } from './api/posts';
import Link from 'next/link';

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <p>Hello</p>
      <ul>
    {posts.map(post => (
            <li key={post.id}>
            <Link href={`/[slug]`} as={`/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
          </li>
    ))}
  </ul>
      {console.log('yp', posts)}
    </div>
  )
};


Home.getInitialProps = async (ctx) => {
  const posts = await getPosts();
  return { posts: posts }
}
