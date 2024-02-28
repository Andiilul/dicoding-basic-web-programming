// Change the navbar color if scrolled in certain value by change it's class
window.addEventListener("scroll", function () {
	const element = document.getElementById("navbar");
	const scrollPosition = window.scrollY;
	if (scrollPosition > 200) {
		element.classList.remove("nav-grad");
		element.classList.add("nav-color");
	} else {
		element.classList.remove("nav-color");
		element.classList.add("nav-grad");
	}
});

// render Recipe Obbjects
const Recipes = [
	{ name: "Gudeg" },
	{ name: "Pancake" },
	{ name: "Risoles Mayo" },
	{ name: "Pasta" },
];

const cardsContainer = document.getElementById("cards-container");

Recipes.forEach((recipe) => {
	const card = document.createElement("div");
	card.classList.add("card-ctr");

	card.innerHTML = `
		<div class="card-content">
			<div class="top">
				<button type="button">
					<div class="heart">&#10084;</div>
					<div>Like</div>
				</button>
			</div>
			<section class="bottom">
				<div class="card-information">
					<div>${recipe.name}</div>
				</div>
				<button type="button" class="card-detail">
					<div>More Detail</div>
					<div class="arrow">&#8964;</div>
				</button>
			</section>
		</div>
	`;
	cardsContainer.appendChild(card);
});

// Function to toggle the visibility of the menu
document.addEventListener("DOMContentLoaded", function () {
	const menuButton = document.getElementById("menu");
	const closeButtons = document.querySelectorAll(".close");
	const navMenu = document.querySelector(".navmenu-hide");

	menuButton.addEventListener("click", function () {
			navMenu.classList.remove("navmenu-hide");
			navMenu.classList.toggle("navmenu-mobile");

			console.log("Hei");
	});

	closeButtons.forEach(function (button) {
			button.addEventListener("click", function () {
					navMenu.classList.remove("navmenu-mobile");
					navMenu.classList.add("navmenu-hide");
					console.log("Hoi");
			});
	});
});


// function to scroll
document.addEventListener("DOMContentLoaded", function() {
	const homeLinks = document.querySelectorAll(".scroll-to-home");
	const recipeLinks = document.querySelectorAll(".scroll-to-recipe");
	const aboutUsLinks = document.querySelectorAll(".scroll-to-about-us");

	homeLinks.forEach(function(link) {
			link.addEventListener("click", function(event) {
					event.preventDefault();
					scrollToElement("#home");
			});
	});

	recipeLinks.forEach(function(link) {
			link.addEventListener("click", function(event) {
					event.preventDefault();
					scrollToElement("#recipes");
			});
	});

	aboutUsLinks.forEach(function(link) {
			link.addEventListener("click", function(event) {
					event.preventDefault();
					scrollToElement("#about-us");
			});
	});

	function scrollToElement(selector) {
			const targetElement = document.querySelector(selector);
			if (targetElement) {
					const y = targetElement.getBoundingClientRect().top + window.pageYOffset;
					window.scrollTo({top: y, behavior: 'smooth'});
			}
	}
});
