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

export const homeExample = `import { useEffect } from "react";
import Logo from "./Logo";
import Info from "./Info";
import Alert from "./Alert";

export default function Main(props) {
	useEffect(() => {
		document.title = "Pizza King - Home";
	}, []);

	return (
		<div className="container">
			<Alert />
			<Logo />
			<Info />
		</div>
	);
}
`;

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

export const registrationBackend = `const saltConfig = require("../config/config").saltRounds;
let bcrypt = require("bcrypt");
const User = require("../models/User");

module.exports = function registerUser(req, res, next) {
	let email = req.body.email.toLowerCase().trim();
	let firstName = req.body.firstName;
	let lastName = req.body.lastName;
	let password = req.body.password;
	let emailRegex = new RegExp(/[a-z0-9]+[a-z0-9]*@[a-z0-9]*.\w\w\w/i);
	let nameRegex = new RegExp(/[a-zA-Z]{2,24}/);
	let passRegex = new RegExp(/[\S+]{6,24}/);
	let firstGood = false;
	let lastGood = false;
	let emailGood = false;
	let passGood = false;
	if (!nameRegex.test(firstName)) {
		firstGood = false;
	} else {
		firstGood = true;
	}
	if (!nameRegex.test(lastName)) {
		lastGood = false;
	} else {
		lastGood = true;
	}
	if (!emailRegex.test(email)) {
		emailGood = false;
	} else {
		emailGood = true;
	}
	if (!passRegex.test(password)) {
		passGood = false;
	} else {
		passGood = true;
	}
	if (
		firstGood === false ||
		lastGood === false ||
		emailGood === false ||
		passGood === false
	) {
		res.status(401);
		res.send(JSON.stringify("validation failed"));
		return;
	} else {
		User.find({ email: email }).then((users) => {
			if (users.length > 0) {
				emailGood = false;
				console.log("Email is already in use");
				let error = JSON.stringify("Email is already in use");
				res.send(error);
				return;
			}
			if (emailGood && firstGood && lastGood && passGood) {
				bcrypt.hash(password, saltConfig, function (err, hash) {
					new User({ firstName, lastName, email, password: hash })
						.save()
						.then((createdUser) =>
							res.send(JSON.stringify("success"))
						)
						.catch((err) => {
							console.log(err);
						});
				});
			} else {
				res.status(401);
				res.send(JSON.stringify("validation failed"));
			}
		});
	}
};
`;

export const pastOrders = `import { useCookies } from "react-cookie";
import { useEffect } from "react";
const jwt = require("jsonwebtoken");

export default function PastOrders(props) {
	const [cookies, setCookies] = useCookies();
	let token = cookies.user;
	let user = jwt.decode(token);
	let pastOrders = [];

	useEffect(() => {
		function pastOrdersGetter(id) {
			const url = "http://localhost:9999/api/past-orders";
			let data = JSON.stringify({
				userID: id,
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
		pastOrdersGetter(user.id).then((res) => {
			setCookies("pastOrders", res);
			return;
		});
	}, [user.id, setCookies]);

	if (cookies.pastOrders !== undefined) {
		for (let i = 0; i < cookies.pastOrders.length; i++) {
			pastOrders.push(jwt.decode(cookies.pastOrders[i]));
		}
	}

	return (
		<div>
			<h3>Recent Orders</h3>
			<div className="container">
				{pastOrders.map((order, index) => {
					return (
						<div key={index} className="pastOrders">
							<p>{order.dateTime}</p>
							<table>
								<tbody>
									{order.items.map((item, index2) => {
										return (
											<tr>
												<td	className="item">
													{item.name}
												</td>
												<td	className="price">
													{item.price}
												</td>
											</tr>
										);
									})}
									<tr>
										<td className="item-total">
											<h4>Total w/ tax:</h4>
										</td>
										<td className="item-total">
											<h4>{order.total}</h4>
										</td>
									</tr>
								</tbody>
							</table>
							<button
								onClick={() => {
									setCookies("cart", order.items);
									setCookies(
										"cartCount",
										cookies.cart.length
									);
								}}
							>
								Order Again
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
}
`;

export const pkTxt1 =
  "The Pizza King app was my final project for my Full Stack Developer bootcamp. It was my first React application and the first time I used MongoDB in an application. I hadn't taught myself Bootstrap yet when I made this application, but I did continue to expand my knowledge base with CSS on this project. The backend is a Node.js environment with an Express server.";

