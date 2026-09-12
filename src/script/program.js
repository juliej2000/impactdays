const programHeaders = document.querySelectorAll(".program-header");
const dateButtons = document.querySelectorAll(".date-button");

dateButtons.forEach(button => {

    button.addEventListener("click", () => {

        const day = button.dataset.day;

        dateButtons.forEach(otherButton => {
            otherButton.classList.toggle("active", otherButton === button);
        });

        document.querySelectorAll("[data-friday][data-saturday]").forEach(eventText => {
            eventText.textContent = eventText.dataset[day];
        });

        document.querySelector("#program")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

programHeaders.forEach(header => {

    header.addEventListener("click", () => {

        const item = header.parentElement;
        const icon = header.querySelector(".icon");

        // Luk alle andre
        document.querySelectorAll(".program-item").forEach(otherItem => {

            if (otherItem !== item) {
                otherItem.classList.remove("active");

                const otherIcon = otherItem.querySelector(".icon");

                if (otherIcon) {
                    otherIcon.textContent = "+";
                }
            }

        });

        // Åbn/luk det valgte
        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            icon.textContent = "−";
        } else {
            icon.textContent = "+";
        }

    });

});