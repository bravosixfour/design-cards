        const revealOnScroll = () => {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(el => {
                const rect = el.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    el.classList.add('visible');
                }
            });
        };

        window.addEventListener('scroll', revealOnScroll);
        window.addEventListener('load', revealOnScroll);

        function toggleDirection(element) {
            element.classList.toggle('expanded');
        }
