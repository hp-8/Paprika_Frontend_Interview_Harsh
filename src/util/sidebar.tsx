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
    <div className="sidebar m-0 py-7 w-56 sticky h-screen overflow-y-auto ">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="block py-4 px-7 text-black hover:bg-pinkHero hover:bg-opacity-50 font-semibold text-sm transition-colors duration-200">
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
