import { useRouter } from 'next/router'
import RootLayout from "../app/layout"

import { useRouter } from 'next/router'

export default function MonAppli({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const { explain, analyse } = router.query
    return (
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    )
  }