/*
Name: Cort Auger
Number: 100862580
Course: INFT 2202
Date: 2/23/2024
Description: app.js file for CSS labs
 */

// Inject the top navbar
document.getElementById('topNavbar').innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="./index.html">INFT 2202 Website</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <li id="navIndex" class="nav-item">
            <a id="homepage-link" class="nav-link" href="./index.html">Home <span class="sr-only">(current)</span></a>
        </li>
        <li id="navProducts" class="nav-item">
            <a id="products-link" class="nav-link" href="./products.html">Products</a>
        </li>
        <li id="navServices" class="nav-item">
            <a id="services-link" class="nav-link" href="./services.html">Services</a>
        </li>
        <li id="navAbout" class="nav-item">
            <a id="about-link" class="nav-link" href="./about.html">About Us</a>
        </li>
        <li id="navContact" class="nav-item">
            <a id="contact-link" class="nav-link" href="./contact.html">Contact Us</a>
        </li>
    </ul>
    <div class="d-flex justify-content-end">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <span class="navbar-text">
                    
                </span>
            </li>
            <li class="nav-item active">
                <a id="login-link" class="nav-link" href="./login.html">Sign In</a>
            </li>
        </ul>
    </div>
</div>
</nav>
`;

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
        
        // Change active link
        var element = document.getElementById('navIndex');
        element.className = 'nav-item active';
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
        <p>This is a interests page demonstration for INFT 2202 Lab 1.
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

        // Change active link
        var element = document.getElementById('navProducts');
        element.className = 'nav-item active';
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

        // Change active link
        var element = document.getElementById('navServices');
        element.className = 'nav-item active';
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

        // Change active link
        var element = document.getElementById('navAbout');
        element.className = 'nav-item active';
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
			<button type="reset" class="btn btn-primary" id="btnSubmit">
				Submit
			</button>
		</form>
        `;

        // Change active link
        var element = document.getElementById('navContact');
        element.className = 'nav-item active';
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
    injectContactContent();

    // Prints the entered info to the console
    window.addEventListener("DOMContentLoaded", function() {
        document.getElementById("btnSubmit").addEventListener("click", function() {
            var name = document.getElementById("inputName").value;
            var phone = document.getElementById("inputPhone").value;
            var email = document.getElementById("inputEmail").value;
            var message = document.getElementById("inputMessage").value;
            console.log("Name: " + name + ", Phone Number: " + phone + ", Email: " + email + ", Message: " + message);

            // Set a timer to redirect after 3 seconds
            setTimeout(function() {
                window.location.href = "index.html";
            }, 3000);
        });
    });
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

// Login and Registration
$(document).ready(function() {

    // Insert username on the login page
    $('#login-form').submit(function(e) {
      e.preventDefault(); // Prevent the form from submitting normally
  
      var username = $('#inputUsername').val(); // Get the entered username
      $('.navbar-text').text(username); // Update the navbar text with the username
      $('#login-link').text("Sign Out");
    });

    $('#registration-form').submit(function(e) {
        e.preventDefault(); // Prevent the form from submitting normally

        var firstName = $('#inputFirst').val();
        var lastName = $('#inputLast').val();
        var email = $('#inputEmail').val();
        var password1 = $('#inputPassword').val();
        var password2 = $('#inputPassword2').val();
        var username = firstName + lastName;

        // Show the error div if there is an error message (Data Validation)
        if (firstName === "")
        {
            $('#errorMessage').text("Please enter your first name!");
            $('#errorDiv').show();
        }
        else if (lastName === "")
        {
            $('#errorMessage').text("Please enter your last name!");
            $('#errorDiv').show();
        }
        else if (firstName.length < 2 || lastName.length < 2)
        {
            $('#errorMessage').text("Your first name and last name must be at least 2 characters long!");
            $('#errorDiv').show();
        }
        else if (email === "")
        {
            $('#errorMessage').text("Please enter your email address!");
            $('#errorDiv').show();
        }
        else if (email.length < 8)
        {
            $('#errorMessage').text("Your email address must be at least 8 characters long!");
            $('#errorDiv').show();
        }
        else if (!email.includes("@"))
        {
            $('#errorMessage').text("Your email address must contain the @ character!");
            $('#errorDiv').show();
        }
        else if (password1 === "")
        {
            $('#errorMessage').text("Please enter a password!");
            $('#errorDiv').show();
        }
        else if (password1.length < 6)
        {
            $('#errorMessage').text("Your password must be at least 6 characters long!");
            $('#errorDiv').show();
        }
        else if (password2 === "")
        {
            $('#errorMessage').text("Please confirm your password!");
            $('#errorDiv').show();
        }
        else if (password2 !== password1)
        {
            $('#errorMessage').text("Passwords do not match!");
            $('#errorDiv').show();
        }

        // Submit the form and keep the error div hidden
        else
        {
            $('#errorDiv').hide();

            // Create a new user
            const newUser = new User(firstName, lastName, username, email, password1);
            console.log(newUser);

            // Reset the fields
            $(this)[0].reset();
        }
    });
});