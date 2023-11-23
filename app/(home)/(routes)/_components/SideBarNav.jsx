"use client";
import { Layout, Mail, Search, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

function SideBarNav() {
  const pathName = usePathname();

  const menuList = [
    {
      id: 1,
      name: "Browse",
      icon: Search,
      path: "/browse",
    },
    {
      id: 2,
      name: "Dashboard",
      icon: Layout,
      path: "/dashboard",
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
      path: "/upgrade",
    },
    {
      id: 4,
      name: "Newletter",
      icon: Mail,
      path: "/newsletter",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="h-full bg-white border-r flex flex-col overflow-y-auto shadow-md ">
      <div className="p-5 border-b z-50">
        <Image src="/logo.webp" alt="logo" width={100} height={100} />
      </div>

      <div className="flex flex-col">
        {menuList.map((item, index) => (
          <Link href={item.path} key={index}>
            <div
              className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-gray-200 cursor-pointer ${
                pathName == item.path ? "bg-purple-50 text-purple-800" : null
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <item.icon />
              <h2>{item.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideBarNav;
