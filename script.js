document.addEventListener('DOMContentLoaded', () => {
    
    const card = document.querySelector('.card');
    const cardFront = document.querySelector('.card-front');
    const cardBack = document.querySelector('.card-back');
    const nameLink = document.getElementById('portfolio-link');
    const downloadButton = document.getElementById('download-resume');

    nameLink.addEventListener('click', (e) => {
        e.stopPropagation();
        window.open('https://aliyevanargiz.github.io/portfolio/', '_blank');
    });

    downloadButton.addEventListener('click', (e) => {
        e.stopPropagation();
        downloadResume();
    });

    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    });

    card.addEventListener('click', () => {
        card.classList.toggle('flip');
    });

    function downloadResume() {
        const link = document.createElement('a');
        link.href = 'Nargiz_Aliyeva_Resume.pdf';
        link.download = 'C:/Users/hp/Desktop/my-visitcard/Nargiz_Aliyeva_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}); 