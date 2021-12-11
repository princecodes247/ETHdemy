
  const DropDownMenu = (props) => {
    return <div className={`flex flex-col md:hidden px-3 py-6 bg-white text-black rounded items-stretch self-start shadow absolute top-12 right-2 transition-opacity  ${props.state ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            
            <ul className="gap-1 mb-4 flex text-center flex-col">
              <a href="/" className="hover:text-primary-accent p-1">Home</a>
              <a href="/about" className="hover:text-primary-accent p-1">About</a>
              <a href="/" className="hover:text-primary-accent p-1">Stocks</a>
              <a href="/" className="hover:text-primary-accent p-1">CryptoCurrency</a>
              <a href="/" className="hover:text-primary-accent p-1">Contact Us</a>
              
              
            </ul>
          <div className="flex gap-5">
            <a href="login" className="border-2 border-primary-accent text-black px-8 py-2 rounded-md mt-3 hover:shadow ">Sign In</a>
            <a href="/signup" className="bg-primary-accent hover:shadow text-black px-8 py-2 rounded-md mt-3 ">Sign Up</a>
          </div>
    </div>
  }

  export default DropDownMenu;