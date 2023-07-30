import React, { ReactNode } from 'react';

import Navbar from './userNavbar';

interface UserLayoutProps {
  children: ReactNode;
}

function UserLayout({ children }: UserLayoutProps): JSX.Element {
  return (
    <div>
      <Navbar />

      <main>{children}</main>
    </div>
  );
}

export default UserLayout;