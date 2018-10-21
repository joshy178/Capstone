var panel = document.createElement("div")
panel.id = "searchPanel"

var panelTitle = document.createElement("h3")
panelTitle.innerHTML = "Best User-Ranked Results"

var hr = document.createElement("hr")

panel.appendChild(panelTitle)
panel.appendChild(hr)

for (var i=0; i < 10; i++)
{
	var entry = document.createElement("div")
	entry.className = "entry"

	var voteBox = document.createElement("div")
	voteBox.className = "voteBox"

	var upvote = document.createElement("div")
	upvote.innerHTML = "<a href='#'>▲</a>"

	var downvote = document.createElement("div")
	downvote.innerHTML = "<a href='#'>▼</a>"

	voteBox.appendChild(upvote)
	voteBox.appendChild(downvote)

	var linkBox = document.createElement("div")
	
	var linkTitle = document.createElement("a")
	linkTitle.innerHTML = "<h3>Lorem ipsum dolor sit amet | Lorem Ipsum</h3>"
	linkTitle.href = "https://lorem.google.com/search?q=ipsum&true=false"

	var linkText = document.createElement("span")
	linkText.innerHTML = "https://lorem.google.com/search?q=ipsum&true=false"
	linkText.className = "linkText"

	linkTitle.appendChild(linkText)

	linkBox.appendChild(linkTitle)

	entry.appendChild(voteBox)
	entry.appendChild(linkBox)

	panel.appendChild(entry)
}

topNav = document.getElementById("top_nav")
topNav.parentNode.insertBefore(panel, topNav.nextSibling)
