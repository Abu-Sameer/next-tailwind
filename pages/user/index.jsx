import React from 'react';
// import useSWR from 'swr';

export default function User({ data }) {
  // const fetcher = (...args) => fetch(...args).then((res) => res.json());
  // const { data, error } = useSWR('http://localhost:3000/api/userdata', fetcher);

  // if (error) {
  //   <div>Error fetching data...</div>;
  // }
  // if (!data) {
  //   <div>Loading data...</div>;
  // }

  return (
    <div>
      {data.map((data) => (
        <h1 key={data.id} className="text-3xl font-bold text-center">
          {data.name}
        </h1>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const datas = await fetch('http://localhost:3000/api/userdata');
  const data = await datas.json();
  return {
    props: { data },
  };
}
