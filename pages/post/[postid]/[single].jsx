import Head from 'next/head';
import React from 'react';

export default function Single({ posts, pageName }) {
  return (
    <div className="text-center">
      <Head>
        <title>{pageName}</title>
      </Head>
      {posts.map((post) => (
        <div key={post.id}>
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="text-2xl">{post.description}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps(context) {
  const id = context?.params.single;
  const { allEvents } = await import('@/data/data.json');
  const posts = allEvents.filter((post) => post.id === id);
  return {
    props: { posts, pageName: id },
  };
}

export async function getStaticPaths() {
  const { allEvents } = await import('@/data/data.json');
  const allPaths = allEvents.map((data) => ({
    params: {
      postid: data.city,
      single: data.id,
    },
  }));
  return {
    paths: allPaths,
    fallback: false,
  };
}
