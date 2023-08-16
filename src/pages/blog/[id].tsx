import { GetStaticPaths, GetStaticProps } from 'next';
import { getAllPostIds, getPostData } from '../../hooks/getPosts';
import ReactMarkdown from 'react-markdown';
import NavBar from '@/components/NavBar';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds(); // This function should return an array of post IDs
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params!.id as string); // Fetch data for a single post
  return {
    props: {
      postData,
    },
  };
};

type PostData = {
  id: string;
  content: string;
  // Add other properties as needed, like title, date, etc.
};

const Post = ({ postData }: { postData: PostData }) => {
  console.log("dfvfdv:postData", postData)
  return (
    <div>
      <NavBar />
      {/* Render the post content here */}
      <ReactMarkdown>{postData.content}</ReactMarkdown>
    </div>
  );
};

export default Post;

