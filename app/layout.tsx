import type { ReactNode } from 'react';
import Navbar from '../components/Navbar';

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;