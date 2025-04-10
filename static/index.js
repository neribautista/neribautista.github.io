document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const msgInput = document.getElementById('msg');
    const modal = document.getElementById('appreciationModal');
    const modalContent = document.getElementById('appreciationMessage');
    const closeModal = document.querySelector('.close');

    form.addEventListener('submit', function (event) {
        let isValid = true;

        if (nameInput.value.trim() === '') {
            isValid = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Name is required'
            });
        } else if (/\d/.test(nameInput.value)) {
            isValid = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Name should not contain numbers'
            });
        }

        if (emailInput.value.trim() === '') {
            isValid = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email is required'
            });
        } else if (!validateEmail(emailInput.value)) {
            isValid = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email is not valid'
            });
        }

        if (msgInput.value.trim() === '') {
            isValid = false;
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Message is required'
            });
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            event.preventDefault();
            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const appreciationMessage = `
                <p>Thank you, ${name}, for reaching out!</p>
                <p>We appreciate you taking the time to contact us. We will get back to you at ${email} as soon as possible.</p>
            `;
            modalContent.innerHTML = appreciationMessage;
            modal.style.display = 'block';
            form.reset();
        }
    });

    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});