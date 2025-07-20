import React from "react";
import { UserModalProps } from "../../interfaces";

const UserModal: React.FC<UserModalProps> = ({ user, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3 p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-4">{user.name}</h2>
        <p className="mb-2">
          <strong>Username:</strong> {user.username}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="mb-2">
          <strong>Website:</strong> {user.website}
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Address</h3>
          <p>
            {user.address.street}, {user.address.city} ({user.address.zipcode})
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Company</h3>
          <p>{user.company.name}</p>
          <p className="text-sm italic">{user.company.catchPhrase}</p>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
