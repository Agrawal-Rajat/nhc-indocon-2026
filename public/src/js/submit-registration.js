// submit-registration.js
(() => {
    console.log("Submit JS Loaded ✅");

    const form = document.getElementById('regForm');
    if (!form) return;

    const submitBtn = form.querySelector('[type="submit"]');
    const GAS_URL = "https://script.google.com/macros/s/AKfycbw6VnErhKLx6L_P6IZ1KDIxc2dJLyj0dfSLgVE9TIeAYNtb9ROSD3Rs_5skJEIBsn-n/exec";

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const fileInput = form.querySelector('input[name="receipt"]');
        const file = fileInput.files[0];

        if (!file) {
            alert("Please upload a payment receipt!");
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = "Submitting...";

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
                alert("Registration submitted successfully! ✅");
                form.reset();
            } else {
                alert("Error: " + resultText);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error submitting form: " + error.message);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Register Now";
        }
    });
})();