import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Postid({ posts, pageName }) {
  return (
    <div className="text-center flex flex-col justify-center items-center">
      <Head>
        <title>{pageName} events</title>
      </Head>
      <h1 className=" text-3xl font-bold uppercase my-6">post in {pageName}</h1>
      {posts.map((post) => (
        <Link
          className="flex flex-col mb-4 border-2 border-gray-800 w-1/2 rounded-md"
          href={`/post/${post.city}/${post.id}`}
          key={post.id}
        >
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="text-2xl">{post.description}</p>
        </Link>
      ))}
    </div>
  );
}

export async function getStaticProps({ params }) {
  const { postid } = params;
  //   const posts = AllData(postid);
  const { allEvents } = await import('@/data/data.json');
  const posts = allEvents.filter((post) => post.city === postid);
  return {
    props: { posts, pageName: postid },
  };
}

export async function getStaticPaths() {
  //   const posts = AllData();
  //   const paths = posts.map((spost) => ({
  //     params: { postid: spost.id.toString() },
  //   }));
  const { events_categories } = await import('@/data/data.json');
  const paths = events_categories.map((data) => ({
    params: { postid: data.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
}
