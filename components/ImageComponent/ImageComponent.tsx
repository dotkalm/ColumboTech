import Image from 'next/image'
import makeImage from '../../actions/sanity/makeImage'
import { ImageProps } from '../../types/Image'

function ImageComponent({alt, blurred, data, width, height}: ImageProps){
	const url = makeImage(data, blurred, [ width, height ])
	return(
		<Image
			src={url}
			alt={data?.asset?.title}
			layout="responsive"
			height={height} 
			width={width}
		/>
	)
}
export default ImageComponent

