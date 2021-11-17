import PortableText from '../PortableText'
import styles from "./Article.module.css"
import ImageComponent from "../ImageComponent"
import Slideshow from '../Slideshow'

function Article({article}){
	const { 
		_id,
		descriptionRaw, 
		episode,
		mainImage,
		publicationDate,
		season,
		slideshow,
		textBelowMainImageRaw,
		titleRaw, 
	} = article 
	return(
		<article key={_id} className='articleBody'> 
			<h2 className={styles.title}>
				<PortableText 
					key={`${_id}title`}
					textBlock={titleRaw} 
				/>
			</h2>
			<h3 className={styles.index}>season {season} episode {episode}</h3>
				
			<PortableText 
				classname='description'
				key={`${_id}description`}
				textBlock={descriptionRaw} 
			/>
			<Slideshow slideshow={slideshow} />
		</article>
	)
}

export default Article
