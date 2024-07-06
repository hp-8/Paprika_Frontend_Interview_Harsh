import React from 'react';

interface SidebarItem {
    label: string,
    href: string
}

interface sidebarProps {
    items: SidebarItem[]
}


const Sidebar: React.FC<sidebarProps> = ({ items }) => {
  return (
    <div className="sidebar m-0 p-0 w-52 bg-blue-200 fixed h-screen overflow-auto">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="block py-4 px-7 text-black hover:bg-pinkHero font-semibold text-sm">
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
