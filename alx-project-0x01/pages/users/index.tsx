// import React from "react";

// const UsersPage: React.FC = () => {
//   return <h1 className="text-3xl">Users Page</h1>;
// };

// export default UsersPage;
import Header from "@/components/layout/Header";

const Users: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-6">
        <h1 className="text-3xl font-bold">Users Page</h1>
        <p className="mt-2">Here are all the users...</p>
      </main>
    </div>
  );
};

export default Users;
