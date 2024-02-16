//import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './Navbar.css';
const Navbar = ({ click }) => {
	const cart = useSelector(state => state.cart);
	const { cartItems } = cart;
	const getCartCount = () => {
		return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
	}
	return (
		<nav className="navbar">
			<div className="navbar__logo">
				<h2>Shopify</h2>
			</div>

			<ul className="navbar__links">
				<li>
					<Link to="/cart" className="cart__link">
						<i className="fas fa-shopping-cart"></i>
						<span>
							Cart
							<span className="cartlogo___badge">{getCartCount()}</span>
						</span>
					</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;