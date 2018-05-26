
// This is a function that envokes todoList() function
function todoList() {
	// Created two variables: username and comment
	// this allows users to write their name and comments
	var username = document.getElementById("username").value
	var comment = document.getElementById("comment").value
	// Created another two variables userNameText and commentText
	// this will open a new line and in a form container will display what the user wrote 
	var userNameText = document.createTextNode("Username: " + username)
	var commentText = document.createTextNode("Comment: " + comment)

	
	var newListItem = document.createElement("LI")
	
	newListItem.className = "list-group-item"

	var newUserName = document.createElement("H3")
	
	newUserName.appendChild(userNameText)

	var newComment = document.createElement("P")
	
	newComment.appendChild(commentText)


	newListItem.appendChild(newUserName)
	newListItem.appendChild(newComment)
	document.getElementById("commentList").appendChild(newListItem)


}



