import Head from 'next/head';
import React from 'react';

export default function Aboutus() {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <main style={{ minHeight: '525px' }} className="container md:mx-auto">
        <div className="">
          <h1 className="text-3xl font-bold text-red-500">About Us</h1>
          <p className="text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et placeat
            magni corrupti excepturi aperiam eveniet laboriosam id autem odio,
            eius laudantium quis delectus libero hic rerum voluptatum
            consequuntur minus tempore ipsa eligendi ullam necessitatibus
            cupiditate cum ab? A, consectetur fugit quas temporibus laborum
            consequuntur corporis sunt perspiciatis alias tempora natus officiis
            amet incidunt, reprehenderit error placeat nesciunt sint? Natus iure
            nihil nobis dignissimos possimus libero reiciendis repellendus
            laboriosam architecto. Architecto, error aperiam voluptatibus
            reiciendis maiores sit similique consectetur officiis nam molestiae
            corrupti eos iure aliquid quod accusamus reprehenderit quibusdam
            molestias eius, a veniam itaque! Asperiores veritatis ipsa expedita
            hic illo.
          </p>
        </div>
        <div>
          <h3 className="text-1xl font-bold">Content</h3>
          <p className="text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            quas dolores perferendis, reprehenderit amet sequi quidem enim dolor
            nam, et atque, nesciunt commodi voluptatem officia. Aperiam minus,
            ab eius earum praesentium numquam. Eaque impedit ipsum harum veniam
            alias facilis. Dignissimos obcaecati illo sapiente illum quis
            molestiae, laborum nihil assumenda ex?
          </p>
        </div>
      </main>
    </>
  );
}
