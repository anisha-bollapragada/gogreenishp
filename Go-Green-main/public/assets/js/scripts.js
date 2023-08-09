document.addEventListener('DOMContentLoaded', () => {

window.addEventListener("scroll", function () {
  var fadeRows = document.querySelectorAll(".row");

  for (var i = 0; i < fadeRows.length; i++) {
    var rowPosition = fadeRows[i].getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (rowPosition - windowHeight <= 0) {
      fadeRows[i].classList.add("visible");
    } else {
      fadeRows[i].classList.remove("visible");
    }
  }
});

window.addEventListener('DOMContentLoaded', () => {
  let countElement = document.getElementById("counter1");
  let countElement2 = document.getElementById("counter2");
  let countElement3 = document.getElementById("counter3");
  let count = 0;
  let count2 = 114800;
  let count3 = 0;
  let counts;
  let counts2;
  let counts3;
  let seen1 = false;

  function updateCounter() {
    countElement.innerHTML = ++count;
    if (count === 193) {
      clearInterval(counts);
      countElement.innerHTML = 193 + " ";
    }
  }

  function updateCounter2() {
    countElement2.innerHTML = ++count2;
    if (count2 === 115000) {
      clearInterval(counts2);
      countElement2.innerHTML = 115000;
    }
  }

  function updateCounter3() {
    countElement3.innerHTML = ++count3;
    if (count3 === 350) {
      clearInterval(counts3);
      countElement3.innerHTML = 350;
    }
  }

  function startAnimation() {
    counts = setInterval(updateCounter, 10);
    counts2 = setInterval(updateCounter2, 10);
    counts3 = setInterval(updateCounter3, 10);
  }

  // Add a scroll event listener
  window.addEventListener('scroll', () => {
    // Define the scroll position threshold
    const threshold = 300; // Adjust this value as needed

    // Get the vertical scroll position
    const scrollPosition = window.scrollY || window.pageYOffset;

    if (seen1 === false) {
      // Check if the scroll position has passed the threshold
      if (scrollPosition > threshold) {
        startAnimation();
        seen1 = true;
        // Remove the scroll event listener after executing the animation
        window.removeEventListener('scroll', arguments.callee);
      }
    }
  });
});

function ready(fn) {
  if (document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function toaboutpage(){
  window.location.href = 'about.html'
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

ready(function () {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = document.querySelector("#email").value;
    const name = document.querySelector("#name").value;

    const dataPayload = {
      name,
      email,
    };

    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPayload)
    });

    if (res.ok) {
      document.querySelector("#form-helper").textContent = "Successfully submitted form"
    } else {
      document.querySelector("#form-helper").textContent = "Failed to submitted form"
    }
  };

  document
    .querySelector("#subscribe-form")
    .addEventListener("submit", handleSubmit);
});

var checkList = document.getElementById('list1');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
}

});

document.addEventListener('DOMContentLoaded', function() {
  // Add a click event listener to the dropdown button
  document.querySelector('.dropdown-btn').addEventListener('click', function() {
    var dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle('active');
  });

  // Close the dropdown when clicking outside of it
  document.addEventListener('click', function(event) {
    var dropdownContent = document.querySelector('.dropdown-content');
    var dropdownBtn = document.querySelector('.dropdown-btn');

    if (!dropdownBtn.contains(event.target) && !dropdownContent.contains(event.target)) {
      dropdownContent.classList.remove('active');
    }
  });
});
