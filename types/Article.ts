import { SanityAsset } from '@sanity/image-url/lib/types/types'
export type ImagesType = {
	_id: string
	_type: string
	_createdAt: string
	_updatedAt: string
	_rev: string
	_key: string
	title: string
	asset: SanityAsset 
}
export type ArticleType = {
	_id: string
	_type: string
	_createdAt: string
	_updatedAt: string
	_rev: string
	_key: string
	titleRaw: string 
	mainImage: ImagesType
	textBelowMainImageRaw: string
	descriptionRaw: string 
	publicationDate: string
	season: number
	episode: number
	order: number
	slideshow: [ImagesType]
};
export type ArticlesPropsType = { allArticle: ArticleType[]}
export type ArticlePropsType = { article: ArticleType}
export type ArticleTypes = {
	allArticle: ArticleType[]
}
export type StaticEpisodesPaths = { 
	params: { 
		episodes: string,
		id: string 

	} 
}
export type AllArticlePaths = {
	season: string
	episode: string
	_id: string
}
