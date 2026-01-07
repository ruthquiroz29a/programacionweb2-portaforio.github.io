document.addEventListener('DOMContentLoaded', function () {
	const profile = document.querySelector('.profile-pic');
	const modal = document.getElementById('img-modal');
	const modalImg = document.getElementById('img-modal-img');
	const modalClose = document.querySelector('.img-modal-close');
	const backdrop = document.querySelector('.img-modal-backdrop');

	if (!profile || !modal || !modalImg) return;

	function openModal(src, alt) {
		modalImg.src = src;
		modalImg.alt = alt || 'Foto de perfil ampliada';
		modal.classList.add('activo');
		modal.setAttribute('aria-hidden', 'false');
	}

	function closeModal() {
		modal.classList.remove('activo');
		modal.setAttribute('aria-hidden', 'true');
		// limpiar src para evitar mantener memoria en algunos navegadores
		setTimeout(() => { modalImg.src = ''; }, 200);
	}

	profile.addEventListener('click', () => openModal(profile.src, profile.alt));
	profile.addEventListener('keypress', (e) => { if (e.key === 'Enter') openModal(profile.src, profile.alt); });
	modalClose && modalClose.addEventListener('click', closeModal);
	backdrop && backdrop.addEventListener('click', closeModal);
	document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
});

