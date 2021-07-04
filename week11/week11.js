// Imports 
import { makeRequest } from './authHelpers.js';
import Auth from './auth.js';
// Instantiate the Auth() class
var auth = new Auth();

// Add an event listener to the login submit button, include a call back 
// to the getAllPosts() function 
document.getElementById('login').addEventListener('submit', function(event) {
  auth.login(getAllPosts);
  event.preventDefault();
});
// Add an event listener to the addPost submit button
document.getElementById('addPost').addEventListener('submit', function(event) {
    event.preventDefault();
    postComment();
});

// Post a new comment
function postComment () {
  let postContent = document.getElementById('comment').value;
  let postTitle = document.getElementById('title').value;
  // Body of the comment post to send to the server
  let post = {
		title : postTitle,
		content : postContent
	}
  // send the post
  makeRequest('posts', 'POST', post, auth.jwtToken);
  getAllPosts();
};

// Get all of the posts and list them to the page
async function getAllPosts () {
  let response = await makeRequest('posts', 'GET', '', auth.token);
  console.log(response);
  let postTable = document.getElementById('posts');
  postTable.innerHTML = '';
  
  // Loop through each response JSON object returned
  // and extract the title and comment
  response.forEach(element => {
    let newRow = document.createElement('tr');
    let newCell1 = document.createElement('td');
    newCell1.innerHTML = element.title;
    let newCell2 = document.createElement('td');
    newCell2.innerHTML = element.content;
    newRow.appendChild(newCell1);
    newRow.appendChild(newCell2);
    postTable.appendChild(newRow);
  });
}
