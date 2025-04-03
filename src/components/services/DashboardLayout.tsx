"use client";
import React from "react";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { ServicesList } from "./ServicesList";
import { CreateService } from "./CreateService";

export const DashboardLayout: React.FC = () => {
  return (
    <div className=" flex  min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <ServicesList />
        <CreateService />
      </div>
    </div>
  );
};
