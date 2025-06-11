import { useQueryClient } from '@tanstack/react-query';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { AUTH_TOKEN_NAME } from '@/lib/constants/common';
import { PAGE_URLS } from '@/lib/constants/page-urls';
import { getToken } from '@/lib/utility/token';

const ProtectedRoute = () => {
  const location = useLocation();
  const token = getToken(AUTH_TOKEN_NAME);
  const queryClient = useQueryClient();

  if (!token) {
    queryClient.removeQueries({ queryKey: ['profile'] });
    return (
      <Navigate
        to={`/${PAGE_URLS.PENGUMUMAN_PENGADAAN.PENGUMUMAN_PENGADAAN_INDEX}?backUrl=${location.pathname}`}
        replace
      />
    );
    // return <Outlet />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
