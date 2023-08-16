import React from 'react';
import Link from 'next/link';
import { getSortedPostsData } from '../../hooks/getPosts';
import NavBar from '@/components/NavBar';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

type Post = {
  id: string;
  content: string;
  // Add other properties as needed, like title, date, etc.
};

const Blog = ({ allPostsData }: { allPostsData: Post[] }) => {
  return (
    <div className="text-center">
      <NavBar/>
      {/* Other components, like NavBar */}
      <h1 className="text-4xl mb-4">My Blog Page</h1>
      <div className="max-w-xl mx-auto text-lg text-left">
        {allPostsData.map((post: Post) => (
          <div key={post.id}>
            <Link href={`/blog/${post.id}`}>
              <p>{post.id}</p> {/* Assuming title is one of the properties */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
