const shareButton = document.querySelector('[data-share]');
const socials = document.querySelector('[data-socials]');
const socialItems = document.querySelector('[data-items]');

const toggleShareOptions = () => {
	socials.classList.toggle('active');
	shareButton.classList.toggle('filter');
	socialItems.classList.toggle('show');
};

shareButton.addEventListener('click', toggleShareOptions);
