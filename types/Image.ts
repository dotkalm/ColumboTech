import { SanityAsset } from '@sanity/image-url/lib/types/types'

export type ImageProps = {
    alt: string
    blurred: boolean
    data: SanityAsset,
    width: number
    height: number
}