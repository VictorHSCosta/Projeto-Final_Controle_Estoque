import "~/styles/globals.css";

import { type Metadata } from "next";
import { AuthProvider } from "./_components/auth_provider";

export const metadata: Metadata = {
  title: "Sebinho - Gerenciamento de Estoque",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/logo.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body>
          <AuthProvider>
            {children}
          </AuthProvider>
      </body>
    </html>
  );
}
