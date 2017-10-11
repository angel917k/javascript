var body = document.getElementsByTagName('body')[0];
var welcome = document.getElementById('welcome');

function welcomePrompt (){
  var titlePrompt = prompt("Please enter a title for your page");

  var  title = document.createElement('h1');
  title.className = "text-center";
  title.textContent = titlePrompt;
  body.appendChild(title);

  var storyPrompt = prompt("Please, write a few sentences about what you did today.");
  var story = document.createElement('p');
  story.className = "text-justify";
  story.textContent = storyPrompt;
  body.appendChild(story);

  var color = prompt("What is you favorite color?");
  if( color === "red" || color === "green" || color === "blue" || color === "white" || color === "black" || color === "orange" || color === "pink" || color === "purple" || color === "yellow" || color === "grey"){
  body.style.backgroundColor = color;
  alert("Your favorite color is boring Maritza...stupid girl.")
} else {
  alert("Your favorite color is not available as a background color. It will be set to turquoise instead. Deal with it Maritza...stupid girl.")
  body.style.backgroundColor = "#69E1DF";
}

};

welcome.addEventListener('click', welcomePrompt );
