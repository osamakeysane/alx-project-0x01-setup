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
// import Header from "@/components/layout/Header";
// import UserCard from "@/components/common/UserCard";
// import { UserProps } from "@/interfaces";
// interface UsersPageProps {
//   posts: UserProps[]; // rename users → posts
// }

// const Users: React.FC<UsersPageProps> = ({ posts }) => {
//   return (
//     <div className="flex flex-col min-h-screen">
//       <Header />
//       <main className="p-4">
//         <h1 className="text-2xl font-semibold mb-4">Users List</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {posts?.map((user) => (
//             <UserCard key={user.id} {...user} />
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// };

// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const posts = await response.json(); // rename users → posts

//   return {
//     props: {
//       posts,
//     },
//   };
// }

// export default Users;

// .....................................task 5 ........................
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserProps, UserData } from "@/interfaces";
import { useState } from "react";

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [allUsers, setAllUsers] = useState<UserProps[]>(users);
  const [user, setUser] = useState<UserData | null>(null);

  const handleAddUser = (newUser: UserData) => {
    setUser(newUser);
    const userWithId: UserProps = { ...newUser, id: allUsers.length + 1 };
    setAllUsers([userWithId, ...allUsers]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Users List</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white"
          >
            Add User
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {allUsers?.map((user) => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>

      {isModalOpen && (
        <UserModal
          onClose={() => setModalOpen(false)}
          onSubmit={handleAddUser}
        />
      )}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: { users },
  };
}

export default Users;
