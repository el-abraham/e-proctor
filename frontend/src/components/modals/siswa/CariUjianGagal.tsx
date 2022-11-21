export default function ModalCariUjianGagal() {
  return (
    <>
      {/* MODAL CARI UJIAN GAGAL */}
      <input type="checkbox" id="cari-ujian-gagal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="cari-ujian-gagal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">Cari Ujian</h3>
          <p className="py-4">
            Sistem tidak menemukan ujian yang anda cari. Mohon ketikkan nama
            ujian dengan tepat!
          </p>
          <div className="modal-action">
            <label htmlFor="cari-ujian-gagal" className="btn">
              Kembali
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
