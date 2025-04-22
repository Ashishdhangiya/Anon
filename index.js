'use strict';


const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

const modalCloseFunc = function () { modal.classList.add('closed') }

modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

//close Notification

const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');


toastCloseBtn.addEventListener('click', function() {
    notificationToast.classList.add('closed');
})

//Closing or Opening Mobile Menu
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

    const modalCloseFunc = function () {
        mobileMenu[i].classList.remove('active');
        overlay.classList.remove('active');
    }

    mobileMenuOpenBtn[i].addEventListener('click', function () {
        mobileMenu[i].classList.add('active');
        overlay.classList.add('active');
    })

    mobileMenuCloseBtn[i].addEventListener('click', modalCloseFunc);
    overlay.addEventListener('click', modalCloseFunc);

}

//Accordion Options
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordion.length; i++) {
    accordionBtn[i].addEventListener('click', function () {
        const clickedBtn =  this.nextElementSibling.classList.contains('active');

        for (let i = 0; i < accordion.length; i++) {
            if(clickedBtn) break;
            if(accordion[i].classList.contains('active')) {
                accordion[i].classList.remove('active');
                accordionBtn[i].classList.remove('active');
            }
        }

        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');
    })
}

document.querySelector('.search-btn').addEventListener('click', function () {
    const searchQuery = document.querySelector('.search-field').value.trim();
    if (searchQuery) {
        window.location.href = `search.html?q=${encodeURIComponent(searchQuery)}`;
    } else {
        alert('Please enter a search term');
    }
});

function addText() {
        const name = document.getElementById("userName").value.trim();
        const email = document.getElementById("userEmail").value.trim();
        const message = document.getElementById("newText").value.trim();
        const text = document.getElementById("text");
    
        if (name && email && message) {
          const newComment = document.createElement("div");
          newComment.className = "comment-item";
          newComment.innerHTML = `
            <h4>${name} <small>(${email})</small></h4>
            <p>${message}</p>
          `;
          text.prepend(newComment);
    
          document.getElementById("userName").value = "";
          document.getElementById("userEmail").value = "";
          document.getElementById("newText").value = "";
        } else {
          alert("Please fill in all fields.");
        }
      }

// Heloo jf
      
// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//  }

