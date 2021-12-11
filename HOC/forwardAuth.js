import { useRouter } from 'next/router'

const forwardAuth = (WrappedComponent) => {


	return ( props ) => {
		console.log("Hit")
		if (typeof window !== "undefined") {
			console.log("Window")
				const Router = useRouter()
			const user = JSON.parse(localStorage.getItem("user"))
			console.log(user)
			if (!user || !user?.accessToken) {
				console.log("Hit aaa")
				console.log(user?.accessToken)
				return <WrappedComponent {...props}/>
				}



				Router.replace(`/user/`)
				return null;
		
			
			
		}
				return null;
	}
}

export default forwardAuth;