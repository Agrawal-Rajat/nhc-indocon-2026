// public/assets/js/submit-registration.js
(function () {
    const form = document.querySelector('form.reg-card__body');
    if (!form) return;

    // Deployed Apps Script Web App URL (Anyone with the link)
    const GAS_URL = 'https://script.google.com/macros/s/AKfycbzasyDHva9DUz0Yp0klNvJbbESb8gX2I0GOXqNUM1jl763WLrRhph7Sj1VSwht0pHr4/exec';

    const btn = form.querySelector('button[type="submit"]');
    const showError = (msg) => {
        console.error(msg);
        alert(msg); // swap with your own inline toast if you prefer
    };

    const setBusy = (busy) => {
        if (!btn) return;
        btn.disabled = !!busy;
        btn.textContent = busy ? 'Submitting…' : 'Register Now';
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        setBusy(true);

        try {
            const fd = new FormData(form);

            // Basic client file checks
            const file = fd.get('receipt');
            if (!file || (typeof file === 'object' && file.size === 0)) {
                setBusy(false);
                return showError('Please attach the payment screenshot/receipt.');
            }
            if (file.size > 10 * 1024 * 1024) {
                setBusy(false);
                return showError('File is larger than 10MB. Please upload a smaller file.');
            }

            // 1) Upload to Apps Script (runs as YOU → lands in your My Drive)
            const gasResp = await fetch(GAS_URL, {
                method: 'POST',
                body: fd,
                redirect: 'follow',
                credentials: 'omit',
            });

            // If GAS returns HTML (auth page) you'll get a parser error here — means the web app isn't deployed to "Anyone with the link".
            const gasJson = await gasResp.json().catch(() => ({}));
            if (!gasResp.ok || !gasJson?.ok) {
                throw new Error(gasJson?.error || `Upload failed (status ${gasResp.status})`);
            }
            const fileUrl = gasJson.fileUrl;
            if (!fileUrl) throw new Error('Apps Script did not return fileUrl');

            // 2) Post to your Vercel API with URL only (no binary now)
            fd.delete('receipt');
            fd.append('receiptUrl', fileUrl);

            const apiResp = await fetch('/api/register', {
                method: 'POST',
                body: fd,
                redirect: 'follow',
                credentials: 'omit',
            });
            const apiJson = await apiResp.json().catch(() => ({}));
            if (!apiResp.ok || !apiJson?.ok) {
                throw new Error(apiJson?.error || `Registration failed (status ${apiResp.status})`);
            }

            // 3) Success — redirect to a thank-you page
            window.location.href = '/thank-you.html';

        } catch (err) {
            showError('Sorry, there was a problem: ' + (err?.message || err));
            setBusy(false);
        }
    });
})();
