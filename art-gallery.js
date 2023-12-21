console.log("hello world");

/*
for each image element,
  when clicked,
    pop up the image in the center of the view (wrapped in a backdrop element, which when clicked, will destroy the popup)



shittier alternative:

when anywhere on the page is clicked,
  if an image is popped up,
    make it go away

progress:

To access each element:
document.querySelectorAll("img").forEach()
*/

var popup = document.getElementById("popup")
var popupImage = popup.querySelector("img")
var gallery = document.getElementById("gallery")
const scrollContainer = document.getElementById("gallery");

gallery.querySelectorAll("img").forEach((currentItem) => {
  currentItem.addEventListener("click", (event) => {
    popup.classList.remove("hidden");
    popupImage.src = currentItem.src;
  })
})

gallery.querySelectorAll("li").forEach((currentItem) => {
  currentItem.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      popup.classList.remove("hidden");
      popupImage.src = currentItem.querySelector("img").src;
    }
})
})

popup.addEventListener("click", (event) => {
  popup.classList.add("hidden");
})

/*Horizontal scrolling for gallery*/
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});

/*Scrollbar set to middle when page opens*/
window.addEventListener('load', () => {
  let scrollElement = document.getElementById("gallery");
  scrollElement.scrollLeft =  (scrollElement.scrollWidth - scrollElement.clientWidth ) / 2;
});


