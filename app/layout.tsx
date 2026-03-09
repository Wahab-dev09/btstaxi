import type { Metadata } from "next";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

// const roboto = Roboto({
//   weight: ['300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto',
// });

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BtsCars | On-Time Travelling Across the UK",
  description: "Reliable UK airport taxi transfers with professional drivers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" className={dmSans.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>

            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
