import "../styles/globals.scss";

export const metadata = {
  title: "The Tinfoil Hat",
  description: "Your conspiracy theory haven",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
