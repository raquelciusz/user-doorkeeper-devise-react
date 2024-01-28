import React from 'react'
import { useNavigate } from 'react-router-dom';

function PrivateRoute({ children } : any ) {
  const accessToken = false;
  const loading = false;
  const navigate = useNavigate();

  if (accessToken) {
    return children;
  } else if (loading) {
    return <p>Loading...</p>
  } else if (!accessToken && !loading) {
    navigate("/login");
  } else {
    return <p>Something went wrong</p>
  }
}

export default PrivateRoute
