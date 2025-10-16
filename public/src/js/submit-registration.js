// submit-registration.js
(() => {
    console.log("Submit JS Loaded ✅");

    const form = document.getElementById('regForm');
    if (!form) return;

    const submitBtn = form.querySelector('[type="submit"]');

    // Your Apps Script Web App URL (must end with /exec)
    const GAS_URL = "https://script.google.com/macros/s/AKfycby62yW_pAkFmxleGevjzoBXGHWQ8q9scDWHbriIa2YfhhNmoHcKQM6YG3WpAm_z-95R/exec";

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const fd = new FormData(form);

        // DEBUG: confirm receipt file exists
        for (const [key, value] of fd.entries()) {
            console.log(key, value instanceof File ? `FILE: ${value.name}` : value);
        }

        submitBtn.disabled = true;
        submitBtn.textContent = "Submitting...";

        try {
            const res = await fetch(GAS_URL, {
                method: "POST",
                body: fd
            });

            const resultText = await res.text();
            console.log("Response:", resultText);

            alert("Registration submitted successfully!");
            form.reset();
        } catch (error) {
            alert("Error: " + error.message);
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Register Now";
        }
    });
})();
