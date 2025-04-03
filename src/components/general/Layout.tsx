import { ReactNode } from 'react';
import { Header } from '../services/Header';
import { Sidebar } from '../services/Sidebar';

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className=" flex  min-h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <main>{children}</main>
        </div>
      </div>
    </>
  );
}
