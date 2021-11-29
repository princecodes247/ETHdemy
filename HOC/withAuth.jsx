import { useRouter } from 'next/router'

const withAuth = (WrappedComponent) => {


	return ( props ) => {
		if (typeof window !== "undefined") {
				const Router = useRouter()
			const user = JSON.parse(localStorage.getItem("user"))
			if (!user || !user?.accessToken) {
						Router.replace("/login")
						return null;
				}



		
				return <WrappedComponent {...props} id={user.id} />
			
			
		}
				return null;
	}
}

export default withAuth;