import Head from "next/head"
import { GlobalStyle, Container } from "../../styles/pages/test.style"

export default function Home() {
  return (
    <>
      <Head>
        <title>SSR styled-components with Next.js Starter</title>
      </Head>
      <Container>
        <GlobalStyle />
        <h1>Hello, world!</h1>
      </Container>
    </>
  )
}
