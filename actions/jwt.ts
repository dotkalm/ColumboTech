import { getSearchKey } from './jsonParsers'

export function jwtDecodeExp(jwt: string): number{
	const element = Number(getSearchKey(jwt, 'exp', 1000))
	if(!Number.isNaN(element)){
		return element
	}
	return 0 
}
