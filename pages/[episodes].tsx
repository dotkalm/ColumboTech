import Episode from '../components/Episode'
import { postRequest } from '../actions/request'
import { queryAllArticlesEpisodeArticles, queryPerArticle } from '../graphql/queries'

const url = process.env.GRAPHQL_API

function Episodes({article}){
	return(<Episode article={article}/>)
}
export async function getStaticProps({ params: { episodes } }){
	const [, season, , episode ] = episodes.split('-')
	const seasonObject = { season: Number(season), episode: Number(episode) } 
	const response = await postRequest(url, queryPerArticle, seasonObject)
	if(response.errors){
		return { props: { option: true }}
	}
	const { data : { allArticle }} = response
	const [ article ] = allArticle
	return { props: { option: true, article }}
}
export async function getStaticPaths(){
	const response = await postRequest(url, queryAllArticlesEpisodeArticles)
	const paths = response?.data?.allArticle.map(({season, episode, _id }) => ({
		params: { episodes: `season-${season}-episode-${episode}` },
	}))
	return { fallback: false, paths }
}
export default Episodes
