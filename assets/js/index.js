const circle_txt = document.querySelector(".hero .spin p");
circle_txt.innerHTML = circle_txt.innerHTML.split("").map(
  (char, i) =>
  `<span style="transform:rotate(${i * 8}deg">${char}</span>`
).join("");

const skill_txt =  baffle(".data", {
  characters: '░▒░ ░██░> ████▓ >█> ░/█>█ ██░░ █<▒ ▓██░ ░/░▒',
        speed: 120
});

function a(a, b) {
  setTimeout(function(){
    skill_txt.start();
    skill_txt.text(text => {
      return a;
    })
    skill_txt.reveal(4000);

  }, 6000 * b); 
}

function skills_animation() {
  skill_txt.start();
  skill_txt.reveal(4000);
array = [
  "Software Development",
  "Android Development",
  "Data Scientist",
  "Web Developer",
  "Software Development",
  "Android Development",
  "Data Scientist",
  "Web Developer",
  "Software Development",
  "Android Development",
  "Data Scientist"
]
  for (let index = 0; index < array.length; index++) {
    a(array[index], index+1);
  }
}

skills_animation();

