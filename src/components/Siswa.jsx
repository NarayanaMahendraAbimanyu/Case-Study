import { useState } from "react";

const Siswa = () => {
  // Array of Object (useState)
  const [siswa, setSiswa] = useState([]);

  // Destructuring event
  const tambahSiswa = (e) => {
    e.preventDefault();

    const nama = e.target.nama.value;
    const nilai = Number(e.target.nilai.value);

    // Spread Operator
    setSiswa([
      ...siswa,
      {
        id: siswa.length + 1,
        nama,
        nilai,
      },
    ]);

    e.target.reset();
  };

  const resetSiswa = (e) => {
    e.preventDefault();
    setSiswa([]);
  }

  return (
    <div>
      <div className="main">
        <h1>DATA NILAI SISWA</h1>
        <form onSubmit={tambahSiswa}>
          <input
            type="text"
            name="nama"
            placeholder=" Masukkan nama siswa"
            required
          />
          <input
            type="number"
            name="nilai"
            placeholder="Masukkan nilai siswa"
            required/>
          <button className="btn tambah" type="submit">Tambah Data</button>
          <button className="btn reset" type="button" onClick={resetSiswa}>Reset Data</button>
        </form>
        <div className="data-siswa">
          <h3>Daftar Nilai Siswa</h3>
          <ul>
            {siswa.length === 0 && <p>Data siswa kosong.</p>}
            {siswa.map(({ id, nama, nilai }) => (
              <li key={id}>
                {`${nama} | Nilai: ${nilai} | Status: `}
                <strong>
                  {nilai >= 75 ? "Lulus" : "Tidak Lulus"}
                </strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Siswa;