import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Articles from '../components/Articles'
import { postRequest } from '../actions/request'
import { queryAllArticles } from '../graphql/queries'

function Home({allArticle}){
  return (
    <div className={styles.container}>
      <Head>
        <title>One More Thing Tech</title>
        <meta name="description" content="one more thing tech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Columbo Tech Blog</h1>
				<Articles allArticle={allArticle}/>
      </main>

      <footer className={styles.footer}>a Columbo tech blog</footer>
    </div>
  )
}

export default Home

export async function getStaticProps(){
	const url = process.env.GRAPHQL_API
	const response = await postRequest(url, queryAllArticles)
	return { 
		props: response?.data
	}
}
