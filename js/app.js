// Global Variables Start.
    const navUl = document.querySelector('#list-menu');
    const allSections = document.querySelectorAll('section');
    const navFragment = document.createDocumentFragment();

// Generate Navigation Menu.
function generateNavMenu() {
    allSections.forEach((section) => {
        const sectionId = section.getAttribute('id');
        const sectionData = section.getAttribute('data-nav');
        const link = document.createElement('li');
        link.innerHTML = `<a class="nav-link" href="#${sectionId}" data-link="${sectionId}">
          ${sectionData}</a>`;
        navFragment.appendChild(link);
    });
    navUl.appendChild(navFragment);

    let links = document.querySelectorAll('.nav-link');
    //loop through links and show the section which has an id equal to the data-link property for that link.
    links.forEach((linkItem) => {
        scrollToSection(linkItem);
    });

    function scrollToSection(linkItem) {
        linkItem.addEventListener("click", (event) => {
            //prevent the default action of anchor tag to scroll using JS
            event.preventDefault();
            //https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
            // showing the desired section after clicking the item
            document.getElementById(linkItem.getAttribute("data-link")).scrollIntoView({behavior: 'smooth'});
        });
    }
}
generateNavMenu();


let navBar = document.getElementById('navbar').querySelectorAll('li');
// itrate in li items list.
navBar.forEach((item) => {
    item.addEventListener('click', function (e) {
    navBar.forEach((item) => {
      // remove every navbar-click class added before in any list item.
      item.classList.remove('navbar-click');
    });
    // add the class 
    item.classList.add('navbar-click');
  });
});

window.addEventListener("scroll", () => {
    allSections.forEach((section) => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
        //get the top from teh returned objetc of the rectangle data that surround the section.
        let top = section.getBoundingClientRect().top;
    
        if (top >= -400 && top < 250) {
            section.classList.add("active-class");
        } else {
            section.classList.remove("active-class");
        }

    });
});


// get the scrollToTop button.
let scrollButton = document.querySelector(".scroll-to-top");
window.onscroll = () => {
    this.scrollY >= screen.height ? scrollButton.classList.add("show") : scrollButton.classList.remove("show");
}
scrollButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth", }));

// Create nav bar menu for responsive mode.
// https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
function responsiveMenu() {
  	var x = document.getElementById("list-menu");
 	if (x.className === "navbar-menu") {
    	x.className += " responsive";
  	} else {
    	x.className = "navbar-menu";
  	}
};