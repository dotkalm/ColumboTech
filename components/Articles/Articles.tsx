import Article from '../Article'
import { ArticleTypes } from '../../types/Article'
function Articles({allArticle}: ArticleTypes){

	const allArticlesMap = allArticle.map((article, index) => {
		article.index = index
		return(
			<Article 
				article={article} 
				key={index}
			/>
		)
	})
	return <div>{allArticlesMap}</div>
}

export default Articles
