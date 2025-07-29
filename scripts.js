document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const targetId = btn.getAttribute('data-target');
        const codeText = document.getElementById(targetId).textContent;
        navigator.clipboard.writeText(codeText).then(() => {
            const msg = btn.nextElementSibling;
            msg.style.display = 'inline';
            setTimeout(() => { msg.style.display = 'none'; }, 1200);
        });
    });
});

// Simple toggler for navigation
document.querySelectorAll('#challenge-list a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.solution-block').forEach(block => block.style.display = 'none');
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.style.display = 'block';
    });
});