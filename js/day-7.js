var body = document.getElementsByTagName('body')[0];
var welcome = document.getElementById('welcome');

function welcomePrompt (){
  var titlePrompt = prompt("Please enter a title for your page");

  var  title = document.createElement('h1');
  title.className = "text-center"
  title.textContent = titlePrompt;
  body.appendChild(title);

  var storyPrompt = prompt("Please, write a few sentences about what you did today.");
  var story = document.createElement('p');
  story.className = "text-justify";
  story.textContent = storyPrompt;
  body.appendChild(story);

  var colorPrompt = prompt("What is you favorite color");

};

welcome.addEventListener('click', welcomePrompt );
