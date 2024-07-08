"use client";

import Header from "@/util/header";
import Sidebar from "@/util/sidebar";
import Content from "@/components/contentSection";
import ImageSection from "@/components/imageSection";

export default function Home() {
  const sidebarItems = [
    { label: "Best Matches", href: "#best-matches" },
    { label: "Menu", href: "#menu" },
    { label: "Dietary Info", href: "#dietary-info" },
    { label: "Reviews", href: "#reviews" },
  ];

  return (
    <main className="mx-auto">
      <Header />
      <ImageSection />
      <div className="flex flex-col md:flex-row mx-4">
        <div className="md:w-52 w-full md:flex-shrink-0 mb-4 md:mb-0">
          <Sidebar items={sidebarItems} />
        </div>
        <div className="flex-grow">
          <Content />
        </div>
      </div>
    </main>
  );
}
