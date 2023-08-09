import { AllData } from '@/data/Data';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

export default function Postid({ posts }) {
  const router = useRouter();
  const { postid } = router.query;
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <Head>
        <title>{postid}</title>
      </Head>
      <h1 className=" text-3xl font-bold uppercase my-6">Single Post</h1>
      {posts.map((post) => (
        <div
          className="flex flex-col mb-4 border-2 border-gray-800 w-1/2 rounded-md py-4"
          key={post.id}
        >
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="text-2xl">{post.description}</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { postid } = params;
  const posts = AllData(postid);
  //   const { allEvents } = await import('@/data/data.json');
  //   const posts = allEvents.filter((post) => post.city === postid);
  return {
    props: { posts },
  };
}

export async function getStaticPaths() {
  const posts = AllData();
  const paths = posts.map((spost) => ({
    params: { postid: spost.id.toString() },
  }));
  //   const { events_categories } = await import('@/data/data.json');
  //   const paths = events_categories.map((data) => ({
  //     params: { postid: data.id.toString() },
  //   }));
  return {
    paths,
    fallback: false,
  };
}
