import Head from "next";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Providers } from "@/components/providers";
import { Navbar, FormContact, Whatsapp, Footer } from "@/components/ui";
import { Flex } from "@chakra-ui/react"
import "@/styles/globals.css";

const roboto = Roboto({
  weight: ['300','400','500','700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Cabañas Villa Melisa",
  description: "Cabañas en playa de oro III, en las cercanias de carlos paz, a solo 8 minutos, para 5 personas, totalmente equipadas con pileta, cochera y asador.",
  keywords: "cabaña, cabania, cabana, casa, vacaciones, carlos paz, san antonio de arredondo, playa de oro III, pileta, parque, asador, cochera, parque, cesped, descanso, relax, cocina, heladera, cordoba, argentina, rio, descanso, paz",
  classification: "Vida en la naturaleza y descanso en cabañas",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={roboto.className}>
        <Providers>
          <Flex w='100%' h='max-content' minH='100vh' direction='column'>
            <Navbar />
              {children}
            <Whatsapp/>
            <FormContact />
            <Footer />
          </Flex>
        </Providers>
      </body>
    </html>
  );
}
