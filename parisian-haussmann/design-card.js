// Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// DNA chain: fetch and inject
const dnaPreview = document.querySelector('.dna-chain-preview');

if (dnaPreview) {
    fetch('dna-chain.txt')
        .then(res => res.text())
        .then(html => { dnaPreview.innerHTML = html; })
        .catch(() => { dnaPreview.textContent = '[DNA chain failed to load]'; });
}

// DNA expand toggle
const dnaBtn = document.querySelector('.dna-expand-btn');

if (dnaBtn && dnaPreview) {
    dnaBtn.addEventListener('click', () => {
        const isExpanded = dnaPreview.classList.toggle('expanded');
        dnaBtn.textContent = isExpanded ? 'Collapse Chain' : 'Expand Full Chain';
    });
}

// Palette swatch interaction
const swatches = document.querySelectorAll('.palette-swatch');
swatches.forEach(swatch => {
    swatch.addEventListener('mouseenter', () => {
        swatches.forEach(s => s.style.flex = '1');
        swatch.style.flex = '2';
    });
});
