import { AllData } from '@/data/Data';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Post({ posts }) {
  const router = useRouter();
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <Head>
        <title>All Posts</title>
      </Head>
      <h1 className="uppercase text-3xl font-bold my-4">All Posts</h1>
      {posts.map((post) => {
        return (
          <Link
            className="flex flex-col mb-4 border-2 border-gray-800 w-1/2 rounded-md"
            href={`/post/${post.id}`}
            key={post.id}
          >
            <h1 className="text-2xl font-bold">{post.title}</h1>
            <p className="text-2xl">{post.description}</p>
          </Link>
        );
      })}
      <button className="my-3" onClick={() => router.push('/user/')}>
        Click
      </button>
    </div>
  );
}

export async function getStaticProps() {
  const posts = AllData();
  // const { events_categories } = await import('@/data/data.json');
  return {
    props: { posts },
  };
}
