
function breakText () {
var h1 = document.querySelector("h1");
var h1Text = h1.textContent

var splitedText = h1Text.split("");
console.log(splitedText)


var clutter = ""

var halfValue = Math.floor(splitedText.length/2)
splitedText.forEach(function(elem, idx){
    if(idx<halfValue)
       clutter += `<span class="a">${elem}</span>`
    else {

         clutter += `<span class="b">${elem}</span>`

    }
    

    h1.innerHTML = clutter
})


}

breakText();

// gsap.from("h1 span", {
//     y:50,
//     opacity: 0,
//     duration: 0.5,
//     delay: 0.5,
//     stagger:0.15
// })


gsap.from ("h1 .a", {
    y:50,
    duration: 0.6,
    delay: 0.5,
    stagger: 0.15,
    opacity: 0
})
gsap.from ("h1 .b", {
    y:50,
    duration: 0.6,
    delay: 0.5,
    stagger: -0.15,
    opacity: 0
})