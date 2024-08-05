import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers";
import { Navbar, FormContact, Whatsapp } from "@/components/ui";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cabañas Villa Melisa",
  description: "Cabañas en playa de oro III, en las cercanias de carlos paz, a solo 8 minutos, para 5 personas, totalmente equipadas con pileta, cochera y asador.",
  keywords: "cabaña, cabania, cabana, casa, vacaciones, carlos paz, san antonio de arredondo, playa de oro III, pileta, parque, asador, cochera, parque, cesped, descanso, relax, cocina, heladera, cordoba, argentina, rio, descanso, paz",
  classification: "Vida en la naturaleza y descanso en cabañas",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <main>
            <Navbar />
              {children}
            <Whatsapp/>
            <FormContact />
          </main>
        </Providers>
      </body>
    </html>
  );
}
