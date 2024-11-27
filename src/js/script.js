const accordeon = document.querySelector(".accordeon");

accordeon.querySelectorAll("summary").forEach((summary) => {
    summary.addEventListener("click", (event) => {
        event.preventDefault();

        const details = event.target.closest("details");

        accordeon.querySelectorAll("details").forEach((det) => {
            if (det !== details) {
                det.open = false;
            }
        });

        details.open = !details.open;
    });
});