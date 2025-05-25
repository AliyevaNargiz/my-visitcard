document.addEventListener('DOMContentLoaded', () => {
    // Card flip functionality
    const card = document.querySelector('.card');
    const cardFront = document.querySelector('.card-front');
    const cardBack = document.querySelector('.card-back');
    const nameLink = document.getElementById('portfolio-link');
    const downloadButton = document.getElementById('download-resume');

    // Prevent flip when clicking on specific elements
    nameLink.addEventListener('click', (e) => {
        e.stopPropagation();
        // Add the portfolio website URL here
        window.open('https://aliyevanargiz.github.io/portfolio/', '_blank');
    });

    downloadButton.addEventListener('click', (e) => {
        e.stopPropagation();
        downloadResume();
    });

    // Prevent flip on social icons
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    card.addEventListener('click', () => {
        card.classList.toggle('flip');
    });

    // Function to download resume
    function downloadResume() {
        // Create a dummy resume file for demo purposes
        // In a real scenario, you would link to an actual resume file
        const link = document.createElement('a');
        link.href = 'YOUR_RESUME_URL';
        link.download = 'Nargiz_Aliyeva_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Show a download notification
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = 'Resume download started!';
        document.body.appendChild(notification);

        // Style the notification
        Object.assign(notification.style, {
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '#2ecc71',
            color: 'white',
            padding: '10px 20px',
            borderRadius: '5px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            zIndex: '1000',
            opacity: '0',
            transition: 'opacity 0.3s ease'
        });

        // Show and then hide notification
        setTimeout(() => { notification.style.opacity = '1'; }, 100);
        setTimeout(() => { 
            notification.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}); 