import Article from '../Article'

function Articles({allArticle}){

	return allArticle.map((article, index) => (
		<Article 
			article={article} 
			key={index}
		/>
	))
}

export default Articles
