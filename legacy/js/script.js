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

            const href = link.getAttribute("href");

            if (!href || href === "#") {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });
                return;
            }

            const target = document.querySelector(href);

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

    const animateCounters = () => {
        document.querySelectorAll(".stat h2").forEach(counter => {
            const rawText = counter.innerText.trim();
            const hasPlus = rawText.startsWith("+");
            const hasPercent = rawText.includes("%");
            const hasMillion = rawText.includes("M");

            // Extrai o valor numérico considerando decimais (vírgula ou ponto)
            const cleanNumberStr = rawText.replace(/[^\d.,]/g, "").replace(",", ".");
            const targetNumber = parseFloat(cleanNumberStr);

            if (isNaN(targetNumber)) return;

            let current = 0;
            const steps = 70;
            const increment = targetNumber / steps;

            const timer = setInterval(() => {
                current += increment;

                if (current >= targetNumber) {
                    current = targetNumber;
                    clearInterval(timer);
                }

                let displayStr = "";
                if (hasPercent) {
                    displayStr = current.toFixed(1).replace(".", ",") + "%";
                } else if (hasMillion) {
                    displayStr = current.toFixed(1).replace(".", ",") + "M";
                } else {
                    displayStr = Math.floor(current).toString();
                }

                if (hasPlus) {
                    displayStr = "+" + displayStr;
                }

                counter.innerHTML = displayStr;
            }, 20);
        });
    };

    // Anima apenas quando a seção Hero estiver visível
    const heroSection = document.querySelector("#hero");
    if (heroSection) {
        let animated = false;
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated) {
                    animated = true;
                    animateCounters();
                }
            });
        }, { threshold: 0.2 });
        heroObserver.observe(heroSection);
    } else {
        animateCounters();
    }

});