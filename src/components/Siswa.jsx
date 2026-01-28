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
      <form onSubmit={tambahSiswa}>
        <input
          type="text"
          name="nama"
          placeholder="Nama siswa"
          required
        />
        <input
          type="number"
          name="nilai"
          placeholder="Nilai siswa"
          required/>
        <button className="btn tambah" type="submit">Tambah Data</button>
        <button className="btn reset" type="button" onClick={resetSiswa}>Reset Data</button>
      </form>
      <ul>
        {siswa.map(({ id, nama, nilai }) => (
          <li key={id}>
            {/* Template Literal */}
            {`${nama} | Nilai: ${nilai} | Status: `}
            
            {/* Ternary Operator */}
            <strong>
              {nilai >= 75 ? "Lulus" : "Tidak Lulus"}
            </strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Siswa;