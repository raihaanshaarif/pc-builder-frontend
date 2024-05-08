import RootLayout from '@/components/Layouts/RootLayout';
import store from '@/redux/store';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import { Montserrat, Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <RootLayout>
        <main className={poppins.className}>
          <Component {...pageProps} />
        </main>
      </RootLayout>
    </Provider>
  );
}
