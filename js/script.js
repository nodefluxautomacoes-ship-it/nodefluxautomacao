/*=====================================================
NODE FLUX
SCRIPT
=====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=============================
    HEADER
    =============================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.classList.add("header-scroll");

        } else {

            header.classList.remove("header-scroll");

        }

    });

    /*=============================
    SMOOTH LINKS
    =============================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", e => {

            const target = document.querySelector(link.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    /*=============================
    REVEAL
    =============================*/

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });

    document.querySelectorAll("section").forEach(sec => {

        sec.classList.add("hidden");

        observer.observe(sec);

    });

    /*=============================
    COUNTERS
    =============================*/

    document.querySelectorAll(".stat h2").forEach(counter => {

        const finalValue = counter.innerText;

        const number = parseInt(finalValue.replace(/\D/g, ""));

        if (isNaN(number)) return;

        let current = 0;

        const increment = number / 80;

        const timer = setInterval(() => {

            current += increment;

            if (current >= number) {

                current = number;

                clearInterval(timer);

            }

            if (finalValue.includes("%")) {

                counter.innerHTML = Math.floor(current) + "%";

            } else if (finalValue.includes("M")) {

                counter.innerHTML = (current / 100).toFixed(1) + "M";

            } else {

                counter.innerHTML = Math.floor(current);

            }

        }, 18);

    });

});