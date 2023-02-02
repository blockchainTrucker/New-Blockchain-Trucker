//Pizza King

export const menuExample = `import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

export default function Menu(props) {
	const [cookies, setCookies] = useCookies();
	let cart = [];

	useEffect(() => {
		document.title = "Pizza King - Menu";
	}, []);

	return (
		<div className="container">
			<div className="menu">
				<h2>Appetizers</h2>
				<div className="menu-item">
					<table>
						<tbody>
							<tr>
								<td className="item">Mozzarella Sticks</td>
								<td className="price">$7.99</td>
								<td className="add-button">
									<button
										onClick={() => {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let mozz = {
												name: "Mozzarella Sticks",
												price: 7.99,
											};
											cart.push(mozz);
											setCookies("cart", cart);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Wings</td>
								<td className="price">$9.99</td>
								<td className="add-button">
									<button
										onClick={() => {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let wings = {
												name: "Wings",
												price: 9.99,
											};
											cart.push(wings);
											setCookies("cart", cart);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Fried Calamari</td>
								<td className="price">$9.99</td>
								<td className="add-button">
									<button
										onClick={() => {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let calamari = {
												name: "Calamari",
												price: 9.99,
											};
											cart.push(calamari);
											setCookies("cart", cart);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<h2>Pizza</h2>
				<div className="menu-item">
					<table>
						<tbody>
							<tr>
								<td className="item">Cheese Pizza</td>
								<td className="price">$9.99</td>
								<td className="add-button">
									<button
										onClick={() => {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let cheese = {
												name: "Cheese Pizza",
												price: 9.99,
											};
											cart.push(cheese);
											setCookies("cart", cart);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Pepperoni Pizza</td>
								<td className="price">$11.99</td>
								<td className="add-button">
									<button
										onClick={() => {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let pepperoni = {
												name: "Pepperoni Pizza",
												price: 11.99,
											};
											cart.push(pepperoni);
											setCookies("cart", cart);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Supreme Pizza</td>
								<td className="price">$14.99</td>
								<td className="add-button">
									<button
										onClick={() => {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let supreme = {
												name: "Supreme Pizza",
												price: 14.99,
											};
											cart.push(supreme);
											setCookies("cart", cart);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<h2>Not Pizza</h2>
				<div className="menu-item">
					<table>
						<tbody>
							<tr>
								<td className="item">Fettuccine Alfredo</td>
								<td className="price">$12.99</td>
								<td className="add-button">
									<button
										onClick={() => {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let alfredo = {
												name: "Fettuccine Alfredo",
												price: 12.99,
											};
											cart.push(alfredo);
											setCookies("cart", cart);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Lasagna</td>
								<td className="price">$11.99</td>
								<td className="add-button">
									<button
										onClick={() => {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let lasagna = {
												name: "Lasagne",
												price: 11.99,
											};
											cart.push(lasagna);
											setCookies("cart", cart);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
						<tbody>
							<tr>
								<td className="item">Stuffed Shells</td>
								<td className="price">$14.99</td>
								<td className="add-button">
									<button
										onClick={() => {
											cart = cookies.cart;
											if (cart === undefined) {
												cart = [];
											}
											let shells = {
												name: "Stuffed Shells",
												price: 14.99,
											};
											cart.push(shells);
											setCookies("cart", cart);
										}}
									>
										Add
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<div className="review">
					<Link to="/my-cart">
						<button>Review Order</button>
					</Link>
				</div>
			</div>
		</div>
	);
}`;

