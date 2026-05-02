import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Èpic Ioga | Ioga i Família",
  description: "El teu centre de ioga on la conciliació familiar és possible. Classes de ioga amb activitats per a nens simultànies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ca"
      className={`${inter.variable} ${outfit.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        <header className="sticky top-0 z-50 glass">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="flex items-center gap-3 text-2xl font-bold font-outfit text-sage-700">
                  <img src="/epicioga_logo.png" alt="Èpic Ioga Logo" className="h-10 w-auto rounded-full" />
                  Èpic Ioga
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/#nosaltres" className="text-gray-700 hover:text-terracotta-600 transition-colors">Nosaltres</Link>
                <Link href="/#classes" className="text-gray-700 hover:text-terracotta-600 transition-colors">Classes</Link>
                <Link href="/#tarifes" className="text-gray-700 hover:text-terracotta-600 transition-colors">Tarifes</Link>
                <Link href="/#horaris" className="text-gray-700 hover:text-terracotta-600 transition-colors">Horaris</Link>
              </nav>
              <div className="flex items-center space-x-4">
                <Link href="/dashboard" className="text-sm font-medium text-sage-700 hover:text-sage-600">
                  Àrea Alumnes
                </Link>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="bg-sage-700 text-sand-50 py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold font-outfit mb-4 text-sand-100">Èpic Ioga</h3>
              <p className="text-sm opacity-80">Conciliem el ioga amb la vida familiar. Porta als teus fills, nosaltres els cuidem mentre tu et cuides.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-terracotta-500">Contacte</h4>
              <p className="text-sm opacity-80">Carrer Fals 123, Barcelona</p>
              <p className="text-sm opacity-80">hola@epicioga.com</p>
              <p className="text-sm opacity-80">+34 600 000 000</p>
            </div>
            <div>
              <h4 className="font-bold mb-4 text-terracotta-500">Enllaços</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li><Link href="/admin" className="hover:underline">Accés Administrador</Link></li>
                <li><Link href="/dashboard" className="hover:underline">Accés Alumnes</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-sm opacity-60 border-t border-sage-600 pt-8">
            © {new Date().getFullYear()} Èpic Ioga. Tots els drets reservats.
          </div>
        </footer>
      </body>
    </html>
  );
}