export const pkTxt3 =
  "The home and menu pages are the only pages that guest users can access. Since this was my first time using React, I did not know how to transfer state or hoist so the Menu component uses cookies to store the cart data as an array. The cart icon in the navigation bar displays how many items are in the cart using the length of the cart within a useEffect hook inside the Nav component.";

export const pkTxt4 =
  "When the user clicks the Review Order button, they are routed to the login page. If the user does not have an account set up yet, there is a link to the registration page. Both pages are similar in layout and functionality. They have full client-side as well as server-side and database validation. User context is kept using the state. Password hashing and verification is completed using Bcrypt. The user context is then encoded on the backend with JSON Web Token and sent to the frontend as a cookie.";

export const pkTxt5 =
  "When login is completed, the user is routed to the My Account page. On this page, the user can review and remove items from the cart, continue to checkout, or review the past three orders and choose to order them again. There is client-side validation as well as server-side and database validation to ensure empty orders are not placed.";

export const pkTxt6 =
  "Once the order was successfully created, the user will be routed to the Order Placed page. The new order will then show on their My Account page.";

//Video Tutorials

export const vtTxt1 =
  "The Video Tutorials app was my Module 5 project and the focus was on the backend. I created it in a Node.js environment. I used Express for the server and this was my first time using MongoDB for a database. I was given a template to use for this project, but I decided to create the app from scratch in order to grow my knowledge with CSS and HTML. I used Handlebars as the view engine.";

export const vtTxt2 =
  "The app has two Home pages, one for guest users and one for authenticated users. When the user reaches the guest Home page, a query is sent to the database for the tutorials, and the response is sorted by subscribed users. The top three tutorials are displayed. When the user clicks a tutorial, they are routed to the Login page.";

export const vtTxt3 =
  "The Login and Registration pages are created similarly, and have client-side as well as server-side and database validation. They use Bcrypt in order to save the password as a hash during registration and to verify the password when logging in. JSON Web Token was used for user information encoding and decoding. The user information is then stored as a cookie.";

export const vtTxt4 = `After logging in, the user is routed to the Home page for authenticated users. This page shows all of the public tutorials sorted by subscribers. The user can click on a tutorial to be brought to the Details page. This page shows the image for the tutorial and has the description. It also has a subscribe button. Once the user is subscribed to the tutorial, the embeded video will load and they will be able to watch the tutorial.`;

export const vtTxt5 = `On the navigation bar when the user is logged in, the user has access to the Profile page. On tthis page, the user's information is displayed as well as each tutorial the user has uploaded. Each tutorial has the ability to be edited or deleted from this page. The user can also choose to create a new tutorial.`;

export const vtTxt6 = `The user also has the ability to use the Search function to look for tutorials. The algorithm searches through the descriptions and titles of the tutorials and users' name and username.`;

export const vtTxt7 = `The Create Tutorial and the Edit Tutorial pages are created similarly, and have client-side as well as server-side validation. The user has the option to make the tutorial public or private. All public tutorials can be see by any user where the private tutorials can only be seen by the user that created it on their Profile page.`;

export const vtExample1 = `const jwt_decode = require("jwt-decode");
const tutorial = require("../models/Tutorial");

module.exports = function (req, res) {
let context = {};
let jwtDetails;
if (req.cookies.user != undefined) {
	let jwtToken = req.cookies.user;
	jwtDetails = jwt_decode(jwtToken);
	context.loggedIn = true;
	context.firstName = jwtDetails.firstName;
}

tutorial.find({}).then((tutorials) => {
	let tutorialArray = tutorials.map((tutorial) => {
		let subTutorial = {
			id: tutorial._id,
			title: tutorial.title,
			description: tutorial.description,
			createDate: tutorial.creationDate,
			users: tutorial.users,
			imageURL: tutorial.imageURL,
			isPublic: tutorial.isPublic,
		};

		return subTutorial;
	});
	tutorialArray = tutorialArray.sort(
		(a, b) => b.users.length - a.users.length
	);
	let publicTutorials = [];
	for (let tutorial of tutorialArray) {
		if (tutorial.isPublic == "on") {
			publicTutorials.push(tutorial);
		}
	}
	(context.tutorial1title = publicTutorials[0].title),
		(context.tutorial1pic = publicTutorials[0].imageURL),
		(context.tutorial2title = publicTutorials[1].title),
		(context.tutorial2pic = publicTutorials[1].imageURL),
		(context.tutorial3title = publicTutorials[2].title),
		(context.tutorial3pic = publicTutorials[2].imageURL),
		(context.tutorials = publicTutorials),
		res.render("index", context);
});
};`;

