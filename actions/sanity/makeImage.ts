import imageUrlBuilder from '@sanity/image-url'
import client from './client'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default function makeImage(image, blurred, [ width, height ]){
	const crop = image?.asset?.crop
	const dims = image?.asset?.asset?.metadata?.dimensions
	const hotspot = image?.asset?.hotspot
	const hotspotX = image?.asset?.hotspot?.x
	const hotspotY = image?.asset?.hotspot?.y
	if(blurred){
		return urlFor(image.asset).focalPoint(hotspotX, hotspotY).size(width, height).fit('crop').blur(50).url()
	}
	return urlFor(image?.asset).focalPoint(hotspotX, hotspotY).size(width, height).fit('crop').url() 
}

