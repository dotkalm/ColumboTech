import Article from '../article'

function Articles({allArticle}){

	const mapArticles = allArticle.map(article => <Article article={article}/>)
	
	return(
		<> {mapArticles} </>
	)
}

export default Articles
