function renderProjects(data) {
  const container = document.getElementById("listMurid");
  const totalNilai = document.getElementById("totalNilai");

  // 1. MENGGUNAKAN .map() UNTUK MERENDER DATA KE HTML
  let projectsHtml = data
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
    projectsHtml = `<tr><td colspan="4" class="text-center text-muted py-3">Data tidak ditemukan</td></tr>`;
  }

  container.innerHTML = projectsHtml;

  // 2. MENGGUNAKAN .reduce() UNTUK MENGHITUNG TOTAL NILAI
  // Angka 0 di akhir adalah nilai awal (initial value) akumulator
  const totalSelesai = data.reduce(function (accumulator, dataMurid) {
    return accumulator + Number(dataMurid.score);
  }, 0);

  // 3. MENGHITUNG RATA-RATA NILAI
  const rataRata =
    data.length > 0 ? (totalSelesai / data.length).toFixed(1) : 0;

  // Menampilkan hasil rata-rata ke elemen totalNilai
  totalNilai.innerHTML = `
    <span class="badge bg-success fs-6 px-3 py-1">
      Rata-rata: ${rataRata}
    </span>
  `;
}
