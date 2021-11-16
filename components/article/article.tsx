import PortableText from '../PortableText'

function Articles({article}){
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
	console.log(article)	
	return(
		<article key={_id} className='articleBody'> 
			<PortableText textBlock={titleRaw}/>
			<PortableText textBlock={descriptionRaw}/>
		</article>
	)
}

export default Articles
