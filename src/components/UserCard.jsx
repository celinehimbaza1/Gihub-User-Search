import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="bg-white dark:bg-[#1E2A47] p-6 rounded-2xl shadow-md flex flex-col md:flex-row gap-6 mt-6">
      <img
        src={user.avatar_url}
        alt={user.name}
        className="w-24 h-24 rounded-full"
      />
      <div className="flex-1">
        <div className="flex flex-col md:flex-row justify-between">
          <h2 className="text-xl font-bold">{user.name || 'Not Available'}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Joined {new Date(user.created_at).toLocaleDateString()}
          </p>
        </div>
        <p className="text-blue-500">@{user.login}</p>
        <p className="mt-4 text-sm text-gray-700 dark:text-gray-300">
          {user.bio || 'This profile has no bio'}
        </p>

        <div className="bg-[#F6F8FF] dark:bg-[#141D2F] p-4 rounded-xl mt-4 grid grid-cols-3 text-center">
          <div>
            <p className="text-xs text-gray-500">Repos</p>
            <p className="text-lg font-bold">{user.public_repos}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Followers</p>
            <p className="text-lg font-bold">{user.followers}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Following</p>
            <p className="text-lg font-bold">{user.following}</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6 text-sm">
          <p className="flex items-center gap-2">
            📍 {user.location || 'Not Available'}
          </p>
          <p className="flex items-center gap-2">
            🔗{' '}
            {user.blog ? (
              <a
                href={user.blog}
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                {user.blog}
              </a>
            ) : (
              'Not Available'
            )}
          </p>
          <p className="flex items-center gap-2">
            🐦{' '}
            {user.twitter_username ? (
              <a
                href={`https://twitter.com/${user.twitter_username}`}
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                @{user.twitter_username}
              </a>
            ) : (
              'Not Available'
            )}
          </p>
          <p className="flex items-center gap-2">
            🏢 {user.company || 'Not Available'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
