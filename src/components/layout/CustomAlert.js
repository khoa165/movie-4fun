import React, { useContext } from 'react';
import { Alert } from 'reactstrap';
import AlertContext from '../../context/alert/alertContext';

const CustomAlert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <Alert color={alert.type}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </Alert>
    )
  );
};

export default CustomAlert;
