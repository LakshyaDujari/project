document.addEventListener("DOMContentLoaded",()=>{const e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.target,a=document.getElementById(t);e.classList.toggle("is-active"),a.classList.toggle("is-active")})})});var head=document.getElementsByTagName("HEAD")[0],link=document.createElement("link");link.rel="stylesheet",link.type="text/css",link.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",head.appendChild(link);var myObject={ank:'<a target="_blank" href="https://nutpanda.com" class="widget" rel="noreferrer"><p>&copy; Ankit & Lakshya</p></a>',lastName:"",fullName:function(){return this.ank+" "+this.lastName}};x=myObject.fullName(),document.getElementById("load").innerHTML=x;
// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performance
    window.addEventListener('load', () => {
     navigator.serviceWorker.register('sw.js');
    });
}