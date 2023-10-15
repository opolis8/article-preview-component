function selector(value) {
  return document.querySelector(`.${value}`);
}

function checkstatus() {
  const displayvalue = window.innerWidth;
  const boxcheck = document.querySelector(".sharebox");
  if (displayvalue >= 600) {
    selector(
      "profileimg"
    ).innerHTML = `<img class="realimg" src="./images/avatar-michelle.jpg" alt="" />
    <div class="name">
      <p>Michelle Appleton</p>
      <p class="date">28 Jun 2020</p>
    </div>`;
  }

  if (displayvalue <= 600 && boxcheck.style.display === "flex") {
    selector("profileimg").innerHTML = `<div class="change"><p>S H A R E</p>
    <img src="./images/icon-facebook.svg" alt="fb" /><img
      src="./images/icon-twitter.svg"
      alt="twt"
    /><img src="./images/icon-pinterest.svg" alt="" />
  </div></div>`;
  }
  return displayvalue;
}

setInterval(checkstatus, 100);

const toggle = document
  .querySelector(".imgshare")
  .addEventListener("click", () => {
    console.log("clicked");
    console.log(checkstatus());
    const sharebox = document.querySelector(".sharebox");

    if (checkstatus() <= 600) {
      selector("profileimg").innerHTML = `<div class="change"><p>S H A R E</p>
    <img src="./images/icon-facebook.svg" alt="fb" /><img
      src="./images/icon-twitter.svg"
      alt="twt"
    /><img src="./images/icon-pinterest.svg" alt="" />
  </div></div>`;
    }

    if (sharebox.style.display === "none") {
      sharebox.style.display = "flex";
    } else {
      sharebox.style.display = "none";
      selector(
        "profileimg"
      ).innerHTML = `<img class="realimg" src="./images/avatar-michelle.jpg" alt="" />
      <div class="name">
        <p>Michelle Appleton</p>
        <p class="date">28 Jun 2020</p>
      </div>`;
    }
  });
