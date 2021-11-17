import styles from "./Slideshow.module.css"
import PortableText from '../PortableText'
import ImageComponent from "../ImageComponent"

function Slideshow({ slideshow }){
	const mapSlideshow = slideshow.map(({ _key, asset, title }, index) => {
		const even = slideshow.length % 2 === 0
		const lastOfOdd = index === slideshow.length -1 && !even
		return(
			<div 
				className={lastOfOdd ? styles.entry : ''} 
				key={_key} 
			>
				<ImageComponent 
					alt={title}
					blurred={false} 
					data={asset}
					height={600}
					width={1000}
				/>
			</div>
		)
	})
	return(
		<section className={styles.slideshow}>
			{mapSlideshow}
		</section>
	)
}

export default Slideshow