export const vtExample2 = `<div class="container">
	<main>
		<div id="indexMain" class="indexMain">
			<img src="../static/images/logo.png" />
			<div class="container">
				<h2>Video Tutorials</h2>
				<p>Start Self-Study Today:</p>
				<p id="lastP">
					It'll Change Your Life
				</p>
			</div>
		</div>
		{{#if loggedIn}}
			<div class="container">
				<h3>Tutorials</h3>
				{{#each tutorials}}
					<div id="{{_id}}" class="courses">
						<a href="/details/{{id}}">
							<img src="{{imageURL}}" />
							<h4>{{title}}</h4>
						</a>
					</div>
				{{else}}
					<h2>No Tutorials...</h2>
				{{/each}}
			</div>
		{{else}}
			<h3>Top Tutorials</h3>
			{{#if existing}}
				<div class="container">
					<div class="courses">
						<a href="/login">
							<img src="{{tutorial1pic}}" />
							<h4>{{tutorial1title}}</h4>
						</a>
					</div>
					<div class="courses">
						<a href="/login">
							<img src="{{tutorial2pic}}" />
							<h4>{{tutorial2title}}</h4>
						</a>
					</div>
					<div class="courses">
						<a href="/login">
							<img src="{{tutorial3pic}}" />
							<h4>{{tutorial3title}}</h4>
						</a>
					</div>
				</div>
			{{/if}}
		{{/if}}
	</main>
</div>`;

export const vtExample3 = `const user = require("../models/User");
const saltConfig = require("../config/config").saltRounds;
let bcrypt = require("bcrypt");

module.exports = function (req, res) {
	let username = req.body.username.toLowerCase();
	let firstName = req.body.firstName;
	let lastName = req.body.lastName;
	let pass = req.body.password;
	let rePass = req.body.passwordRep;
	let context = {};
	context.username = username;
	context.firstName = firstName;
	context.lastName = lastName;
	let userRegex = new RegExp(/[A-z]{1}[A-z0-9_]{4,24}/);
	let nameRegex = new RegExp(/[a-zA-Z]{2,24}/);
	let passRegex = new RegExp(/[\S+]{6,24}/);
	let firstGood = false;
	let lastGood = false;
	let userGood = false;
	let passGood = false;
	let passRepGood = false;

	if (!nameRegex.test(firstName)) {
		context.fnError = "fnError";
		context.fnMessage = "First name must be at least 2 characters";
		firstGood = false;
	} else {
		context.fnError = "";
		firstGood = true;
	}
	if (!nameRegex.test(lastName)) {
		context.lnError = "lnError";
		context.lnMessage = "Last name must be at least 2 characters";
		lastGood = false;
	} else {
		context.lnError = "";
		lastGood = true;
	}
	if (!userRegex.test(username)) {
		context.usernameError = "usernameError";
		context.userMessage = "Username must be at least 5 characters";
		userGood = false;
	} else {
		context.usernameError = "";
		userGood = true;
	}
	if (!passRegex.test(pass)) {
		context.passError = "passError";
		context.passMessage = "Password must be at least 6 characters";
		passGood = false;
	} else {
		context.passError = "";
		passGood = true;
	}
	if (rePass !== pass) {
		context.passRepError = "passRepError";
		context.passRepMessage = "Passwords do not match";
		passRepGood = false;
	} else {
		context.passRepError = "";
		passRepGood = true;
	}
	if (
		firstGood == false ||
		lastGood == false ||
		userGood == false ||
		passGood == false ||
		passRepGood == false
	) {
		res.render("registration", context);
	} else {
		user.find({ username: username }).then((users) => {
			if (users.length > 0) {
				context.usernameError = "usernameError";
				context.userMessage = "Username is unavailable";
				userGood = false;
				return res.render("registration", context);
			}
			if (userGood) {
				bcrypt.genSalt(saltConfig, (err, salt) => {
					bcrypt.hash(pass, salt, (err, hash) => {
						new user({
							firstName: firstName,
							lastName: lastName,
							username: username,
							password: hash,
						})
							.save()
							.then((user) => {
								res.status(201);
								res.cookie("status", {
									type: "success",
									message: "User created successfully",
								});
								context.type = "success";
								context.message =
									"User created successfully... Please sign in";
								res.redirect("login");
							})
							.catch((err) => {
								console.log(err);
							});
					});
				});
			}
		});
	}
};
`;

