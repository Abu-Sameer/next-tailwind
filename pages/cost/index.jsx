import Head from 'next/head';
import { useEffect, useState } from 'react';

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Cost() {
  const [post, setPost] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    sleep(3000).then(() => {
      setPost({
        title: 'New Post',
        description: 'This is the post to display',
      });
      setIsLoading(false);
    });
  }, []);

  if (isLoading)
    return <h1 className="text-center text-2xl font-bold">Loading data...</h1>;
  if (!post)
    return (
      <h1 className="text-center text-2xl font-bold">Data not Available...</h1>
    );

  return (
    <main style={{ minHeight: '525px' }}>
      <Head>
        <title>Cost</title>
      </Head>
      <div className="text-center">
        <h1 className="text-center text-2xl font-bold">{post.title}</h1>
        <p className="text-lg">{post.description}</p>
      </div>
    </main>
  );
}

// export async function getStaticProps() {
//   const posts = {
//     title: 'New Post',
//     description: 'This is the post to di splay',
//   };
//   return {
//     props: {
//       posts,
//     },
//   };
// }
