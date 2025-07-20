import React, { useState } from "react";
import { UserProps as UserData } from "../../interfaces";
import UserCard from "../../components/common/UserCard";
import UserModal from "../../components/common/UserModal";

interface UsersProps {
  posts: UserData[];
}

const Users: React.FC<UsersProps> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  // Default user (can be empty or first user)
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);

  const openModal = () => {
    setSelectedUser(posts[0]); // You can set a default user or allow dynamic selection
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Users</h1>
        <button
          onClick={openModal}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add User
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>

      {selectedUser && (
        <UserModal
          user={selectedUser}
          isOpen={isModalOpen}
          onClose={closeModal}
          onSubmit={(user) => {
            // handle submit logic here (e.g., add or update user)
            // For now, just close the modal
            closeModal();
          }}
        />
      )}
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}
