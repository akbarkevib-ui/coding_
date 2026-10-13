// Fungsi untuk mengganti antar halaman (Gallery & Pendaftaran)
function showSection(sectionId) {
    // Sembunyikan semua section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Tampilkan section yang dipilih
    document.getElementById(sectionId).classList.add('active');

    // Update status aktif pada tombol navigasi
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById('btn-' + sectionId).classList.add('active');
}

// Menangani event submit form
document.getElementById('formDaftar').addEventListener('submit', function(event) {
    // Mencegah halaman reload saat submit
    event.preventDefault();

    // Memunculkan dialog confirm
    let konfirmasi = confirm("Apakah Anda sudah yakin untuk menyimpan?");

    // Jika pilih "Ya" (OK)
    if (konfirmasi) {
        // Mengambil nilai dari input form
        let nik = document.getElementById('nik').value;
        let nama = document.getElementById('nama').value;
        let jk = document.querySelector('input[name="jk"]:checked').value;
        let nohp = document.getElementById('nohp').value;
        let alamat = document.getElementById('alamat').value;
        let bahasa = document.getElementById('bahasa').value;

        // Memasukkan nilai ke dalam area hasil
        document.getElementById('res-nik').innerText = nik;
        document.getElementById('res-nama').innerText = nama;
        document.getElementById('res-jk').innerText = jk;
        document.getElementById('res-nohp').innerText = nohp;
        document.getElementById('res-alamat').innerText = alamat;
        document.getElementById('res-bahasa').innerText = bahasa;

        // Menampilkan area hasil pendaftaran
        document.getElementById('hasilPendaftaran').classList.remove('hidden');
    }
});