
    import CartSectStyles from "./CartSect.module.css"


    const CartSect = () => {
      return <div className={CartSectStyles.cartModalCont}>
			<div className="modalBackdrop">
			</div>
			<div className="cartModal">
				<h2 className="cartModalTitle">Order Summary</h2>
					<ul className="cartModalList">
						<li data-id="0" className="cartModalItem">
					<div className="cartModalItemTop">
							<div className="cartModalImg">
							
						</div>
						<div className="cartModalDetails">
							<div className="cartModalDetailsTop">
								<h3>Test of sommm</h3>
								<button className="cartModalDetailsTopDelete">D</button>
							</div>
							
							<div className="cartModalDetailsDesc">
								<p>Description of something</p>
								<p>
									Monthly Rent: 344/month
								</p>
							</div>
						</div>
					</div>
						<div className="cartModalDetailsControls" id="monthsControl">
								<div className="cartModalDetailsControl">
									<div className="cartModalDetailsControlButton subtract">&#8592;</div> <p className="cartModalDetailsQuantity">3 months</p><div className="cartModalDetailsControlButton add">&#8594;</div>
								</div>
								<div className="cartModalDetailsControl">
									<p>Quantity:</p><button className="cartModalDetailsControlButton subtract">-</button> <p className="cartModalDetailsQuantity">1</p><button className="cartModalDetailsControlButton add">+</button>
								</div>
							</div>
					</li>
				
				
				
				</ul>
				<ul className="cartModalCheckoutInfo">
					<li>
						<p>Duration:</p>
						<p>12 months</p>
					</li>
					<li>
						<p>Monthly Rent:</p>
						<p>123</p>
					</li>
					<li>
						<p>Refundable:</p>
						<p>12 months</p>
					</li>
					<li >
						<p>Subtotal:</p>
						<p>12989</p>
					</li>
					<li>
						<p>Delivery/Pickup:</p>
						<p>Free</p>
					</li>
					<li className="cartModalHighlight">
						<p>Total:</p>
						<p>2513562</p>
					</li>
				</ul>
				<div className="cartModalButtonSection">
									<button className="button checkoutButton">Proceed to checkout</button>
				</div>
			</div>
		</div>
    };
    
    export default CartSect;
    
    