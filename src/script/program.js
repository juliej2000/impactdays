const programHeaders = document.querySelectorAll(".program-header");

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