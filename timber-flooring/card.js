        // Reveal on scroll
        const revealOnScroll = () => {
            document.querySelectorAll('.reveal').forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        window.addEventListener('load', revealOnScroll);

        // Toggle direction expansion
        function toggleDirection(element) {
            element.classList.toggle('expanded');
        }
