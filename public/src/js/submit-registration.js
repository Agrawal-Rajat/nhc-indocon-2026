// submit-registration.js
(() => {
    console.log("Submit JS Loaded ✅");

    const form = document.getElementById('regForm');
    if (!form) return;

    const submitBtn = form.querySelector('[type="submit"]');
    const GAS_URL = "https://script.google.com/macros/s/AKfycbw6VnErhKLx6L_P6IZ1KDIxc2dJLyj0dfSLgVE9TIeAYNtb9ROSD3Rs_5skJEIBsn-n/exec";

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const fd = new FormData(form);

        // Convert file to base64 for Google Apps Script
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

            // Create URL-encoded form data with base64 file
            const formData = new FormData();

            // Add all form fields
            for (const [key, value] of fd.entries()) {
                if (key !== 'receipt') {
                    formData.append(key, value);
                }
            }

            // Add file data
            formData.append('receipt', base64);
            formData.append('receiptName', file.name);
            formData.append('receiptType', file.type);

            console.log("Submitting with file:", file.name, file.type);

            const res = await fetch(GAS_URL, {
                method: "POST",
                body: formData
            });

            const resultText = await res.text();
            console.log("Response:", resultText);

            if (resultText.includes("Success")) {
                alert("Registration submitted successfully! ✅");
                form.reset();
            } else {
                alert("Submission completed but please verify: " + resultText);
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