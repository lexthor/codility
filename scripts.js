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

window.addEventListener('DOMContentLoaded', function() {
    const firstLink = document.querySelector('#challenge-list a');
    if (firstLink) firstLink.classList.add('active');
    
    fetch('questions/1-binary-gap.html')
        .then(res => res.text())
        .then(html => {
            document.getElementById('solution-display').innerHTML = html;
            // Attach copy button logic here if needed
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
        });
});

// Simple toggler for navigation
document.querySelectorAll('#challenge-list a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        // Remove active from all links
        document.querySelectorAll('#challenge-list a').forEach(l => l.classList.remove('active'));
        // Add active to clicked link
        this.classList.add('active');
        // Load the corresponding question file as before...
        const file = 'questions/' + this.getAttribute('href').replace('#', '') + '.html';
        fetch(file)
            .then(res => res.text())
            .then(html => {
                document.getElementById('solution-display').innerHTML = html;
                // Re-attach copy button logic
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
            });
    });
});