import Head from 'next/head'
import { getAllProjects } from '../services/project/project.service'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        THIS IS A TEST FOR BEBSA NEUE.
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: { projects: await getAllProjects() },
  };
}