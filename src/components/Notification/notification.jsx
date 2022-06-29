import PropTypes from 'prop-types';

import { NotificationMsg } from './notification.styled';

export function Notification({ message }) {
  return <NotificationMsg>{message}</NotificationMsg>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
