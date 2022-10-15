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
