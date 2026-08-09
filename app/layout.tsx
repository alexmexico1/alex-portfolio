import "./globals.css";
import ThemeProvider from "@/components/theme/ThemeProvider";

export const metadata = {
  title: "Alex Sunday Obi",
  description: "Full Stack Software Engineer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}