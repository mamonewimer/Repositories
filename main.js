//Main Variables

let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data")
getButton.onclick = function(){
    getRepos()
}
//Get Repos Function
function getRepos(){
 if (theInput.value == "") {   //if value is empty
    reposData.innerHTML = "<span>please write github username.</span>";


}
else {
    fetch(`https://api.github.com/users/${theInput.value}/repos`)
	.then((response) => response.json())
	.then((repositories)=>{
reposData.innerHTML = '';
//Loop The Repositories
repositories.forEach(repo => {
   //Create the main div element
   let mainDiv = document.createElement("div")
   //Create repo name text
   let repoName = document.createTextNode(repo.name)
   //append the text main div
   mainDiv.appendChild(repoName)
//create repo url anchor
let theUrl = document.createElement('a')

//create repo url text
let theUrlText = document.createTextNode("Visit")
//append the repo url text to anchor tag
theUrl.appendChild(theUrlText)
//add the hypertext reference "href"
theUrl.href = `https://github.com/${theInput.value}/${repo.name}`
//set attribute blank
theUrl.setAttribute('target', '_blank')
// append the manin div to contaner
mainDiv.appendChild(theUrl)
// create stars count span
let StarsSpan = document.createElement("span")
//create the stars count text
let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`)
//add stars count test to stars span
StarsSpan.appendChild(starsText)
//append stars count span to main div
mainDiv.appendChild(StarsSpan)
//add class on main div
mainDiv.className=('repo-box')

   //append the main div
   reposData.appendChild(mainDiv)
})
})
}

}
