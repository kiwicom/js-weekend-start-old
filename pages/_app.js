import * as React from "react"
import App, { Container } from "next/app"
import Head from "next/head"
import { ApolloProvider } from "react-apollo"

import withApolloClient from "../lib/with-apollo-client"

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <Head>
          <title>JS Weekend</title>
        </Head>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
