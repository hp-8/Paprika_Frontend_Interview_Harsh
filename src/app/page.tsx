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
      <div className="flex mx-4">
        <div className="w-52 flex-shrink-0">
          <Sidebar items={sidebarItems} />
        </div>
        <div className="flex-grow">
          <Content />
        </div>
      </div>
    </main>
  );
}
