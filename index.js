// const dataPeserta = [
//   { id: 1, nama: "Andi Pratama", kelas: "Fullstack A", score: 85 },
//   { id: 2, nama: "Siti Rahma", kelas: "Fullstack B", score: 92 },
//   { id: 3, nama: "Budi Santoso", kelas: "Backend Core", score: 78 },
//   { id: 4, nama: "Citra Dewi", kelas: "Fullstack A", score: 88 },
//   { id: 5, nama: "Eko Prasetyo", kelas: "Fullstack B", score: 65 },
//   { id: 6, nama: "Farida Utami", kelas: "Backend Core", score: 95 },
//   { id: 7, nama: "Gilang Permana", kelas: "Fullstack A", score: 70 },
//   { id: 8, nama: "Hany Lestari", kelas: "Backend Core", score: 83 },
//   { id: 9, nama: "Ira Setiawan", kelas: "Fullstack B", score: 58 },
//   { id: 10, nama: "Rian Hidayat", kelas: "Backend Core", score: 90 },
// ];

// let projectsHtml = "";

// function renderProjects(data) {
//   const container = document.getElementById("listMurid");

//   projectsHtml = "";

//   for (let i = 0; i < data.length; i++) {
//     const dataMurid = data[i];
//     console.log(dataMurid);

//     projectsHtml += `
//   <tr class="table-light text-dark fw-bold">
//     <td>${dataMurid.id}</td>
//     <td>${dataMurid.nama}</td>
//     <td>${dataMurid.kelas}</td>
//     <td>${dataMurid.score}</td>
//   </tr>`;

//     if (data.length === 0) {
//       projectsHtml = `<tr><td colspan="4" class="text-center text-muted py-3">Data tidak ditemukan</td></tr>`;
//     }

//     container.innerHTML = projectsHtml;
//   }
// }

// renderProjects();

// const searchInput = document.getElementById("filter");

// // Menggunakan event 'input' agar tabel otomatis tersaring secara Real-Time saat mengetik
// searchInput.addEventListener("input", function (event) {
//   const keyword = event.target.value.toLowerCase(); // Ambil teks input dan ubah ke huruf kecil

//   // Saring data berdasarkan nama atau nama kelas
//   const dataTerfilter = dataPeserta.filter(function (murid) {
//     const namaCocok = murid.nama.toLowerCase().includes(keyword);
//     const kelasCocok = murid.kelas.toLowerCase().includes(keyword);

//     return namaCocok || kelasCocok; // Lolos filter jika nama ATAU kelasnya cocok
//   });

//   // Render ulang tabel menggunakan data yang sudah disaring
//   renderProjects(dataTerfilter);
// });

const dataPeserta = [
  { id: 1, nama: "Andi Pratama", kelas: "Fullstack A", score: 85 },
  { id: 2, nama: "Siti Rahma", kelas: "Fullstack B", score: 92 },
  { id: 3, nama: "Budi Santoso", kelas: "Backend Core", score: 78 },
  { id: 4, nama: "Citra Dewi", kelas: "Fullstack A", score: 88 },
  { id: 5, nama: "Eko Prasetyo", kelas: "Fullstack B", score: 65 },
  { id: 6, nama: "Farida Utami", kelas: "Backend Core", score: 95 },
  { id: 7, nama: "Gilang Permana", kelas: "Fullstack A", score: 70 },
  { id: 8, nama: "Hany Lestari", kelas: "Backend Core", score: 83 },
  { id: 9, nama: "Ira Setiawan", kelas: "Fullstack B", score: 58 },
  { id: 10, nama: "Rian Hidayat", kelas: "Backend Core", score: 90 },
];

let projectsHtml = ""; // Diubah ke string kosong karena akan menampung kode HTML, bukan array

// PERBAIKAN 1: Tambahkan parameter 'data' agar fungsi ini bisa menerima data yang sudah difilter
function renderProjects(data) {
  const container = document.getElementById("listMurid");
  const totalNilai = document.getElementById("totalNilai");
  let totalSelesai = 0;

  projectsHtml = "";

  for (let i = 0; i < data.length; i++) {
    const dataMurid = data[i];
    console.log(dataMurid);

    projectsHtml += `
  <tr class="table-light text-dark fw-bold">
    <td>${dataMurid.id}</td>
    <td>${dataMurid.nama}</td>
    <td>${dataMurid.kelas}</td>
    <td>${dataMurid.score}</td>
  </tr>`;

    totalSelesai += Number(dataMurid.score);
  }

  if (data.length === 0) {
    projectsHtml = `<tr><td colspan="4" class="text-center text-muted py-3">Data tidak ditemukan</td></tr>`;
  }

  container.innerHTML = projectsHtml;

  const rataRata =
    data.length > 0 ? (totalSelesai / data.length).toFixed(1) : 0;

  totalNilai.innerHTML = `
    <span class="badge bg-success fs-6 px-3 py-1">
      Rata-rata: ${rataRata}
    </span>
  `;
}

renderProjects(dataPeserta);

const searchInput = document.getElementById("filter");

// Menggunakan event 'input' agar tabel otomatis tersaring secara Real-Time saat mengetik
searchInput.addEventListener("input", function (event) {
  const keyword = event.target.value.toLowerCase();

  const dataTerfilter = dataPeserta.filter(function (murid) {
    const namaCocok = murid.nama.toLowerCase().includes(keyword);
    const kelasCocok = murid.kelas.toLowerCase().includes(keyword);

    return namaCocok || kelasCocok;
  });

  renderProjects(dataTerfilter);
});
