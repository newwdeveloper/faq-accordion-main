const imgWrappers = document.querySelectorAll(".img-wrapper");
const paras = document.querySelectorAll(".answer");

imgWrappers.forEach((imgWrapper, index) => {
  imgWrapper.addEventListener("click", function () {
    // First, hide all paragraphs and reset all icons to original state
    paras.forEach((para, i) => {
      if (i !== index) {
        para.classList.add("hidden"); // Hide all except the current one
        const otherMinusIcon = imgWrappers[i].querySelector(".minus");
        const otherPlusIcon = imgWrappers[i].querySelector(".plus");
        otherMinusIcon.style.display = "none"; // Reset minus icon
        otherPlusIcon.style.display = "block"; // Show plus icon
      }
    });

    // Now, toggle the clicked paragraph and icons
    paras[index].classList.toggle("hidden");

    const minusIcon = imgWrapper.querySelector(".minus");
    const plusIcon = imgWrapper.querySelector(".plus");

    if (paras[index].classList.contains("hidden")) {
      plusIcon.style.display = "block";
      minusIcon.style.display = "none";
    } else {
      plusIcon.style.display = "none";
      minusIcon.style.display = "block";
    }
  });
});
