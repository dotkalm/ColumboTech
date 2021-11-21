import Link from 'next/link'
import PortableText from '../PortableText'
import styles from "./Article.module.css"
import ImageComponent from "../ImageComponent"
import { ArticlePropsType } from '../../types/Article'


export default function Article({article}: ArticlePropsType){
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
		<article key={_id} className={styles.Article}> 
			<Link href={`/season-${season}-episode-${episode}`}>
				<a>
					<h2 className={styles.title}>
						<PortableText 
							key={`${_id}title`}
							textBlock={titleRaw} 
						/>
					</h2>
					<h3> season {season} episode {episode} </h3>
					<ImageComponent 
						alt={mainImage.title} 
						blurred={false}
						data={mainImage.asset}
						height={500}
						width={800}
					/>
					<div className={styles.caption}>
						<PortableText 
							key={`${_id}description`}
							textBlock={textBelowMainImageRaw} 
						/>
					</div>
				</a>
			</Link>
		</article>
	)
}
