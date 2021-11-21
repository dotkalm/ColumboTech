import Article from '../Article'
import { ArticleTypes } from '../../types/Article'
function Articles({allArticle}: ArticleTypes){
	if(!allArticle){
		return <div></div>
	}
	const allArticlesMap = allArticle.map((article, index) => (
		<Article 
			article={article} 
			key={index}
		/>
	))
	return <div>{allArticlesMap}</div>
}

export default Articles
