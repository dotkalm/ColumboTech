import Image from 'next/image'
import makeImage from '../../actions/sanity/makeImage'

function ImageComponent({alt, blurred, data, width, height}){
	const dims = data?.asset?.metadata?.dimensions
	const url = makeImage(data, blurred, [ width, height ])
	return(
		<Image
			src={url}
			alt={data?.asset?.title}
			layout="responsive"
			height={height} 
			width={width}
			alt={alt}
		/>
	)
}
export default ImageComponent

