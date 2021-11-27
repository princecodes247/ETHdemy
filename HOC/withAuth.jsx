import { useRouter } from 'next/router'

const withAuth = (WrappedComponent) => {


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
						Router.replace("/login")
						return null;
				}



		
				return <WrappedComponent {...props} id={user.id} />
			
			
		}
				return null;
	}
}

export default withAuth;