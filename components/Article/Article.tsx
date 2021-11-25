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
		index,
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
				</a>
			</Link>
			<Link href={`/season-${season}-episode-${episode}`}>
				<a>
					<h3> season {season} episode {episode} </h3>
				</a>
			</Link>
			<Link href={`/season-${season}-episode-${episode}`}>
				<a>
					<div className={styles.images}>
						<ImageComponent 
							alt={mainImage.title} 
							data={mainImage.asset}
							height={500}
							priority={index < 5}
							width={800}
						/>
					</div>
				</a>
			</Link>
			<Link href={`/season-${season}-episode-${episode}`}>
				<a>
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
