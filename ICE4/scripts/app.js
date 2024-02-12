// TO DO: load the user class script with alias
import { User as UserClass } from './user.js';

$(document).ready(function() {
    console.log('app.js loaded')

    /**
     * iffe to insert nav bar at the top of each page
     */
    $(function () {
        let navBar = `<div class="navigation">
                        <nav class="nav">
                            <a class="nav-link active" href="index.html">Home</a>
                            <a class="nav-link" href="slideshow.html">Slideshow</a>
                            <a class="nav-link disabled" id="username" href="#"></a>
                            <a class="nav-link" href="form.html">Form</a>
                        </nav>
                    </div>`;

        // TO DO: replace the nav-holder
        $('#nav-holder').html(navBar);
    });

    /**
     * function to add styling to all links on the page
     */
    $(function () {
        $("a").addClass("fancy-link");
    });


    $(function () {
        let navDiv = $("div:first");
        console.log(navDiv.html());
        console.log(navDiv.text());
    
        let contentDiv = $("#content-div");
        console.log(contentDiv.html());
        console.log(contentDiv.text());
    
        // text to use with new paragraph
        let text = "It is one of his best works!";
        // create a paragraph
        let newP = $("<p></p>");
        // TO DO: add text with html()
        newP.html(text);
        // append to contentDiv
        contentDiv.append(newP);
    
        // add text
        text = "It is one of his best works! I am very excited for the opening of the new adaptation of his work.";
        
        // TO DO: test when very excited is in a strong tag
        newP.html("<strong>" + text + "</strong>");
        
        // TO DO: append to newP text
        newP.append(" This is additional text appended to the paragraph.");
    });

    $(function () {
         // TO DO: complete the function
        // get the button
        let button = $("#toggle-button");
        // add a click function
        button.click(function() {
            // get the parent div's p tags
            let paragraphs = $(this).parent().find("p");
            // for each p in the div
            paragraphs.each(function() {
                // if it has toggleHide class
                if ($(this).hasClass("toggleHide")) {
                    // remove toggleHide class and add toggleShow class
                    $(this).removeClass("toggleHide").addClass("toggleShow");
                } else {
                    // otherwise assume it has the toggleShow class
                    // remove toggleShow and add toggleHide
                    $(this).removeClass("toggleShow").addClass("toggleHide");
                }
            });
        });
    });



    // FORM JQUERY
    // TO DO: import form validation functions with alias

    // if the submit button is on the page
    // if ($("#btnRegSubmit")) {
        // TO DO: add a click function that calls a callback function
        // $("#btnRegSubmit").click(function (e) {
            // prevent the default submit action (stay on the page)

            // create a new user
            // you normally wouldn't do this unless you had validated, but we're going to do it to show how class members work in calling the validation

                // get the first name input

                // get the last name input

                // get the username input

                // get the email input

                // get the password input



            // debug statement for object
            // console.log(`UserDetails: ${user.displayUser()}`)

            // validate first name

            // validate last name

            // validate  username

            // validate confirm password

    // });
    // }

    // TO DO: if reset button present

        // bind a click event handler

            // clear out all error message paragraphs




    // SLIDESHOW
    // TO DO: if there's a gallery class on the page

    function rotateGallery() {
        // Get the image tag
        let galleryImage = $('.gallery img');
    
        // Get a list of your images
        let images = [
            "./images/portraits/portrait-01.jpg",
            "./images/portraits/portrait-02.jpg",
            "./images/portraits/portrait-03.jpg",
            "./images/portraits/portrait-04.jpg",
            "./images/portraits/portrait-05.jpg",
            "./images/portraits/portrait-06.jpg",
            "./images/portraits/portrait-07.jpg",
            "./images/portraits/portrait-08.jpg",
            "./images/portraits/portrait-09.jpg",
            "./images/portraits/portrait-10.jpg",
            "./images/portraits/portrait-11.jpg",
            "./images/portraits/portrait-12.jpg",
            "./images/portraits/portrait-13.jpg",
            "./images/portraits/portrait-14.jpg",
            "./images/portraits/portrait-15.jpg",
            "./images/portraits/portrait-16.jpg",
            "./images/portraits/portrait-17.jpg",
            "./images/portraits/portrait-18.jpg"
        ];
    
        // Set a first index
        let currentIndex = 0;
    
        // Call the setInterval method that will re-call this method at a set interval
        setInterval(function() {
            // Increment the image index but no greater than how many images you have
            currentIndex = (currentIndex + 1) % images.length;
    
            // Fade out the current image
            galleryImage.fadeOut(1000, function() {
                // Change the src attribute of the image
                galleryImage.attr('src', images[currentIndex]);
    
                // Fade it back in
                galleryImage.fadeIn(1000);
    
                // Debug statement
                console.log('Image changed');
            });
    
        }, 5000); // Set the time for more than how long the fade out and in process will take or you won't get the images you expect
    }

    rotateGallery();





});