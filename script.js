var contect_btn =document.getElementById("contect-me");
contect_btn.addEventListener('click',function() {
    window.open("https://wa.link/08wpo2");
});

var about_btn=document.getElementById("home-btn");
about_btn.addEventListener('click',function() {
    window.scrollTo({
        top:document.getElementById("about").offsetTop,
        behavior:'smooth'
    })
    
});
var insta =document.getElementById("insta");
insta.addEventListener('click',function() {
    window.open("https://www.instagram.com");
});
 var watss =document.getElementById("whats");
watss.addEventListener('click',function() {
    window.open("https://wa.link/08wpo2");
});
var linked =document.getElementById("msg");
linked.addEventListener('click',function() {
    window.open("https://www.linkedin.com/feed/");
});

       
