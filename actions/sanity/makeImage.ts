import imageUrlBuilder from '@sanity/image-url'
import client from './client'

const builder = imageUrlBuilder(client)

function urlFor(source) {
  return builder.image(source)
}

export default function makeImage(asset, blurred, [ width, height ]){
	const crop = asset?.crop
	const dims = asset?.asset?.metadata?.dimensions
	const hotspot = asset?.hotspot
	const hotspotX = asset?.hotspot?.x
	const hotspotY = asset?.hotspot?.y
	if(blurred){
		return urlFor(asset).focalPoint(hotspotX, hotspotY).size(width, height).fit('crop').blur(50).url()
	}
	return urlFor(asset).focalPoint(hotspotX, hotspotY).size(width, height).fit('min').url() 
}

