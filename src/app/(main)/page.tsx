import UdemyCard from '@/components/UdemyCard';
import { siteConfig } from "@/const/site.config";
import { udemyConfig } from "@/const/udemy.config";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="pt-12 sm:px-12 px-4">
        <h1 className="sm:text-4xl text-xl mb-8 w-full flex justify-center">
          {siteConfig.udemyCoupon}
        </h1>
        <div className="grid md:gap-6 mt-6 md:grid-cols-3 grid-cols-1 w-full my-12">
          {/* Card */}
          {udemyConfig.map((uc, index) => {
            return (
              <UdemyCard
                key={index}
                id={uc.id}
                title={uc.title}
                description={uc.description}
                imageUrl={uc.imageUrl}
                link={uc.link}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
