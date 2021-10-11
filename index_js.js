var contactCheck = 0
var snakeCheck = 0

function removePopup() {
  document.getElementById("opRuta").style.display = "none";
  document.getElementById("popupRuta").style.display = "none";
  document.getElementById("ritadLogo").classList.add("active");
  document.getElementById("leftNav").classList.add("active");
}

var contactPage = '<div id="container">                  <label for="fname">First Name</label>          <input type="text" id="fname" name="firstname" placeholder="Your name..">                <label for="lname">Last Name</label>          <input type="text" id="lname" name="lastname" placeholder="Your last name..">                    <label for="country">Country</label>          <select id="country" name="country">            <option value="australia">Sweden</option>            <option value="canada">Other</option>          </select>                <label for="subject">How can we help you?</label>          <textarea id="subject" name="subject" placeholder="Write here.." style="height:200px"></textarea>                <input type="submit" value="SEND">              </form>      </div></body>'

function gotoContact() {
  document.getElementById("containerRuta").innerHTML = contactPage
  if (contactCheck == 0) {
    var fileref = document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", "../contactpage/contact_css.css");
    document.getElementsByTagName("head")[0].appendChild(fileref);
    contactCheck = 1;
  }
}

var snakePage = '<div  class="gameContainer"  id="gameContainer"></div>    <!-- #scoreContainer contains the scores -->    <div  id="scoreContainer">        <div  class="scoreBoard">Food: <span id="pointsEarned">0</span></div>               <div  class="scoreBoard">Blocks: <span  id="blocksTravelled">0</span></div>    </div>    <!-- #onScreenControllers contains the navigation buttons for mobile screens -->    <div  id="mobileControllers">        <button  id="leftButton">◀️</button>        <div>            <button  id="upButton">🔼</button>            <button  id="downButton">🔽</button>        </div>        <button  id="rightButton">▶️</button>    </div> '

function gotoSnake() {
  document.getElementById("containerRuta").innerHTML = snakePage
  if (snakeCheck == 0) {
    var fileref = document.createElement("link")
    fileref.setAttribute("rel", "stylesheet")
    fileref.setAttribute("type", "text/css")
    fileref.setAttribute("href", "../../snakegameV2/snake_css.css");

    var scriptref = document.createElement("script")
    scriptref.setAttribute("src", "../../snakegameV2/snake_js.js")
    scriptref.setAttribute("async", "false");

    document.getElementsByTagName("head")[0].appendChild(fileref);
    document.getElementsByTagName("head")[0].appendChild(scriptref);
    snakeCheck = 1;
    document.getElementById("leftNav").classList.remove("active");
  }


}

// hamburger animation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#rightNav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll("#rightNav.link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))