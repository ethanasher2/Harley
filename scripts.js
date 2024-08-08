document.addEventListener('DOMContentLoaded', function() {
    const heartsContainer = document.getElementById('hearts');
    const numberOfHearts = 1000;

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDuration = (Math.random() * 5 + 3) + 's';
        heart.style.opacity = Math.random() * 0.5 + 0.5;
        heartsContainer.appendChild(heart);
    }

    document.getElementById('giftLetter').addEventListener('click', function() {
        this.style.opacity = 0;

        setTimeout(() => {
            this.style.display = 'none';
            const message = document.getElementById('message');
            message.style.display = 'block';
            message.style.opacity = 1;

            document.getElementById('hearts').style.display = 'none';
        }, 500);
    });

    document.getElementById('showHeart').addEventListener('click', function() {
        const message = document.getElementById('message');
        message.style.opacity = 0;

        setTimeout(() => {
            message.style.display = 'none';
            const bigHeartContainer = document.getElementById('bigHeartContainer');
            bigHeartContainer.style.display = 'block';
        }, 500);
    });
});
