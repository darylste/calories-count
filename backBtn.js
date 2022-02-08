const backBtn = document.getElementById('backBtn');

const goBack = (event) => {
	history.back();
};

// event listener
backBtn.addEventListener('click', goBack);
