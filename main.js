// dark mode

var icon = document.getElementById("dark-click");

icon.onclick = function() {
    document.body.classList.toggle("dark-mode");
    if(document.body.classList.contains("dark-mode")){
      icon.src = "img/sun.png";
    }else{
      icon.src = "img/moon.png";
    }
}



// Show and hide hero 

function firstFunction() {
//add
  var element = document.getElementById('tab-1');
  element.classList.add('show');
  var removeElement = document.getElementById('hero-heading');
  removeElement.classList.add('show');
  var click = document.getElementById("autoslider");
  click.classList.add('autoslider-hide')
  //remove others
  var removeElement = document.getElementById('tab-2');
  removeElement.classList.remove('show');
  var removeElement = document.getElementById('tab-3');
  removeElement.classList.remove('show');
  var removeElement = document.getElementById('tab-4');
  removeElement.classList.remove('show');
  console.log(removeElement);
}
function secondFunction() {
//add
  var element = document.getElementById('tab-2');
  element.classList.add('show');
  var click = document.getElementById("autoslider");
  click.classList.add('autoslider-hide')
//remove others
  var removeElement = document.getElementById('tab-1');
  removeElement.classList.remove('show');
  var removeElement = document.getElementById('tab-3');
  removeElement.classList.remove('show');
  var removeElement = document.getElementById('tab-4');
  removeElement.classList.remove('show');

  var removeElement = document.getElementById('hero-heading');
  removeElement.classList.remove('show');
  console.log(removeElement);
}

function thirdFunction() {
//add
  var element = document.getElementById('tab-3');
  element.classList.add('show');
  var click = document.getElementById("autoslider");
  click.classList.add('autoslider-hide')
//remove others 
  var removeElement = document.getElementById('tab-1');
  removeElement.classList.remove('show');
  var removeElement = document.getElementById('tab-2');
  removeElement.classList.remove('show');
  var removeElement = document.getElementById('tab-4');
  removeElement.classList.remove('show');

  var removeElement = document.getElementById('hero-heading');
  removeElement.classList.remove('show');
  console.log(removeElement);

  
}
function forthFunction() {
//add  
  var element = document.getElementById('tab-4');
  element.classList.add('show');
  var click = document.getElementById("autoslider");
  click.classList.add('autoslider-hide')
//remove others
  var removeElement = document.getElementById('tab-1');
  removeElement.classList.remove('show');
  var removeElement = document.getElementById('tab-2');
  removeElement.classList.remove('show');
  var removeElement = document.getElementById('tab-3');
  removeElement.classList.remove('show');

  var removeElement = document.getElementById('hero-heading');
  removeElement.classList.remove('show');
  console.log(removeElement);
  
}

function xFunction() {
  var removeElement = document.getElementById('tab-1');
  removeElement.classList.remove('show');
  var removeElement = document.getElementById('tab-2');
  removeElement.classList.remove('show');
  var removeElement = document.getElementById('tab-3');
  removeElement.classList.remove('show');
  var removeElement = document.getElementById('tab-4');
  removeElement.classList.remove('show');

  var removeElement = document.getElementById('hero-heading');
  removeElement.classList.remove('show');

  var click = document.getElementById("autoslider");
  click.classList.remove('autoslider-hide');

  document.getElementById('click-tab-1').blur()
  document.getElementById('click-tab-2').blur()
  document.getElementById('click-tab-3').blur()
  document.getElementById('click-tab-4').blur()
 
  
}





// Slides 

var swiper = new Swiper(".swiper", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination: {
      el: ".swiper-pagination"
    }
  });

