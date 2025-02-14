// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var i = 0;
var txt = 'Welcome to my webpage written using Visual Studio';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("type-writer").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}