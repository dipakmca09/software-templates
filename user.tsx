import React from 'react';

interface UserPickerProps {
  users: string[];
  onSelectUser: (user: string) => void;
}

export const UserPicker = ({ users, onSelectUser }: UserPickerProps) => {
  return (
    <div>
      <h3>Select a User</h3>
      <select onChange={(e) => onSelectUser(e.target.value)}>
        {users.map((user) => (
          <option key={user} value={user}>
            {user}
          </option>
        ))}
      </select>
    </div>
  );
};

// Default user options
const defaultUsers = ${{ values.userOptions }};
