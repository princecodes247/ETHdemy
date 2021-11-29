
	const getLocalRefreshToken = (to = "user") => {
		const user = JSON.parse(localStorage.getItem(to))
		return user?.refreshToken
	}
	const getLocalAccessToken = (to = "user") => {
		const user = JSON.parse(localStorage.getItem(to))
		return user?.accessToken
	}
	const updateLocalAccessToken = (token, to = "user") => {
		let user = JSON.parse(localStorage.getItem(to))
		user.accessToken = token
		localStorage.setItem("user", JSON.stringify(user))
	}
	const getUser = (user = "user") => {
		return JSON.parse(localStorage.getItem(user))
	}
	const setUser = (user) => {
		localStorage.setItem("user", JSON.stringify(user))
	}
		const setAdmin = (user) => {
		localStorage.setItem("admin", JSON.stringify(user))
	}
	const removeUser = (user = "user") => {
		localStorage.removeItem(user)
	}

const TokenService = {
	getLocalAccessToken,
	getLocalRefreshToken,
	updateLocalAccessToken,
	getUser,
	setUser,
	removeUser,
}

export default TokenService