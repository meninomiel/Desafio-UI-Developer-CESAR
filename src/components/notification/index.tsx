import React from 'react';
import type { NotificationBellProps } from './types';
import { Wrapper, Badge } from './styles';
import BELL_ICON from '../../assets/icons/Bell';



;

export const NotificationBell: React.FC<NotificationBellProps> = ({
  unreadCount,
}) => (
  <Wrapper
    aria-label={`${unreadCount} notificações não lidas`}
    aria-haspopup="menu"
  >
    {BELL_ICON}
    {unreadCount > 0 && (
      <Badge aria-hidden="true">
        {unreadCount > 9 ? '9+' : unreadCount}
      </Badge>
    )}
  </Wrapper>
);

export type { NotificationBellProps } from './types';
export default NotificationBell;