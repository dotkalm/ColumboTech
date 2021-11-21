export function getSearchKey(jsonString:string, searchKey: string, fallback: string):string{
	try{
		let title = fallback 
		const reviver =	(key: string, value: unknown) => {
			if(key === searchKey && typeof value === 'string'){
				title = value
			}
			return value
		}
		const jsonObject = JSON.stringify(jsonString, reviver)
		return title
	}catch(err){
		console.log(err)
		return fallback 
	}
}

