import Head from 'next/head'
import { getAllProjects } from '../services/project/project.service'
import { Header } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <Header.Frame>
          <Header.Group>
            <Header.Logo>NST Lopez</Header.Logo>
          </Header.Group>
        </Header.Frame>
      </Header>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: { projects: await getAllProjects() },
  };
}