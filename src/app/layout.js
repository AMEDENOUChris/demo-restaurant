import "./globals.css";
import site from "../site.config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export const metadata = {
  title: { default: site.name, template: `%s | ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }) {
  const theme = {
    "--accent": site.theme.accent,
    "--accent-dark": site.theme.accentDark,
    "--background": site.theme.background,
    "--text": site.theme.text,
  };

  return (
    <html lang="fr">
      <body style={theme}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
