import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link href="/search">Go to algolia page</Link>
    </>
  );
};

export default Home;
