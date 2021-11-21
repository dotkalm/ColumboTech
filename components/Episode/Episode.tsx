import PortableText from '../PortableText'
import styles from "./Episode.module.css"
import ImageComponent from "../ImageComponent"
import Slideshow from '../Slideshow'
import { ArticlePropsType } from '../../types/Article'

function Episode({article}: ArticlePropsType){
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
		<article key={_id} className={styles.Episode}> 
			<h2>
				<PortableText 
					key={`${_id}title`}
					textBlock={titleRaw} 
				/>
			</h2>
			<h3> Season {season}, Episode {episode} </h3>
			<div className={styles.Description}>
				<PortableText 
					key={`${_id}description`}
					textBlock={descriptionRaw} 
				/>
			</div>
			<Slideshow slideshow={slideshow}/>
		</article>
	)
}

export default Episode 

