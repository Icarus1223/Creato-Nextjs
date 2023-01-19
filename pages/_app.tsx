import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"
import ErrorBoundary from '@/src/components/ErrorBoundary'
import '../styles/globals.css'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ErrorBoundary>
      <ThemeProvider enableSystem={true} attribute="class" forcedTheme='dark'>
        <SessionProvider session={pageProps.session}>
          {getLayout(<Component {...pageProps} />)}
        </SessionProvider>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App