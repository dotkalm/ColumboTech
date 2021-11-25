export function jwtDecode(jwt){
	return JSON.parse(atob(jwt.split('.')[1]))
}
