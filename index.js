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

function renderProjects(data) {
  const container = document.getElementById("listMurid");
  const totalNilai = document.getElementById("totalNilai");

  let htmlHasilMap = data
    .map(function (dataMurid) {
      return `
    <tr class="table-light text-dark fw-bold">
      <td>${dataMurid.id}</td>
      <td>${dataMurid.nama}</td>
      <td>${dataMurid.kelas}</td>
      <td>${dataMurid.score}</td>
    </tr>`;
    })
    .join("");

  if (data.length === 0) {
    htmlHasilMap = `<tr><td colspan="4" class="text-center text-muted py-3">Data tidak ditemukan</td></tr>`;
  }

  container.innerHTML = htmlHasilMap;

  const totalSelesai = data.reduce(function (accumulator, dataMurid) {
    return accumulator + Number(dataMurid.score);
  }, 0);

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
searchInput.addEventListener("input", function (event) {
  const keyword = event.target.value.toLowerCase();

  const dataTerfilter = dataPeserta.filter(function (murid) {
    const namaCocok = murid.nama.toLowerCase().includes(keyword);
    const kelasCocok = murid.kelas.toLowerCase().includes(keyword);

    return namaCocok || kelasCocok;
  });

  renderProjects(dataTerfilter);
});
