// Subtle fade-in animation for posts or elements
document.addEventListener('DOMContentLoaded', () => {
    const posts = document.querySelectorAll('.post');
    posts.forEach((post, index) => {
        post.style.opacity = 0;
        setTimeout(() => {
            post.style.transition = 'opacity 0.6s ease-in';
            post.style.opacity = 1;
        }, index * 200);
    });
});
