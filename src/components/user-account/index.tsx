import React from 'react';
import type { UserAccountProps } from './types';
import { UserWrapper, Avatar, UserInfo, UserOptions } from './styles';
import ARROW_DOWN_ICON from '../../assets/icons/ArrowDown';

export const UserAccount: React.FC<UserAccountProps> = ({
  name,
  avatarUrl,
  open = false,
}) => (
  <UserWrapper
    aria-label={`Conta de ${name}`}
    aria-haspopup="menu"
    aria-expanded={open}
  >
    <Avatar>
      {avatarUrl ? (
        <img src={avatarUrl} alt="" width={32} height={32} />
      ) : (
        name.charAt(0).toUpperCase()
      )}
    </Avatar>
    <UserOptions>
      <UserInfo>{name}</UserInfo>
    {ARROW_DOWN_ICON}
    </UserOptions>
    
  </UserWrapper>
);

export type { UserAccountProps } from './types';
export default UserAccount;