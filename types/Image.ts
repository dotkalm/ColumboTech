import { SanityAsset } from '@sanity/image-url/lib/types/types'

export type ImageProps = {
	alt: string
	data: SanityAsset
	height: number
	priority: boolean
	width: number
}
