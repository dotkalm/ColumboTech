import client from "../apollo-client";
import type { AppProps } from 'next/app'
import { ApolloProvider } from "@apollo/client";

import '../styles/globals.css'
import { initClient } from '../apollo'

const client = initClient()

function MyApp({ Component, pageProps }: AppProps) {
  return(
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	)
}

export default MyApp
