import Link from 'next/link'
import Head from 'next/head'
import Episode from '../components/Episode'
import styles from '../styles/Episode.module.css'
import { ArticleType, StaticEpisodesPaths, AllArticlePaths } from '../types/Article'
import { postRequest } from '../actions/request'
import { getSearchKey } from '../actions/jsonParsers'
import { queryAllArticlesEpisodeArticles, queryPerArticle } from '../graphql/queries'

const url = process.env.GRAPHQL_API || ''

function Episodes({article}:{article: ArticleType}){
	const { 
		episode, 
		season, 
		titleRaw
	} = article
	const episodeTitle = getSearchKey(titleRaw, 'title', `season ${season}, episode ${episode}`)
	return(
		<>
      <Head>
      </Head>
			<main className={styles.main}>
				<header>
					<Link href='/'>
						<a>ONE M🕵🏼‍♂️RE THING</a>
					</Link>
				</header>
				<Episode article={article}/>
				<footer className={styles.footer}>
					a Columbo Tech Blog
				</footer>
			</main>
		</>
	)
}
export async function getStaticProps({ params: { episodes } }: StaticEpisodesPaths){
	const [, season, , episode ] = episodes.split('-')
	const seasonObject = { season: Number(season), episode: Number(episode) } 
	const response = await postRequest(url, queryPerArticle, seasonObject)
	if(response.errors){
		return { props: { option: true }}
	}
	const { data : { allArticle }} = response
	const [ article ] = allArticle
	const { titleRaw } = article
	console.log(titleRaw, `<---48`)
	return { props: { option: true, article, titleRaw }}
}
export async function getStaticPaths(){
	const response = await postRequest(url, queryAllArticlesEpisodeArticles, {})
	const paths = response?.data?.allArticle.map(({season, episode, _id }: AllArticlePaths) => ({
		params: { episodes: `season-${season}-episode-${episode}`, id: _id },
	}))
	return { fallback: false, paths }
}
export default Episodes

