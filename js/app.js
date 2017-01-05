document.addEventListener('DOMContentLoaded',function() {
	const slider = document.querySelector('.items');
	let isDown = false;
	let startX;
	let scrollLeft;

	function handleDown(e) {
		isDown = true;
		slider.classList.add('active');
		startX = e.pageX - slider.offsetLeft;
		scrollLeft = slider.scrollLeft;
	}

	function handleUp() {
		isDown = false;
		slider.classList.remove('active');

	}

	function handleLeave() {
		isDown = false;
		slider.classList.remove('active');

	}

	function handleMove(e) {
		if(!isDown) return;
		e.preventDefault();
		const x = e.pageX - slider.offsetLeft;
		const walk = (x -startX) * 3;
		slider.scrollLeft = scrollLeft - walk;
	}

	slider.addEventListener('mousedown', handleDown);
	slider.addEventListener('mouseup', handleUp);
	slider.addEventListener('mouseleave', handleLeave);
	slider.addEventListener('mousemove', handleMove);
});
