import Article from '../Article'
import { ArticleTypes } from '../../types/Article'
function Articles({allArticle}: ArticleTypes){

	const allArticlesMap = allArticle.map((article, index) => (
		<Article 
			article={article} 
			key={index}
		/>
	))
	return <>{allArticlesMap}</>
}

export default Articles