export const vtExample4 = `<div class="container">
	<form method="POST" action="/registration">
		<h3>Sign up</h3>
		<p class="{{fnError}}">{{fnMessage}}</p>
		<input
			name="firstName"
			placeholder="First name"
			value="{{firstName}}"
		/>
		<p class="{{lnError}}">{{lnMessage}}</p>
		<input name="lastName" placeholder="Last name" value="{{lastName}}" />
		<p class="{{usernameError}}">{{userMessage}}</p>
		<input
			name="username"
			placeholder="Create a username"
			value="{{username}}"
		/>
		<p class="{{passError}}">{{passMessage}}</p>
		<input
			name="password"
			type="password"
			placeholder="Create a password"
		/>
		<p class="{{passRepError}}">{{passRepMessage}}</p>
		<input
			name="passwordRep"
			type="password"
			placeholder="Repeat password"
		/>
		<button id="regButton">Submit</button>
	</form>
</div>`;

export const vtExample5 = `const jwt_decode = require("jwt-decode");
const tutorial = require("../models/Tutorial");

module.exports = function (req, res) {
	let context = {};
	let jwtDetails;
	let loggedIn;
	if (req.cookies.user != undefined) {
		let jwtToken = req.cookies.user;
		jwtDetails = jwt_decode(jwtToken);
		loggedIn = true;
	}
	let id = req.params.id;
	tutorial.findById(id).then((tutorial) => {
		let date = tutorial.creationDate;
		date = date.split(" ");
		tutorial.creationDate = date[1] + ' ' + date[2] + ' ' + date[3];
		if (tutorial.users.indexOf(jwtDetails.username) > -1) {
			context.subscribed = true;
		}
		let videoURL = tutorial.videoURL;
		videoCodeArray = videoURL.split(".be");
		videoCodeArray[0] = "https://youtube.com/embed";
		videoCode = videoCodeArray.join("");
		context.firstName = jwtDetails.firstName;
		context.loggedIn = loggedIn;
		context.id = tutorial._id;
		context.title = tutorial.title;
		context.description = tutorial.description;
		context.imageURL = tutorial.imageURL;
		context.creationDate = tutorial.creationDate;
		context.createdBy = tutorial.createdBy;
		context.videoCode = videoCode;
		res.render("details", context);
	});
};
`;

export const vtExample6 = `<div class="details">
	<h3>{{title}}</h3>
	<div>
		<div>
			<img src="{{imageURL}}" />
		</div>
		<div class="subForm">
			{{#if subscribed}}
				<span class="subscribed">Subscribed</span>
			{{else}}
				<div class="container">
					<form method="post" action="/details/{{id}}/subscribed">
						<button class="subscribe">Click to Subscribe</button>
					</form>
				</div>
			{{/if}}
		</div>
		<h2>Details</h2>
		<p>{{description}}</p>
		<br />
		{{#if subscribed}}
			<iframe
				width="560"
				height="315"
				src="{{videoCode}}"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		{{/if}}
		<p class="addedby">Added by {{createdBy}} on {{creationDate}}</p>
	</div>
</div>`;

export const vtExample7 = `const jwt_decode = require("jwt-decode");
const tutorial = require("../models/Tutorial");

module.exports = function (req, res) {
	let context = {};
	let jwtDetails;
	if (req.cookies.user != undefined) {
		let jwtToken = req.cookies.user;
		jwtDetails = jwt_decode(jwtToken);
		context.loggedIn = true;
		context.firstName = jwtDetails.firstName;
		context.lastName = jwtDetails.lastName;
		context.username = jwtDetails.username;
	}
	tutorial.find({}).then((tutorials) => {
		let tutorialArray = tutorials.map((tutorial) => {
			let subTutorial = {
				id: tutorial._id,
				title: tutorial.title,
				description: tutorial.description,
				createDate: tutorial.creationDate,
				users: tutorial.users,
				imageURL: tutorial.imageURL,
				createdBy: tutorial.createdBy,
			};

			return subTutorial;
		});

		tutorialArray = tutorialArray.sort(
			(a, b) => b.users.length - a.users.length
		);
		let userTutorials = [];
		for (let tutorial of tutorialArray) {
			if (tutorial.createdBy == jwtDetails.username) {
				userTutorials.push(tutorial);
			}
		}
		context.tutorials = userTutorials;

		res.render("profile", context);
	});
};
`;

