import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SideMenu from '@/components/SideMenu'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Sat Web App',
  description: 'Sat portfolio web app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        {/* <div className="relative overflow-hidden"> */}
        <div className="relative">
          <div className="flex flex-col items-center w-full mx-auto">
            <div className="flex w-screen h-full">
              <div className="h-auto grow-0">
                <SideMenu />
              </div>
              <div className="flex flex-col grow">
                <Navbar />
                <main className="w-full pb-12">{children}</main>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
