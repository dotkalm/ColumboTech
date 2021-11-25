import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Articles from '../components/Articles'
import { postRequest } from '../actions/request'
import { QUERY_ALL_ARTICLES } from '../graphql/queries'
import { ArticlesPropsType } from '../types/Article'

function Home({allArticle}: ArticlesPropsType){
  return (
    <div className={styles.container}>
      <Head>
        <title>One More Thing Tech</title>
        <meta name="description" content="one more thing tech" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ONE M🕵🏼‍♂️RE THING</h1>
				<Articles allArticle={allArticle}/>
      </main>

      <footer className={styles.footer}>a Columbo tech blog</footer>
    </div>
  )
}

export default Home

export async function getStaticProps(){
	const url = process.env.GRAPHQL_API
  if(!url){
    return { 
			props: {allArticle: [], fallback: "blocking" }
    }
  }
	const response = await postRequest(url, QUERY_ALL_ARTICLES, {})
  const allArticle = response?.data?.allArticle
	console.log(response)
	return { 
		props:{allArticle, fallback:false } 
	}
}
