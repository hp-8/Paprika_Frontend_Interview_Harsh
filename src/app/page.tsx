"use client"

import Header from "@/util/header";
import Sidebar from "@/util/sidebar";
import Content from "@/components/contentSection";
import ImageSection from "@/components/imageSection";

export default function Home() {

  const sidebarItems = [
    { label: 'Best Matches', href: '#best-matches' },
    { label: 'Menu', href: '#menu' },
    { label: 'Dietary Info', href: '#dietary-info' },
    { label: 'Reviews', href: '#reviews' },
  ];

  return (
    <main className="mx-auto">
    
    <Header/>
    <ImageSection/>
    <Sidebar items={sidebarItems}/>
    <Content/>
    

    

    </main>
  
  );
}
