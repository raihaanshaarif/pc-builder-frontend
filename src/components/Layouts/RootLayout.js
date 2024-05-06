import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
