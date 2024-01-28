import { Outlet } from '@mui/icons-material';
import React, { useEffect } from 'react'

function PersistLogin() {
  const loading = false;
  const accessToken = false;
  const refreshToken = null;

  useEffect(() => {
    function verifyRefreshToken() {
      try {
        // dispatch(refreshAccessToken(refreshToken))
        console.log("Refreshing Access Token");
      } catch (error) {
        console.log("Error refreshing access token");
      }
    }
    if (!accessToken) {
      verifyRefreshToken();
    }
  }, [accessToken, refreshToken]);

  return (
    <>
      {loading ? <p>Loading...</p> : <Outlet></Outlet>}
    </>
  )
}

export default PersistLogin
