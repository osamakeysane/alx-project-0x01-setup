// import React from "react";

// const UsersPage: React.FC = () => {
//   return <h1 className="text-3xl">Users Page</h1>;
// };

// export default UsersPage;
// import Header from "@/components/layout/Header";

// const Users: React.FC = () => {
//   return (
//     <div>
//       <Header />
//       <main className="p-6">
//         <h1 className="text-3xl font-bold">Users Page</h1>
//         <p className="mt-2">Here are all the users...</p>
//       </main>
//     </div>
//   );
// };

// export default Users;
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-semibold mb-4">Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              address={user.address}
              phone={user.phone}
              website={user.website}
              company={user.company}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Users;
