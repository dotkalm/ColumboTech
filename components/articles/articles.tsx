import Article from '../Article'
import { ArticleTypes } from '../../types/Article'
function Articles({allArticle}: ArticleTypes){

	return allArticle.map((article, index) => (
		<Article 
			article={article} 
			key={index}
		/>
	))
}

export default Articles
