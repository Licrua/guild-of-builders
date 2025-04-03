'use client';
import React from 'react';
import { ServicesList } from './ServicesList';

export const DashboardLayout: React.FC = () => {
  return (
    <>
      <ServicesList />
      {/* <CreateService /> */}
    </>
  );
};
