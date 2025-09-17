// import React from "react";

// const PostsPage: React.FC = () => {
//   return <h1 className="text-3xl">Posts Page</h1>;
// };

// export default PostsPage;
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Posts Page</h1>
        <p className="mt-2">Here are all the posts...</p>
      </main>
    </div>
  );
};

export default Posts;
