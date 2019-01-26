import * as React from "react"
import App, { Container } from "next/app"
import Head from "next/head"
import { ApolloProvider } from "react-apollo"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { getTokens, defaultTheme } from "@kiwicom/orbit-components"

import withApolloClient from "../lib/with-apollo-client"

const GlobalStyle = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    background-color: ${({ theme }) => theme.orbit.paletteCloudLight};
  }
`

GlobalStyle.defaultProps = {
  theme: defaultTheme
}

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props
    return (
      <Container>
        <Head>
          <title>JS Weekend</title>
        </Head>
        <ThemeProvider theme={{ orbit: getTokens() }}>
          <>
            <GlobalStyle />
            <ApolloProvider client={apolloClient}>
              <Component {...pageProps} />
            </ApolloProvider>
          </>
        </ThemeProvider>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
