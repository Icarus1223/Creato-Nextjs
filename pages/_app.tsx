import { ThemeProvider } from 'next-themes';
import { SessionProvider } from "next-auth/react"
import ErrorBoundary from '@/src/components/ErrorBoundary';
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <ErrorBoundary>
      <ThemeProvider enableSystem={true} attribute="class" forcedTheme=''>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}