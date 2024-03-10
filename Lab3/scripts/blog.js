/*
Name: Cort Auger
Number: 100862580
Course: INFT 2202
Date: 3/9/2024
Description: blog.js file for CSS labs.
 */

// Change active link
var element = document.getElementById('navBlog');
element.className = 'nav-item active';

// Fetch blog posts
async function fetchBlogPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
}

// Fetch username
async function fetchUserName(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json();
    return data;
}

// Fetch photo from Pixabay API (Key - 42791407-fe4cbae18d619a181bf4edd80)
async function fetchPhoto() {
    const response = await fetch(`https://pixabay.com/api/?key=42791407-fe4cbae18d619a181bf4edd80&q=robot+character+cartoon&image_type=photo`);
    const data = await response.json();
    return data.hits[6].webformatURL; // I chose the 6th photo returned for the terms "robot+character+cartoon" because I though it looked good for a user photo
}

// Load blog posts with user data and photo
async function loadBlogPosts() {
    const blogPosts = await fetchBlogPosts();
    const blogPostsContainer = document.getElementById('blogPage');

    // Make 30 cards/blog posts
    blogPosts.slice(0, 30).forEach(async post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');

        // Create card div
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        // Fetch username and photo
        const [userId, photoUrl] = await Promise.all([
            fetchUserName(post.userId),
            fetchPhoto()
        ]);

        // Username constant
        const username = userId.username;

        // Create user container div
        const userContainer = document.createElement('div');
        userContainer.classList.add('user-container');

        // Create username to cards
        const usernameElement = document.createElement('p');
        usernameElement.classList.add('card-text', 'username');
        usernameElement.textContent = username;

        // Create image to cards
        const photoElement = document.createElement('img');
        photoElement.classList.add('user-photo');
        photoElement.src = photoUrl;
        photoElement.alt = 'User Photo';

        // Create card body div
        const cardBodyElement = document.createElement('div');
        cardBodyElement.classList.add('card-body');

        // Create blog heading
        const titleElement = document.createElement('h4');
        titleElement.classList.add('card-title');
        titleElement.textContent = post.title;

        // Create blog body
        const bodyElement = document.createElement('p');
        bodyElement.classList.add('card-text');
        bodyElement.textContent = post.body;

        // Add everything to the page
        userContainer.appendChild(photoElement);
        userContainer.appendChild(usernameElement);
        cardElement.appendChild(userContainer);
        cardBodyElement.appendChild(titleElement);
        cardBodyElement.appendChild(bodyElement);
        cardElement.appendChild(cardBodyElement);
        postElement.appendChild(cardElement);
        blogPostsContainer.appendChild(postElement);
    });
}

// Show blog posts when page loads
window.onload = loadBlogPosts;