export const cartExample = `import { useCookies } from "react-cookie";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const jwt = require("jsonwebtoken");

export default function Cart(props) {
	const [error, setError] = useState();
	const [cartEmpty, setCartEmpty] = useState();
	const [cookies, setCookies] = useCookies();
	const navigate = useNavigate();
	let cart = cookies.cart;
	let total = 0;
	let user = jwt.decode(cookies.user);

	if (cart !== undefined) {
		for (let i = 0; i < cart.length; i++) {
			total = total + cart[i].price;
		}
	} else {
		cart = [];
	}

	useEffect(() => {
		if (cart.length === 0) {
			setCartEmpty("Cart is empty...");
		}
	}, [cart.length]);

	function submitHandler(event) {
		event.preventDefault();
		if (cart.length > 0) {
			let totWtax = (total * 1.053).toFixed(2);
			const url = "http://localhost:9999/api/new-order";
			let data = JSON.stringify({
				items: cart,
				total: totWtax,
				userID: user.id,
			});
			let resources = {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: data,
			};
			fetch(url, resources).then((res) => {
				if (res === "error") {
					setError("Something went wrong, please try again");
				} else {
					setCookies("cart", []);
					navigate("/order-placed");
				}
			});
		} else {
			setError("Cart is empty");
		}
	}

	return (
		<div className="shopping-cart">
			<h3>My Cart</h3>
			<span className="error-message">{error}</span>
			<h4 className="order-name">{"Order for " + user.firstName + " " + user.lastName}</h4>
			<div className="container">
				<table>
					<tbody>
						<tr>
							<td>
								<p>{cartEmpty}</p>
							</td>
						</tr>
						{cart.map((item, index) => {
							return (
								<tr key={index}>
									<td key={index + "name"} className="item">
										{item.name}
									</td>
									<td key={index.price} className="price">
										{"$" + item.price}
									</td>
									<td>
										<button
											key={index + "button"}
											className="remove-button"
											onClick={() => {
												let index = cart.indexOf(item);
												cart.splice(index, 1);
												setCookies("cart", cart);
											}}
										>
											-
										</button>
									</td>
								</tr>
							);
						})}
						<tr className="item">
							<td className="item-total">
								<h4>Total with tax:</h4>
							</td>
							<td className="item-total">
								<h4>{(total * 1.053).toFixed(2)}</h4>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="checkout">
				<form onSubmit={submitHandler}>
					<button type="submit">Checkout</button>
				</form>
			</div>
		</div>
	);
}`;
export const registrationExample = `import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function Registration(props) {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [password, setPassword] = useState("");
	const [repPassword, setRepPassword] = useState("");
	const [error, setError] = useState();

	useEffect(() => {
		document.title = "Pizza King - Registration";
	}, []);

	function registerUser(firstName, lastName, email, password) {
		const url = "http://localhost:9999/api/users/register";
		let data = JSON.stringify({
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
		});
		let resources = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: data,
		};
		return fetch(url, resources).then((res) => res.json());
	}

	function submitHandler(event) {
		event.preventDefault();
		let passRegex = new RegExp(/[\S+]{6,24}/);
		let nameRegex = new RegExp(/[a-zA-Z]{2,24}/);
		let emailRegex = new RegExp(/[a-z0-9]+[a-z0-9]*@[a-z0-9]*.\w\w\w/i);

		if (!nameRegex.test(firstName)) {
			setError("Enter First Name");
			return;
		} else if (!nameRegex.test(lastName)) {
			setError("Enter Last Name");
			return;
		} else if (!emailRegex.test(email)) {
			setError("Please Enter Valid Email");
			return;
		} else if (!passRegex.test(password)) {
			setError("Password Must Be at Least 6 Characters");
			return;
		} else if (password !== repPassword) {
			setError("Passwords Do Not Match");
			return;
		}

		registerUser(firstName, lastName, email, password).then((res) => {
			if (res === "Email is already in use") {
				setError("Email Already Exists, Please Login");
				return;
			} else if (res === "success") {
				navigate("/login");
				document.getElementById("alert").style.display = "block";
				document.getElementById(
					"alertMessage"
				).innerText = "You have successfully registered, please sign in.";
			}
		});
	}

	return (
		<div className="container">
			<form className="regForm" onSubmit={submitHandler}>
				<h3>Create an Account</h3>
				<p className="error-message">{error}</p>
				<input
					name="firstName"
					type="text"
					placeholder="First Name"
					onChange={(e) => {
						setFirstName(e.target.value);
					}}
					value={firstName}
				/>
				<input
					name="lastName"
					type="text"
					placeholder="Last Name"
					onChange={(e) => {
						setLastName(e.target.value);
					}}
					value={lastName}
				/>
				<input
					name="email"
					type="text"
					placeholder="Email Address"
					onChange={(e) => {
						setEmail(e.target.value.toLowerCase().trim());
					}}
					value={email}
				/>
				<input
					type="password"
					name="password"
					placeholder="  Password"
					onChange={(e) => {
						setPassword(e.target.value);
					}}
					value={password}
				/>
				<input
					type="password"
					name="repPassword"
					placeholder="Repeat Password"
					onChange={(e) => {
						setRepPassword(e.target.value);
					}}
					value={repPassword}
				/>
				<div className="container">
					<button type="submit">Submit</button>
				</div>
				<Link to="/login">Click here to login to existing account</Link>
			</form>
		</div>
	);
}`;

export const pkTxt1 =
	"The Pizza King app was my final project for my Full Stack Developer bootcamp. It was my first React application and the first time I used MongoDB in an application. I hadn't taught myself Bootstrap yet when I made this application, but I did continue to expand my knowledge base with CSS on this project. The backend is a Node.js environment with an Express server.";

export const pkTxt2 =
	'Throughout this example, I will show images of the frontend of the section being discussed as well as the relevant code.';

export const pkTxt3 =
	'The home and menu pages are the only pages that guest users can access. Since this was my first time using React, I did not know how to transfer state or hoist so the Menu component uses cookies to store the cart data as an array. The cart icon in the navigation bar displays how many items are in the cart using the length of the cart.';

export const pkTxt4 =
	'When the user clicks the Review Order button, they are routed to the login page. If the user does not have an account set up yet, there is a link to the registration page. Both pages are similar in layout and functionality. They have full client-side as well as server-side and database validation. User context is kept using the state. Password encryption and validation is completed using Bcrypt. The user context is then encoded on the backend with JSON Web Token and sent to the frontend as a cookie.';

export const pkTxt5 =
	'When login is completed, the user is routed to the My Account page. On this page, the user can review and remove items from the cart, continue to checkout, or review the past three orders and choose to order them again. There is client-side validation as well as server-side and database validation to ensure empty orders are not placed.';

export const pkTxt6 =
	'Once the order was successfully created, the user will be routed to the Order Placed page. The new order will then show on their My Account page.';
