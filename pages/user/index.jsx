import React from 'react';

export default function User({ userData }) {
  return (
    <div>
      {userData.map((data) => (
        <h1 key={data.id} className="text-3xl font-bold text-center">
          {data.name}
        </h1>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const data = await fetch('http://localhost:3000/api/userdata');
  const userData = await data.json();
  return {
    props: { userData },
  };
}
