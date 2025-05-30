function updateHeroDimensions() {
    const nav = document.getElementById('navbar');
    const hero = document.querySelector('.hero-section');

    if (!nav || !hero) return;

    const navHeightPx = nav.offsetHeight;
    const viewportHeightPx = window.innerHeight;

    hero.style.minHeight = (viewportHeightPx - navHeightPx) + 'px';

    hero.style.marginTop = navHeightPx + 'px';
}

window.addEventListener('load', updateHeroDimensions);
window.addEventListener('resize', updateHeroDimensions);

document.addEventListener("DOMContentLoaded", () => {
    const dropdownLinks = document.querySelectorAll(".dropdown-link");

    dropdownLinks.forEach(link => {
        link.addEventListener("click", () => {
            const details = link.closest("details");
            if (details && details.open) {
                details.removeAttribute("open"); S
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const link = document.getElementById("downloadLink");
    const message = document.getElementById("downloadThanks");

    link.addEventListener("click", function () {
        message.classList.remove("hidden");
        message.classList.add("visible");

        setTimeout(() => {
            message.classList.remove("visible");
            message.classList.add("hidden");
        }, 6000);
    });
});

var form = document.getElementById("feedbackForm");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("formThanks");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.classList.remove("hidden");
            status.classList.add("visible");
            form.reset();

            setTimeout(() => {
                status.classList.remove("visible");
                status.classList.add("hidden");
            }, 6000);
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.innerHTML = "Oops! Something went wrong. Please try again.";
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! Something went wrong. Please try again.";
    });
}
form.addEventListener("submit", handleSubmit);