export const vtExample8 = `const jwt_decode = require("jwt-decode");
const tutorial = require("../models/Tutorial");

module.exports = function (req, res) {
	let context = {};
	let jwtDetails;
	if (req.cookies.user != undefined) {
		let jwtToken = req.cookies.user;
		jwtDetails = jwt_decode(jwtToken);
		context.loggedIn = true;
		context.firstName = jwtDetails.firstName;
	}
	if (req.body.search != "") {
		tutorial
			.find({})
			.then((tutorials) => {
				let tutorialArray = tutorials.map((tutorial) => {
					let subTutorial = {
						id: tutorial._id,
						title: tutorial.title,
						description: tutorial.description,
						createDate: tutorial.creationDate,
						users: tutorial.users,
						imageURL: tutorial.imageURL,
						createdBy: tutorial.createdBy,
					};

					return subTutorial;
				});
				let searchResults = [];
				for (let tutorial of tutorialArray) {
					if (tutorial.title.includes(req.body.search)) {
						searchResults.push(tutorial);
					}
				}
				for (let tutorial of tutorialArray) {
					if (
						tutorial.title.includes(
							req.body.search.charAt(0).toUpperCase()
						)
					) {
						searchResults.push(tutorial);
					}
				}
				for (let tutorial of tutorialArray) {
					if (tutorial.description.includes(req.body.search)) {
						searchResults.push(tutorial);
					}
				}
				for (let tutorial of tutorialArray) {
					if (tutorial.createdBy.includes(req.body.search)) {
						searchResults.push(tutorial);
					}
				}
				context.searchResults = searchResults;
				res.render("search", context);
			})
			.catch((err) => {
				console.log(err);
			});
	} else {
		res.cookie("status", {
			type: "failed",
			message: "Empty search",
		});
	}
};
`;

export const vtExample9 = `const jwt_decode = require("jwt-decode");
const tutorial = require("../models/Tutorial");

module.exports = function (req, res) {
	let context = {};
	let jwtDetails;
	if (req.cookies.user != undefined) {
		let jwtToken = req.cookies.user;
		jwtDetails = jwt_decode(jwtToken);
		context.loggedIn = true;
	}
	let fields = req.body;
	console.log(fields);

	context.firstName = jwtDetails.firstName;
	context.id = fields.id;
	context.title = fields.title;
	context.description = fields.description;
	context.imageURL = fields.imageURL;
	context.videoCode = fields.videoCode;
	if (fields.isPublic == undefined) {
		fields.isPublic = "off";
	}
	fields.creationDate = new Date();
	let descriptionRegex = new RegExp(/[\w\W+]{20,}/g);
	let titleRegex = new RegExp(/[a-zA-Z]{4,20}/);
	let imageRegex = new RegExp(/^(http|https):\/\//);
	let videoRegex = new RegExp(/^(https):\/\/youtu\.be/);
	let titleGood = false;
	let descriptionGood = false;
	let imageGood = false;
	let videoGood = false;

	if (!titleRegex.test(fields.title)) {
		context.titleError = "titleError";
		context.titleMessage = "Title must be 4 to 20 characters";
		titleGood = false;
	} else {
		context.titleError = "";
		titleGood = true;
	}
	if (!descriptionRegex.test(fields.description)) {
		context.descriptionError = "descriptionError";
		context.descriptionMessage = "Description must be 20 characters long";
		titleGood = false;
	} else {
		context.descriptionError = "";
		descriptionGood = true;
	}
	if (!imageRegex.test(fields.imageURL)) {
		context.imageError = "imageError";
		context.imageMessage = "Image URL must begin with http:// or https://";
		imageGood = false;
	} else {
		context.imageError = "";
		imageGood = true;
	}
	if (!videoRegex.test(fields.videoCode)) {
		context.videoError = "videoError";
		context.videoMessage = "Video URL must begin with https://youtu.be";
		videoGood = false;
	} else {
		context.imageError = "";
		videoGood = true;
	}
	if (
		titleGood == false ||
		descriptionGood == false ||
		imageGood == false ||
		videoGood == false
	) {
		res.render("createTutorial", context);
	} else {
		new tutorial({
			title: fields.title,
			imageURL: fields.imageURL,
			videoURL: fields.videoCode,
			description: fields.description,
			isPublic: fields.isPublic,
			creationDate: fields.creationDate,
			createdBy: jwtDetails.username,
		})
			.save()
			.then((tutorial) => {
				res.status(201);
				res.cookie("status", {
					type: "success",
					message: "Tutorial created successfully",
				});
				res.redirect("/");
			})
			.catch((err) => {
				console.log(err);
			});
	}
};`;

