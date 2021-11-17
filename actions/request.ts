export async function postRequest(url, body){
	try{
		const json = JSON.stringify({query: body})
		const f = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
			},
			mode: 'cors',
			cache: 'default',
			body: json
		})
		const response = await f.json()
		return response
	}catch(err){
		return err
	}
}

