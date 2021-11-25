import Image from 'next/image'
import makeImage from '../../actions/sanity/makeImage'
import { ImageProps } from '../../types/Image'

function ImageComponent({alt, data, width, height, priority}: ImageProps){
	const url = makeImage(data, false, [ width, height ])
	return(
		<Image
			src={url}
			alt={data?.asset?.title}
			layout="responsive"
			height={height} 
			width={width}
			priority={priority}
			placeholder="blur"
			blurDataURL={makeImage(data, true, [ 60, 100 ])}
		/>
	)
}
export default ImageComponent

