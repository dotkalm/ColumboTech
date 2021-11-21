import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

import client from './client'

const builder = imageUrlBuilder(client)

function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export default function makeImage(asset: SanityImageSource, blurred: boolean, dimsArray: [number, number]){
	const [ width, height ] = dimsArray
	const hotspotX = asset?.hotspot?.x
	const hotspotY = asset?.hotspot?.y
	if(blurred){
		return urlFor(asset).focalPoint(hotspotX, hotspotY).size(width, height).fit('crop').blur(50).url()
	}
	return urlFor(asset).focalPoint(hotspotX, hotspotY).size(width, height).fit('min').url() 
}

