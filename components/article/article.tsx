import Image from 'next/image'
import PortableText from '../PortableText'

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
			<PortableText 
				classname='title'
				key={`${_id}title`}
				textBlock={titleRaw} 
			/>
			<PortableText 
				classname='description'
				key={`${_id}description`}
				textBlock={descriptionRaw} 
			/>
		</article>
	)
}

export default Article
