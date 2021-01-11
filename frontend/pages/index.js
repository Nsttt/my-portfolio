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
        On dev.
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: { projects: await getAllProjects() },
  };
}