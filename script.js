document.addEventListener("DOMContentLoaded", function () {
   const items = document.querySelectorAll(".carousel_item");
   const dots = document.querySelectorAll(".carousel_dot");
   let currentIndex = 0;

   function showSlide(index) {
      items.forEach((item, i) => {
         item.classList.toggle("carousel_item__active", i === index);
      });
      dots.forEach((dot, i) => {
         dot.classList.toggle("carousel_dot__active", i === index);
      });
   }

   document.querySelector(".carousel_button__next").addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % items.length;
      showSlide(currentIndex);
   });

   document.querySelector(".carousel_button__prev").addEventListener("click", function () {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showSlide(currentIndex);
   });

   dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
         currentIndex = i;
         showSlide(currentIndex);
      });
   });

   showSlide(currentIndex);
});
