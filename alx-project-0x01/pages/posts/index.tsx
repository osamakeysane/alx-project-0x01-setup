// import React from "react";

// const PostsPage: React.FC = () => {
//   return <h1 className="text-3xl">Posts Page</h1>;
// };

// export default PostsPage;
// import Header from "@/components/layout/Header";

// const Posts: React.FC = () => {
//   return (
//     <div>
//       <Header />
//       <main className="p-6">
//         <h1 className="text-3xl font-bold">Posts Page</h1>
//         <p className="mt-2">Here are all the posts...</p>
//       </main>
//     </div>
//   );
// };

// export default Posts;

import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const Posts: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Post Content</h1>
          <button className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts?.map(({ title, body, userId, id }) => (
            <PostCard
              title={title}
              body={body}
              userId={userId}
              id={id}
              key={id}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
