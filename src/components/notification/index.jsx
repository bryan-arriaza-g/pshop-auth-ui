import React from 'react';
import { notification } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

export const successNotification = (description = '', position = 'topRight') => {
  notification.open({
    duration: 5,
    message: <p>Successfully</p>,
    description,
    icon: <CheckCircleOutlined />,
    placement: position,
  });
};

export default successNotification;
