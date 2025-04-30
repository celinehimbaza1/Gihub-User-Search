import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white dark:bg-[#1E2A47] rounded-xl p-6 shadow-md mt-6">
      <div className="flex gap-6">
        <img
          src={user.avatar_url}
          alt={user.name}
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h2 className="text-xl font-bold">{user.name || 'Not Available'}</h2>
          <p className="text-sm text-blue-500">@{user.login}</p>
          <p className="text-sm mt-2">{user.bio || 'This profile has no bio.'}</p>
        </div>
      </div>

      <div className="flex justify-around bg-gray-100 dark:bg-[#141D2F] p-4 rounded-lg mt-6">
        <div className="text-center">
          <p className="text-xs">Repos</p>
          <p className="text-lg font-bold">{user.public_repos}</p>
        </div>
        <div className="text-center">
          <p className="text-xs">Followers</p>
          <p className="text-lg font-bold">{user.followers}</p>
        </div>
        <div className="text-center">
          <p className="text-xs">Following</p>
          <p className="text-lg font-bold">{user.following}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-sm">
        <p>📍 {user.location || 'Not Available'}</p>
        <p>🔗 <a href={user.blog} target="_blank" rel="noopener noreferrer">{user.blog || 'Not Available'}</a></p>
        <p>🐦 {user.twitter_username || 'Not Available'}</p>
        <p>🏢 {user.company || 'Not Available'}</p>
      </div>
    </div>
  );
};

export default UserCard;
