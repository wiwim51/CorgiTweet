import useUsers from "@/hooks/useUsers";

import Avatar from "../Avatar";

const FollowBar = () => {
  const { data: users = [] } = useUsers();

  if (users.length === 0) {
    return null;
  }
  return (
    <div className="px-6 py-4 hidden lg:block">
      <div className="bg-black rounded-xl p-4">
        <h2 className="text-beige text-xl font-semibold">who to follow</h2>
        <div className="flex flex-col gap-6 mt-4">
          {users.map((user: Record<string, any>) => (
            <div key={user.id} className="flex flex-row gap-4">
              <Avatar userId={user.id} />
              <div className="flex flex-col">
                <p className="text-roux font-semibold text-sm">{user.name}</p>
                <p className="text-beige text-sm">@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FollowBar;
