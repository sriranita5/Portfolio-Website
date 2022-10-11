$(document).ready(function(){
    // ini buat navigation bar
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle')
    }); 

    // ini buat speciality
    $(window).on('load scroll', function(){
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle')
    })
});

// ini buat projects 
const projectsContainers = [...document.querySelectorAll('.projects-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

projectsContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})


// ini buat contact us
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let prent = this.parentNode;
    parent.classList.add("focus");
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
});
