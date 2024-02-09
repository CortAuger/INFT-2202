/*
Name: Cort Auger
Number: 100862580
Course: INFT 2202
Date: 2/9/2024
Description: app.js file for CSS lab 1
 */

// Function to add the "Human Resources" link
function addHRNavLink() {
    // Create new li element
    var newNavItem = document.createElement("li");
    newNavItem.className = "nav-item";
    
    // Create new <a> element
    var newLink = document.createElement("a");
    newLink.className = "nav-link";
    newLink.href = "#";
    newLink.id = "hr-link";
    
    // Create <i> element for the icon
    var iconElement = document.createElement("i");
    iconElement.className = "fas fa-user";
    
    // Append iconElement to newLink
    newLink.appendChild(iconElement);
    
    // Set the text content
    newLink.appendChild(document.createTextNode(" Human Resources"));
    
    // Append newLink to newNavItem
    newNavItem.appendChild(newLink);
    
    // Find navbar
    var navbar = document.querySelector(".navbar-nav");
    
    // Find "Contact Us" li element
    var contactNavItem = document.getElementById("contact-link").parentElement;
    
    // Insert newNavItem before contactNavItem
    navbar.insertBefore(newNavItem, contactNavItem);
}

// Function to inject homepage content
function injectHomeContent() {
    var pageElement = document.getElementById('homepage');
    if (pageElement) {
        pageElement.innerHTML = `
            <br/>
            <h1 id="header">INFT 2202 - Client Side Script</h1>
            <br/>
            <br/>
            <br/>
            <h2>Lab 1 Home Page</h2>
            <h3>Welcome to the home page for Lab 1!</h3>
        `;
    }
}

// Function to inject products/interests page content
function injectProductContent() {
    var pageElement = document.getElementById('productsPage');
    if (pageElement) {
        
        pageElement.innerHTML = `
        <br/>
        <h1 id="header">Interests</h1>
        <br/>
        <p>This is a product page demonstration for INFT 2202 Lab 1.
            This page demonstrates paragraph text, an h1 heading, and some images.
            <br/>
            <br/>
            Here are 3 images of some of my favorite pieces of media:
            <br/>
        </p>
        <div class="image-container">
            <img src="./images/zeldaLogo.png" alt="The Legend of Zelda">
            <nbsp/><nbsp/>
            <img src="./images/dune.jpg" alt="Dune">
            <nbsp/><nbsp/>
            <img src="./images/theoryLogo.jpg" alt="Theory Channels">
        `;
    }
}

// Function to inject services page content
function injectServicesContent() {
    var pageElement = document.getElementById('servicesPage');
    if (pageElement) {
        pageElement.innerHTML = `
        <br/>
            <h1 id="header">Services</h1>
            <br/>
            <p>This is a services page demonstration for INFT 2202 Lab 1.
                This page displays some of my skills and a link to my resume.
                <br/>
                <br/>
            </p>
            <h3>Programming Language Skills Include:</h3>
            <br/>
            
            <div class="image-container">
                <img src="./images/java.png" alt="Java">
                <nbsp/><nbsp/>
                <img src="./images/python.png" alt="Python">
                <nbsp/><nbsp/>
                <img src="./images/javaScript.png" alt="JavaScript">
            </div>
            <br/>
            <br/>
            <h3><a href="./pdfs/resume.pdf">Click to Download My Resume</a></h3>
        `;
    }
}

// Function to inject about us page content
function injectAboutContent() {
    var pageElement = document.getElementById('aboutPage');
    if (pageElement) {
        pageElement.innerHTML = `
        <br/>
            <h1 id="header">About Us</h1>
            <br/>
            <p>This is an about us page demonstration for INFT 2202 Lab 1.
                This page displays some information about me and my cat!.
                <br/>
                <br/>
            </p>
            <h3>The Team:</h3>
            <br/>
            
            <div class="image-container">
                <img src="./images/me.png" alt="Image of me">
                <p>My name is Cort Auger. I am a student at Durham College studying Computer Programming and Analysis. 
                    I am currently in my 4th semester and am planing to transfer to university for Computer Science after graduating.
                    Some of my interests include computers, video games and new/exciting technologies.
                </p>
                <br/>
                <img src="./images/ollie.jpg" alt="Image of Ollie">
                <p>This is my cat Ollie. He is 3 years old and is always very hungry!
                </p>
                <br/><br/><br/><br/><br/><br/>
            </div>
        `;
    }
}

// Function to inject the form page content
function injectContactContent() {
    var pageElement = document.getElementById('contactPage');
    if (pageElement) {
        pageElement.innerHTML = `
        <br/>
        <h1 id="header">Contact Us</h1>
        <br/>
        <p>Please fill out this form to contact us:</p>

		<form id="message-form">
			<!-- form group for name entry -->
			<div class="form-group" id="Name-group">
				<label for="inputName">Name</label>
				<input
					type="text"
					class="form-control"
					id="inputName"
					placeholder="Name"
					required
				/>
				<div class="errorMessage"></div>
			</div>

			<!-- form group for phone number entry -->
			<div class="form-group" id="phone-group">
				<label for="inputPhone">Phone Number</label>
				<input
					type="text"
					class="form-control"
					id="inputPhone"
					placeholder="Phone Number"
					required
				/>
				<div class="errorMessage"></div>
			</div>

			<!-- form group for email entry -->
                <div class="form-group" id="email-group">
					<label for="inputEmail">Email</label>
					<input
						type="email"
						class="form-control"
						id="inputEmail"
						placeholder="Email"
						required
					/>
					<div class="errorMessage"></div>
				</div>
				
			<!-- form group for message entry -->
		        <div class="form-group" id="message-group">
                    <label for="inputMessage">Message</label>
                    <textarea
                        class="form-control"
                        id="inputMessage"
                        placeholder="Message"
                        required
                    ></textarea>
                    <div class="errorMessage"></div>
                </div>

			<!-- submit button -->
			<button type="submit" class="btn btn-primary" id="btnRegSubmit">
				Submit
			</button>
			<!-- reset button  -->
			<button type="Reset" class="btn btn-primary" id="btnReset">
				Reset
			</button>
		</form>
        `;
    }
}

// Check which page is loaded and inject correct content
if (document.getElementById('homepage')) {
    // Function to inject home page content when the page loads
    window.onload = injectHomeContent;
} 

else if (document.getElementById('productsPage')) {
    // Function to inject products page content when the page loads
    window.onload = injectProductContent;
}

else if (document.getElementById('servicesPage')) {
    // Function to inject services page content when the page loads
    window.onload = injectServicesContent;
}

else if (document.getElementById('aboutPage')) {
    // Function to inject services page content when the page loads
    window.onload = injectAboutContent;
}

else if (document.getElementById('contactPage')) {
    // Function to inject services page content when the page loads
    window.onload = injectContactContent;
}

// Find element id "products-link"
var productsLink = document.getElementById("products-link");
    
// Change the link to "Interests"
productsLink.innerHTML = "Interests";

addHRNavLink();

// Create a new div element to contain the HTML content
var newDiv = document.createElement("div");
newDiv.innerHTML = `
    <nav class="navbar fixed-bottom navbar-dark bg-dark">
        <div class="container-fluid">
            <h5>Copyright 2024, Cort Auger</h5>
        </div>
    </nav>`;

// Find body element
var body = document.querySelector("body");

// Append the nav-bar to bottom
body.appendChild(newDiv);