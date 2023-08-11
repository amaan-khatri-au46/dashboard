import React, { useState, useEffect } from 'react';


interface ToastProps {
  message: string;
  type: 'success' | 'error' | 'info';
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, duration = 3000 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  return show ? (
    <div className={`toast ${type}`}>
      <p>{message}</p>
    </div>
  ) : null;
};

export default Toast;
