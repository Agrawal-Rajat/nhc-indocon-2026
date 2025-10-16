// public/assets/js/submit-registration.js
(function () {
    const form = document.querySelector('form.reg-card__body');
    if (!form) return;

    const GAS_URL = 'https://script.google.com/macros/s/AKfycby5m5G2V2J41X7ykhVmpE6GxJt2hfSbzugZKpknIOdkqRteIOJfJ-KF5AfcVbNXnjSl/exec';
    const btn = form.querySelector('button[type="submit"]');

    const setBusy = (b) => { if (btn) { btn.disabled = !!b; btn.textContent = b ? 'Submitting…' : 'Register Now'; } };
    const fail = (m) => { console.error(m); alert(m); };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        setBusy(true);
        try {
            const fd = new FormData(form);
            const file = fd.get('receipt');
            if (!file || (typeof file === 'object' && file.size === 0)) { setBusy(false); return fail('Please attach the receipt.'); }

            // 1) Apps Script upload
            const gasResp = await fetch(GAS_URL, { method: 'POST', body: fd, redirect: 'follow', credentials: 'omit' });
            const gasText = await gasResp.text();       // 👈 raw text for debugging
            let gasJson = {};
            try { gasJson = JSON.parse(gasText); } catch { }
            console.log('[GAS] status:', gasResp.status, 'text:', gasText); // 👈 check Console

            if (!gasResp.ok || !gasJson.ok) throw new Error(gasJson.error || `Upload failed (status ${gasResp.status})`);
            const fileUrl = gasJson.fileUrl;
            if (!fileUrl) throw new Error('Apps Script did not return fileUrl');

            // 2) Send fields + fileUrl to /api/register
            fd.delete('receipt');
            fd.append('receiptUrl', fileUrl);

            const apiResp = await fetch('/api/register', { method: 'POST', body: fd });
            const apiJson = await apiResp.json().catch(() => ({}));
            if (!apiResp.ok || !apiJson.ok) throw new Error(apiJson.error || `Registration failed (status ${apiResp.status})`);

            window.location.href = '/thank-you.html';
        } catch (err) {
            fail('Sorry, there was a problem: ' + (err?.message || err));
            setBusy(false);
        }
    });
})();
