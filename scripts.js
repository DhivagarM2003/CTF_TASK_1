document.addEventListener("DOMContentLoaded", function () {
    const showMoreBtn = document.getElementById("showMoreBtn");

    showMoreBtn.addEventListener("click", function () {
        const hiddenProjects = document.querySelectorAll(".project.hidden");
        hiddenProjects.forEach(project => {
            const imgSrc = project.getAttribute("data-src");
            if (imgSrc) {
                const img = document.createElement("img");
                img.src = imgSrc;
                // Insert the image as the first child of the project element
                project.insertBefore(img, project.firstChild);
                project.classList.remove("hidden");
            }
        });
        showMoreBtn.style.display = "none";
    });
});
