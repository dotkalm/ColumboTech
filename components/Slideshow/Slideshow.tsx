import styles from "./Slideshow.module.css"
import PortableText from '../PortableText'
import ImageComponent from "../ImageComponent"
import { SlideShowPropsType } from "../../types/Slideshow"

function Slideshow({ slideshow }: SlideShowPropsType){
	const mapSlideshow = slideshow.map(({ _key, asset, title }, index) => {
		return(
			<div 
				className={styles.entry} 
				key={_key} 
			>
				<ImageComponent 
					alt={title}
					data={asset}
					height={600}
					width={1000}
					priority={index < 4}
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
