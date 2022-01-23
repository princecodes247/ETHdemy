
    import CartItemStyles from "./CartItem.module.css"
    const CartItem = (props) => {
      return <div styles={CartItemStyles.container}>
            <div className={CartItemStyles.card}>
               <div className={CartItemStyles.cardImg}>
               <p>{props.data.img}</p>

            </div>
            <div className={CartItemStyles.cardDetails}>
              <h5 className={CartItemStyles.cardTitle}>{props.data.title}</h5>
              <p className={CartItemStyles.cardDesc}>{props.data.desc}</p>
              <div className={CartItemStyles.cardRating}>{props.data.rating}</div>
              <div className={CartItemStyles.cardPrice}>{props.data.price}</div>
            </div>
          </div>
          <div className={CartItemStyles.buttonSet}>
          	<button className={CartItemStyles.btn}>Remove</button>
          	<button className="btn">Move to Wishlist</button>
          	
          </div>
            </div>
        
    };
    
    export default CartItem;
    
    