export const vtExample10 = `<div class="container">
	<form method="POST" action="/create-tutorial">
		<h3>Create a Tutorial</h3>
		<p class="{{titleError}}">{{titleMessage}}</p>
		<input name="title" placeholder="Title" value="{{title}}" />
		<p class="{{descriptionError}}">{{descriptionMessage}}</p>
		<input
			name="description"
			placeholder="Description"
			value="{{description}}"
		/>
		<p class="{{imageError}}">{{imageMessage}}</p>
		<input name="imageURL" placeholder="Image URL" value="{{imageURL}}" />
		<p class="{{videoError}}">{{videoMessage}}</p>
		<input name="videoCode" placeholder="Video URL" value="{{videoCode}}" />
		<div class="create">
			<input name="isPublic" type="checkbox" checked="true" />
			<span>Create tutorial as public?</span>
		</div>

		<button id="regButton">Submit</button>
	</form>
</div>`;

//CookUni
export const cuTxt1 = `The CookUni app was my module 4 project and also my first project as a developer. It's focus was the on the frontend and showing an understanding of REST and CRUD. My school provided a template to use for this project since our main focus was on JavaScript, but I decided to build it from scratch to give myself an opportunity to really play around with CSS and HTML for the first time as well. I used, Sammy.js for the routing, Webpack for the server, Handlebars for the view engine, and Firebase Realtime database.`;

export const cuTxt2 = `When the user reaches the Recipes page, a querry is sent to the Firebase Realtime Database and receives the array of recepies. The map function is used to restructure the array and then it is added to the page's context. It is then displayed using the Handlebars #each function with the template I designed.`;

export const cuTxt3 = `When the user reaches the Details page, the request for the recepie is sent to the database and it is received as an object. It is then destructured by name, description, image, and ingredients and then they are added to the page's context. Then everything is displayed using the template. The ingredients are in an array and they are displayed in a list using the Handlebars #each function.`;

export const cuTxt4 = `I created the Registration and Sign In pages are created similarly. The were my my first time creating validation for forms. In projects I completed later, I go deeper into validation and sanitization. For this project I only used simple REGEX for the validation. Each line is checked by character type and length. Each section of the form has it's own error message available. Upon successful registration, the user is routed to the sign in page. Once signed in, they are routed to the My Proile page.`;

export const cuTxt5 = `There are two sections in the My Profile page. The first section displays the user's name, username, and has a button to create a new recepie. The second section is titled My Recepies and displays all the recepies the user has uploaded using the Handlebars #each function. This is done by using Javascript's native filter function on the array of recepies to only keep the ones created by the user. A button was added to each recepie to allow them to delete it.`;

export const cuTxt6 = `The Add a Recipe page was developed similarly to the Registration and Sign In pages with it's layout. When the user submits the form, the data is put together within an object, and then it is sent in a post request to the database. I did not add any validation or sanitization to this part of the project do to time limitations, but a full check of all of the incoming data would be ideal for this kind of form.
`;

export const cuExample1 = `this.get("#/home", function (context) {
	if (user.firstName != "") {
		context.loggedIn = true;
	} else {
		context.loggedIn = false;
	}
	context.user = user;

	context
		.loadPartials({
			header: "../views/header.hbs",
			footer: "../views/footer.hbs",
		})
		.then(function () {
			this.partial("../views/home.hbs");
		});
});`;

export const cuExample2 = `{{>header}}
<section class="homeMain">
	<div>
		<img id="homeImg" src="images/bmk-img.png" />
		<h2>Cooking University</h2>
		<p>
		 They say food passes through the stomach, we say that food passes through CookUni...
		</p>
		<a 
		 href="#/recipes"><button id="showRecipes">SEE OUR RECIPES</button>
		</a>
	</div>
</section>
{{>footer}}`;

export const cuExample3 = `{{>header}}
<div class="container">
	{{#each recipes}}
		<div id="{{id}}" class="recipes">
			<h2>{{name}}</h2>
			<img src="{{imageURL}}" />
			<a href="#/details/{{id}}"><button>DETAILS</button></a>
		</div>
	{{/each}}
</div>
{{>footer}}`;

export const cuExample4 = `this.get("#/recipes", function (context) {
	fetch("https://cookuni96-default-rtdb.firebaseio.com/recipes.json")
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			let recipesArray = Object.entries(data);

			recipesArray = recipesArray.map(function (innerArray) {
				let [recipesID, recipesObject] = innerArray;
				recipesObject.id = recipesID;
				return recipesObject;
			});
			context.recipes = recipesArray;
			if (user.firstName != "") {
				context.loggedIn = true;
			} else {
				context.loggedIn = false;
			}
			context.user = user;

			context
				.loadPartials({
					header: "../views/header.hbs",
					footer: "../views/footer.hbs",
				})
				.then(function () {
					this.partial("../views/recipes.hbs");
				});
		})
		.catch((err) => {
			console.error(err);
		});
});`;

