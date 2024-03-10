/*
Name: Cort Auger
Number: 100862580
Course: INFT 2202
Date: 2/23/2024
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

// Fetch user data from JSONPlaceholder API
async function fetchUserData(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json();
    return data;
}

// Fetch photo from Pixabay API
async function fetchPhoto() {
    const response = await fetch(`https://pixabay.com/api/?key=42791407-fe4cbae18d619a181bf4edd80&q=ai&image_type=photo`);
    const data = await response.json();
    return data.hits[0].webformatURL; // Assuming the first image returned
}

// Load blog posts with user data and photo
async function renderBlogPosts() {
    const blogPosts = await fetchBlogPosts();
    const blogPostsContainer = document.getElementById('blogPage');

    blogPosts.slice(0, 30).forEach(async post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');

        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        // Fetch user data and photo asynchronously
        const [userData, photoUrl] = await Promise.all([
            fetchUserData(post.userId),
            fetchPhoto()
        ]);
        const username = userData.username;

        const userContainer = document.createElement('div');
        userContainer.classList.add('user-container');

        const usernameElement = document.createElement('p');
        usernameElement.classList.add('card-text', 'username');
        usernameElement.textContent = username;

        const photoElement = document.createElement('img');
        photoElement.classList.add('user-photo');
        photoElement.src = photoUrl;
        photoElement.alt = 'User Photo';

        userContainer.appendChild(photoElement);
        userContainer.appendChild(usernameElement);
        cardElement.appendChild(userContainer);

        const cardBodyElement = document.createElement('div');
        cardBodyElement.classList.add('card-body');

        const titleElement = document.createElement('h4');
        titleElement.classList.add('card-title');
        titleElement.textContent = post.title;

        const bodyElement = document.createElement('p');
        bodyElement.classList.add('card-text');
        bodyElement.textContent = post.body;

        cardBodyElement.appendChild(titleElement);
        cardBodyElement.appendChild(bodyElement);
        cardElement.appendChild(cardBodyElement);
        postElement.appendChild(cardElement);
        blogPostsContainer.appendChild(postElement);
    });
}

// Show blog posts when page loads
window.onload = renderBlogPosts;