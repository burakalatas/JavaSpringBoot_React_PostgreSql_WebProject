import React, { ReactNode } from 'react';

import Navbar from './adminNavbar';

interface AdminLayoutProps {
  children: ReactNode;
}

function AdminLayout({ children }: AdminLayoutProps): JSX.Element {
  return (
    <div>
      <Navbar />

      <main>{children}</main>
    </div>
  );
}

export default AdminLayout;