export const cuExample5 = `this.get("#/details/:id", function (context) {
		let recipeID = this.params.id;
		fetch(
			"https://cookuni96-default-rtdb.firebaseio.com/recipes/" + recipeID + ".json"
		)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				let recipe = data;
				context.recipe = recipe;

				if (user.firstName != "") {
					context.loggedIn = true;
				} else {
					context.loggedIn = false;
				}
				context.user = user;

				context.name = recipe.name;
				context.description = recipe.description;
				context.imageURL = recipe.imageURL;
				context.ingredients = recipe.ingredients;
				context
					.loadPartials({
						header: "../views/header.hbs",
						footer: "../views/footer.hbs",
					})
					.then(function () {
						this.partial("../views/details.hbs");
					});
			})
			.catch((err) => {
				console.error(err);
			});
});`;

export const cuExample6 = `{{>header}}
<div id="details">
	<div class="container">
		<h2>{{name}}</h2>
		<div>
			<img id="detailsImage" src="{{imageURL}}" />
		</div>
		<div class="ingredients">
			<div>
				<h3>Ingredients</h3>
				<ul>
					{{#each ingredients}}
						<li>{{this}}</li>
					{{/each}}
				</ul>
			</div>
			<br />
			<div>
				<h3>Instructions</h3>
				<p>{{description}}</p>
			</div>
		</div>
	</div>
</div>
{{>footer}}`;

export const cuExample7 = `this.post("#/register", function (context) {
		let userRegex = new RegExp(/[A-z]{1}[A-z0-9_]{2,24}/);
		let nameRegex = new RegExp(/[a-zA-Z]{2,24}/);
		let passRegex = new RegExp(/[\S+]{6,24}/);
		let firstName = document.getElementById("regFirst");
		let lastName = document.getElementById("regLast");
		let user = document.getElementById("regUser");
		let pass = document.getElementById("regPass");
		let passRep = document.getElementById("regPassRep");
		let firstGood = false;
		let lastGood = false;
		let userGood = false;
		let passGood = false;
		let passRepGood = false;

		if (nameRegex.test(firstName.value) == false) {
			let fnError = document.getElementById("fnError");
			fnError.style.display = "block";
		} else {
			let fnError = document.getElementById("fnError");
			fnError.style.display = "none";
			firstGood = true;
		}

		if (nameRegex.test(lastName.value) == false) {
			let lnError = document.getElementById("lnError");
			lnError.style.display = "block";
		} else {
			let lnError = document.getElementById("lnError");
			lnError.style.display = "none";
			lastGood = true;
		}

		if (userRegex.test(user.value) == false) {
			let usernameError = document.getElementById("usernameError");
			usernameError.style.display = "block";
		} else {
			let usernameError = document.getElementById("usernameError");
			usernameError.style.display = "none";
			userGood = true;
		}

		if (passRegex.test(pass.value) == false) {
			let passError = document.getElementById("passError");
			passError.style.display = "block";
		} else {
			let passError = document.getElementById("passError");
			passError.style.display = "none";
			passGood = true;
		}
		if (passRep.value !== pass.value) {
			let passRep = document.getElementById("passRepError");
			passRep.style.display = "block";
		} else {
			let passRep = document.getElementById("passRepError");
			passRep.style.display = "none";
			passRepGood = true;
		}

		let data = {
			firstName: this.params.regFirst,
			lastName: this.params.regLast,
			username: this.params.regUser,
			password: this.params.regPass,
		};
		let url = "https://cookuni96-default-rtdb.firebaseio.com/users.json";
		let headers = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
		if (firstGood && lastGood && userGood && passGood && passRepGood) {
			fetch(url, headers)
				.then(function (response) {
					if (response.status == 200) {
						user.firstName = data.firstName;
						user.lastName = data.lastName;
						user.username = data.username;
						login = true;
						let message = document.getElementById("alertMessage");
						message.innerHTML = "Welcome + user.firstName + ", you are registered!";
						let alert = document.getElementById("alert");
						alert.style.display = "block";
						window.location.hash = "#/profile";
					} else {
						console.error(response.status);
					}
				})
				.catch((error) => {
					console.error(error);
				});
		}
});`;

