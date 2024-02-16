import './ProductScreen.css';
import { useState, useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

// Action

import { getProductDetails } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const ProductScreen = () => {
	const [qty, setQty] = useState(1);
	const dispatch = useDispatch();
	const productDetails = useSelector(state => state.getProductDetails);

	const { loading, error, product } = productDetails;
	let params = useParams();

	useEffect(() => {
		console.log('product', product);
		dispatch(getProductDetails(params.id));

	}, []); //dispatch, product, match

	const addToCartHandler = () => {
		dispatch(addToCart(product._id, qty));
		//history.push("/cart");
		/*
		Routing in React makes extensive use of the HTML5 History API. 
		*/
	}
	return (
		<div className="productscreen">
			{loading ? (<h2>Loading...</h2>) : error ? (<h2>{error}</h2>) : (
				<>
					<div className="productscreen__left">
						<h3><Link to="/"><i class="fas fa-arrow-left"></i></Link></h3>
						<div className="left__image">
							<img src={product.imageUrl} alt={product.name} />
							<p className="left__name">{product.name}</p>
							{/*<p>Price {product.price}</p>*/}
							<p>{product.description}</p>
						</div>
						<div className="left__info">
							<p className="left__name">{product.name}</p>
							<p className="left__name">Rs - {product.price}</p>

						</div>
					</div>

					<div className="productscreen__right">
						<div className="right__info">
							<p >Price : <span>Rs {product.price}</span></p>
							<p>Status: <span>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</span></p>
							<p>
								Qty
								<select value={qty} onChange={(e) => setQty(e.target.value)}>
									{[...Array(product.countInStock).keys()].map((x) => (
										<option key={x + 1} value={x + 1}>{x + 1}</option>
									))}
								</select>
							</p>
							<p>
								<button type="button" onClick={addToCartHandler}>Add To Cart Now</button>
							</p>
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default ProductScreen;