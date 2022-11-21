export default function ModalGabungUjianGagal() {
  return (
    <>
      {/* MODAL GABUNG UJIAN GAGAL */}
      <input type="checkbox" id="gabung-ujian-gagal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="gabung-ujian-gagal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Gabung Ujian</h3>
          <p className="py-4">
            Kode yang anda masukkan tidak valid. Mohon coba lagi.
          </p>
          <div className="modal-action">
            <label htmlFor="gabung-ujian-gagal" className="btn">
              Kembali
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