export const cuExample8 = `{{>header}}
<section class="homeMain">
	<form method="POST" action="#/register">
		<h3>Sign up</h3>
		<p id="fnError">First name must be at least 2 characters</p>
		<input name="regFirst" id="regFirst" placeholder="First name" />
		<p id="lnError">Last name must be at least 2 characters</p>
		<input name="regLast" id="regLast" placeholder="Last name" />
		<p id="usernameError">Username must be at least 3 characters</p>
		<input name="regUser" id="regUser" placeholder="Create a username" />
		<p id="passError">Password must be at least 6 characters</p>
		<input name="regPass" type="password" id="regPass" placeholder="Create a password" />
		<p id="passRepError">Passwords do not match</p>
		<input name="regPassRep" type="password" id="regPassRep" placeholder="Repeat password" />
		<button id="regButton">Submit</button>
	</form>
</section>
{{>footer}}`;

export const cuExample9 = `this.post("#/create", function (context) {
		let data = {
			name: this.params.name,
			imageURL: this.params.imageURL,
			description: this.params.description,
			ingredients: this.params.ingredients,
			user: this.params.user,
		};
		let url = "https://cookuni96-default-rtdb.firebaseio.com/recipes.json";
		let headers = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		};
		if (
			data.name !== "" &&
			data.imageURL !== "" &&
			data.description !== "" &&
			data.ingredients !== ""
		) {
			fetch(url, headers)
				.then(function (response) {
					if (response.status == 200) {
						window.location.hash = "#/profile";
						let message = document.getElementById("alertMessage");
						message.innerHTML = "Recipe Created!";
						let alert = document.getElementById("alert");
						alert.style.display = "block";
					} else {
						console.error(response.status);
					}
				})
				.catch((error) => {
					console.error(error);
				});
		} else {
			console.error("Form Incomplete");
		}
});`;

export const cuExample10 = `{{>header}}
<section class="homeMain">
	<form method="post" action="#/create" id="createForm">
		<h3>Add a Recipe</h3>
		<input name="user" value={{user.username}} style="display: none"/>
		<input name="name" id="dishName" placeholder="Dish Name" />
		<input name="imageURL" id="createImageURL" placeholder="Enter Image URL" />
		<input name="description" id="createDescrition" placeholder="Enter Cooking Instructions" />
        <area id="createIngredients">
            <input name="ingredients" id="regPass" placeholder="Enter Ingredients" />
        </area>
		<button id="regButton">Submit</button>
	</form>
</section>
{{>footer}}`;

export const cuExample11 = `this.get("#/profile", function (context) {
		if (user.firstName == "") {
			context.redirect("#/login");
		} else {
			context.loggedIn = login;
			fetch("https://cookuni96-default-rtdb.firebaseio.com/recipes.json")
				.then(function (response) {
					return response.json();
				})
				.then(function (data) {
					let recipesArray = Object.entries(data);
					recipesArray = recipesArray
						.map(function (innerArray) {
							let [recipeID, recipeObject] = innerArray;
							recipeObject.id = recipeID;
							return recipeObject;
						})
						.filter(function (recipe) {
							return user.username == recipe.user;
						});
					context.recipes = recipesArray;
					context.firstName = user.firstName;
					context.lastName = user.lastName;
					context.username = user.username;
					if (user.firstName != "") {
						context.loggedIn = true;
					} else {
						context.loggedIn = false;
					}
					context.user = user;

					context
						.loadPartials({
							header: "../views/header.hbs",
							footer: "../views/footer.hbs",
						})
						.then(function () {
							this.partial("../views/profile.hbs");
						});
				});
		}
});`;

export const cuExample12 = `{{>header}}
<section class="profile">
	<h2>My Profile</h2>
	<div>
		<h3>Name</h3>
		<p>{{firstName}} {{lastName}}</p>
		<h3>Username</h3>
		<p>{{username}}</p>
		<a href="#/create"><button>NEW RECIPE</button></a>
	</div>
</section>

<h2 style="text-align: center;">My Recipes</h2>
<div class="container">
	{{#each recipes}}
		<div id="{{id}}" class="recipes">
			<h2>{{name}}</h2>
			<img src="{{imageURL}}" />
			<a href="#/delete/{{id}}"><button>DELETE</button></a>
		</div>
	{{else}}
		<div class="container">
			<h4 style="width:100%">No recipes to show...</h4>
			<img style="width:250px" src="../images/404.jpg" />
		</div>
	{{/each}}
</div>
{{>footer}}`;
