import './HomeScreen.css';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

/*
useSelector() :-
Allows you to extract data from the Redux store state, 
using a selector function.

useDispatch() :-
This hook returns a reference to the dispatch function from the Redux store. 
You may use it to dispatch actions as needed.
*/

import Product from '../components/Product';

//Actions
import { getProducts as listProducts } from '../redux/actions/productActions';

const HomeScreen = () => {
	const dispatch = useDispatch();
	const getProducts = useSelector(state => state.getProducts);
	const { products, loading, error } = getProducts;
	let [searchTerm, setSearchTerm] = useState("");
	//const [search, clearSearch] = useState("")
	useEffect(() => {
		dispatch(listProducts())
	}, []);

	return (
		<div className="homescreen">
			<h2 className="homescreen__title">Latest Product</h2>
			<div className="search_product">
				<input
					className="form-control"
					type="text"
					id="txtProductSearch"
					placeholder="Search.."
					onChange={
						(event) => {
							setSearchTerm(event.target.value)
						}
					}
					onFocus={
						(event) => {
							setSearchTerm(event.target.value = "")
						}
					} />
				{/*<button className="backspace" onClick="" >
			<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-backspace-fill" viewBox="0 0 16 16">
			  <path d="M15.683 3a2 2 0 0 0-2-2h-7.08a2 2 0 0 0-1.519.698L.241 7.35a1 1 0 0 0 0 1.302l4.843 5.65A2 2 0 0 0 6.603 15h7.08a2 2 0 0 0 2-2V3zM5.829 5.854a.5.5 0 1 1 .707-.708l2.147 2.147 2.146-2.147a.5.5 0 1 1 .707.708L9.39 8l2.146 2.146a.5.5 0 0 1-.707.708L8.683 8.707l-2.147 2.147a.5.5 0 0 1-.707-.708L7.976 8 5.829 5.854z"/>
			</svg>
		</button> */}
			</div>
			<div className="hommescreen__products">

				{loading ? (<h2 className="loading">Loading...</h2>) :
					error ? (<h2>{error}</h2>) :
						(products.filter((val) => {
							if (searchTerm == "") {
								return val;
							} else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
								return val;
							}
						}).map((product) => <Product
							key={product._id}
							productId={product._id}
							name={product.name}
							price={product.price}
							description={product.description}
							countInStock={product.countInStock}
							imageUrl={product.imageUrl}
						/>)
						)}
			</div>
		</div>
	);
};

export default HomeScreen;