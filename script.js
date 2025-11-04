alert("I'm sorry, Maybe There are some probles in the Page, becaus this is my first Project");
// Skills List
const skills = ["HTML", "CSS", "JavaScript", "C++"];
const skillsList = document.getElementById("skills-list");

skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

// Typing Effect
const typedText = document.getElementById("typedText");
const roles = ["Web Developer", "Application Developer","Photographer😁"];
let index = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const current = roles[index];
  typedText.textContent = current.substring(0, charIndex);

  if (!deleting && charIndex < current.length) {
    charIndex++;
    setTimeout(type, 100);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, 50);
  } else {
    deleting = !deleting;
    if (!deleting) index = (index + 1) % roles.length;
    setTimeout(type, 1000);
  }
}

window.addEventListener('scroll', function() {
  const profileImg = document.querySelector('.profile-img');
  
  if (window.scrollY > 100) { // Adjust threshold as needed
    profileImg.classList.add('scrolled');
  } else {
    profileImg.classList.remove('scrolled');
  }
});

type();
