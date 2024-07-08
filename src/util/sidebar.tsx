import React from 'react';

interface SidebarItem {
    label: string,
    href: string
}

interface SidebarProps {
    items: SidebarItem[]
}

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  return (
    <div className="sidebar m-0 py-4 md:py-7 w-full md:w-56 md:sticky md:h-screen overflow-y-auto bg-white md:bg-transparent">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="block py-2 md:py-4 px-4 md:px-7 text-black hover:bg-pinkHero hover:bg-opacity-50 font-semibold text-xs md:text-sm transition-colors duration-200">
          {item.label}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
