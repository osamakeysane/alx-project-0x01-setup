import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800">
        {name} ({username})
      </h2>
      <p className="text-gray-600">Email: {email}</p>
      <p className="text-gray-600">Phone: {phone}</p>
      <p className="text-gray-600">Website: {website}</p>
      <p className="text-gray-600">Company: {company.name}</p>
      <p className="text-gray-600">
        Address: {address.street}, {address.suite}, {address.city} (
        {address.zipcode})
      </p>
    </div>
  );
};

export default UserCard;
