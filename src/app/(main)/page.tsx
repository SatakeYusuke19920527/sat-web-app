import Card from "@/components/Card";
import { siteConfig } from "../../../site.config";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-4">
      <div className="pt-12">
        <h1 className="text-5xl mb-8">{siteConfig.title}</h1>
        <div className="grid md:gap-6 mt-10 md:grid-cols-3 grid-cols-1 w-full my-12">
          {/* Card */}
          <Card name="test card" />
          <Card name="test card" />
          <Card name="test card" />
          <Card name="test card" />
        </div>
      </div>
    </main>
  );
}
