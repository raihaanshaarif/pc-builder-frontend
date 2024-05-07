import RootLayout from "@/components/Layouts/RootLayout";
import store from "@/redux/store";
import "@/styles/globals.css";
import { Provider } from "react-redux";
import { Montserrat } from 'next/font/google'

const monserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <RootLayout>
      <main className={monserrat.className}>
        <Component {...pageProps} />
        </main>
      </RootLayout>
    </Provider>
  );
}
