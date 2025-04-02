"use client";
import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { ServicesList } from "./ServicesList";

export const DashboardLayout: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 pt-16 ml-64 max-md:ml-52 max-sm:ml-16">
        <Header />
        <ServicesList />
      </div>
    </div>
  );
};
