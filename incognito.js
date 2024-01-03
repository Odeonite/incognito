<script>
document.addEventListener('DOMContentLoaded', function () {
    const body = document.querySelector('body');

    // Create grid-like background
    for (let i = 0; i < 100; i++) {
        const span = document.createElement('span');
        body.appendChild(span);
    }

    // Add event listener to each span for hover effect
    const spans = document.querySelectorAll('span');
    spans.forEach(span => {
        span.addEventListener('mouseover', () => {
            span.style.background = '#0f0';
        });
        span.addEventListener('mouseout', () => {
            span.style.background = '#181818';
        });
    });
});
</script>
