document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-rekrutmen');
    const notifBox = document.getElementById('notifikasi');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Ambil nilai input
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const posisi = document.getElementById('posisi-pilihan').value;
        const ipk = parseFloat(document.getElementById('ipk').value);

        // Sistem Validasi Otomatis HRIS (Poin 2 - Verifikasi Berkas & Minimum)
        let statusLolos = false;
        let pesan = '';

        if (posisi === 'Junior') {
            if (ipk >= 3.25) {
                statusLolos = true;
                pesan = `Selamat ${nama}, berkas Anda untuk posisi Analis Kebijakan Junior BERHASIL diverifikasi oleh sistem HRIS. Kartu Ujian & Jadwal Tes Kasus telah dikirim ke ${email}.`;
            } else {
                pesan = `Mohon maaf ${nama}, berkas Anda belum memenuhi batas kualifikasi minimum IPK (3.25) untuk posisi Analis Kebijakan Junior.`;
            }
        } else if (posisi === 'Senior') {
            if (ipk >= 3.50) {
                statusLolos = true;
                pesan = `Selamat ${nama}, berkas lamaran Analis Kebijakan Senior BERHASIL terverifikasi. Tim HRIS Mandala Policy Consulting akan menghubungi Anda untuk seleksi tahap berikutnya.`;
            } else {
                pesan = `Mohon maaf ${nama}, berkas Anda belum memenuhi batas kualifikasi minimum IPK (3.50) untuk posisi Analis Kebijakan Senior.`;
            }
        }

        // Tampilkan Hasil Evaluasi Otomatis
        notifBox.classList.remove('hidden', 'notif-success', 'notif-error');
        if (statusLolos) {
            notifBox.classList.add('notif-success');
        } else {
            notifBox.classList.add('notif-error');
        }
        notifBox.innerText = pesan;

        // Reset Form jika berhasil
        if(statusLolos) {
            form.reset();
        }
    });
});