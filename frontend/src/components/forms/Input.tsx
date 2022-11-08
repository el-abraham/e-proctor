export default function Input() {
    return(
        <div className="form-control w-full max-w-xs">
            <label className="label mb-1">
                <span className="label-text font-semibold text-sm font-['Open Sans']">NAMA UJIAN</span>
            </label>
            <input type="text" placeholder="Masukkan nama ujian ...." className="input input-bordered w-[610px] max-w-xs" />
        </div>
    );
}