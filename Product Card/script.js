

// Get all elements with the class "product-colors span"
var colorSpans = document.querySelectorAll(".product-colors span");

// Add a click event listener to each color span
colorSpans.forEach(function(span) {
    span.addEventListener("click", function() {
        // Remove "active" class from all color spans
        colorSpans.forEach(function(s) {
            s.classList.remove("active");
        });

        // Add "active" class to the clicked color span
            span.classList.add("active");

        //  Update styles based on data attributes
         document.querySelectorAll(".active").forEach(function(activeSpan) {
            activeSpan.style.borderColor = activeSpan.getAttribute("data-color-sec");
         });

        document.body.style.background = span.getAttribute("data-color-primary");
        document.querySelectorAll(".content h2, .content h3").forEach(function(element) {
            element.style.color = span.getAttribute("data-color-sec");
        });

        document.querySelectorAll(".container .imgBx, .container .details .btn").forEach(function(element) {
            element.style.background = span.getAttribute("data-color-sec");
        });

        document.querySelector(".imgBx img").src = span.getAttribute("data-pic");
    });
});
