// submit-registration.js
(() => {
    console.log("Submit JS Loaded ✅");

    const form = document.getElementById('regForm');
    if (!form) return;

    const submitBtn = form.querySelector('[type="submit"]');
    const GAS_URL = "https://script.google.com/macros/s/AKfycbxz9tFd5hSETMCL2VS8sD7WKPvq-Q5O98l9I2582yEFDXVdGIRpuXvouZY3gz0CNy1d0g/exec";

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const fileInput = form.querySelector('input[name="receipt"]');
        const file = fileInput.files[0];

        if (!file) {
            Swal.fire({
                icon: 'warning',
                title: 'Receipt Required',
                text: 'Please upload a payment receipt to continue.'
            });
            return;
        }

        submitBtn.disabled = true;

        // Show loader using SweetAlert2
        Swal.fire({
            title: 'Submitting...',
            text: 'Please wait while we process your registration.',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        try {
            // Convert file to base64
            const base64 = await new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = () => {
                    const base64String = reader.result.split(',')[1];
                    resolve(base64String);
                };
                reader.onerror = reject;
                reader.readAsDataURL(file);
            });

            // Create payload object
            const payload = {
                title: form.querySelector('[name="title"]').value,
                firstName: form.querySelector('[name="firstName"]').value,
                middleName: form.querySelector('[name="middleName"]').value,
                lastName: form.querySelector('[name="lastName"]').value,
                phone: form.querySelector('[name="phone"]').value,
                email: form.querySelector('[name="email"]').value,
                qualification: form.querySelector('[name="qualification"]').value,
                designation: form.querySelector('[name="designation"]').value,
                state: form.querySelector('[name="state"]').value,
                city: form.querySelector('[name="city"]').value,
                organization: form.querySelector('[name="organization"]').value,
                nrCategory: form.querySelector('[name="nrCategory"]').value,
                accompany: form.querySelector('[name="accompany"]').value,
                residential_2d1n: form.querySelector('[name="residential_2d1n"]').value,
                residential_3d2n: form.querySelector('[name="residential_3d2n"]').value,
                transactionId: form.querySelector('[name="transactionId"]').value,
                fileData: base64,
                fileName: file.name,
                mimeType: file.type
            };

            console.log("Submitting payload:", { ...payload, fileData: 'BASE64_STRING_HIDDEN' });

            const res = await fetch(GAS_URL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({ data: JSON.stringify(payload) })
            });

            const resultText = await res.text();
            console.log("Response:", resultText);

            if (resultText.includes("Success")) {
                Swal.fire({
                    icon: 'success',
                    title: 'Registration Successful!',
                    text: 'Thank you! Your registration has been submitted. Our Team will contact you soon.',
                    confirmButtonText: 'OK'
                });
                form.reset();
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Submission Failed!',
                    text: resultText
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error Occurred',
                text: error.message
            });
        } finally {
            submitBtn.disabled = false;
        }
    });
})();
