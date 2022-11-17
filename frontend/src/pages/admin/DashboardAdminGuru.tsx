import { MagnifyingGlassIcon, PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Button from "../../components/forms/Button";
import Input from "../../components/forms/Input";
import SidebarAdmin, { NavbarAdmin } from "../../components/sidebar/SidebarAdmin";

type FormValues = {
    firstname: string;
    lastname: string;
    username: string;
    password: string;
};

export default function DashboardAdminGuru(){

    const [ guru, setGuru] = useState<FormValues>({
        firstname: "",
        lastname: "",
        username: "",
        password: "",
    })

    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setGuru({...guru, [e.target.name]: e.target.value});
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(guru);
    }

    return(
        <div className="App bg-[#EFF0F3] flex min-h-screen">

            {/* MODAL ADD GURU */}
            <div>
                <form onSubmit={onSubmit}>
                    <input type="checkbox" id="add-guru" className="modal-toggle" />
                        <div className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <label htmlFor="add-guru" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h3 className="font-bold text-lg">Tambah Guru</h3>
                                <div className="block">
                                    <div className="justify-between flex w-full mt-5">
                                        <p className="self-center">Firstname</p>
                                        <input type="text" name="firstname" value={guru.firstname} onChange={onChange} placeholder="Masukkan firstname ..." className="input input-bordered w-[300px]"/>
                                    </div>
                                    <div className="justify-between flex w-full mt-5">
                                        <p className="self-center">Lastname</p>
                                        <input type="text" id="" name="lastname" value={guru.lastname} onChange={onChange} placeholder="Masukkan lastname ..." className="input input-bordered w-[300px]" />
                                    </div>
                                    <div className="justify-between flex w-full mt-5">
                                        <p className="self-center">Username</p>
                                        <input type="text" id="" name="username" value={guru.username} onChange={onChange} placeholder="Masukkan username ..." className="input input-bordered w-[300px]" />
                                    </div>
                                    <div className="justify-between flex w-full mt-5">
                                        <p className="self-center">Password</p>
                                        <input type="password" id="" name="password" value={guru.password} onChange={onChange} placeholder="Masukkan password ..." className="input input-bordered w-[300px]" />
                                    </div>
                                    <div className="justify-between flex w-full mt-5">
                                        <p className="self-center">Picture</p>
                                        <input type="file" id=""  />
                                    </div>
                                </div>
                                <div className="modal-action">
                                {/* <label type="submit" htmlFor="add-session" className="btn">Simpan</label> */}
                                <Button htmlFor="add-guru" >Simpan</Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* MODAL TRASH ICON */}
            <input type="checkbox" id="trash-icon" className="modal-toggle" />
                <div className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box">
                        <label htmlFor="trash-icon" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="font-bold text-lg">Hapus Guru</h3>
                        <p className="py-4">Apakah anda yakin ingin menghapus guru ini?</p>
                        <div className="modal-action">
                        <label htmlFor="trash-icon" className="btn">Ya</label>
                        <label htmlFor="trash-icon" className="btn">Tidak</label>
                    </div>
                </div>
            </div>

            <SidebarAdmin active={NavbarAdmin.ADMIN}/>
            <div className='mr-[24px] w-full ml-6 pl-[240px] py-8 flex flex-col'>
                {/* SELAMAT DATANG ADMIN */}
                <div className="avatar">
                    <div className="w-[66px] rounded-full">
                        <img src="https://placeimg.com/192/192/people" />
                    </div>
                    <p className="font-['Poppins'] text-sm font-medium ml-5 self-center">Selamat datang, Admin di E-Proctor</p>
                </div>

                <div className="flex mt-8 gap-8">
                    {/* BUTTON */}
                    <label htmlFor="add-guru" className="btn btn-primary">
                        <PlusCircleIcon className="w-6 h-6"/>
                        <p className="font-['Open Sans'] text-sm self-center ml-2">Guru</p>
                    </label>
                    {/* INPUT */}
                    <div className="font-['Open Sans'] items-center relative -mt-2">
                        <label htmlFor="cari-ujian-sukses">
                            <MagnifyingGlassIcon className="w-[20px] h-[20px] flex absolute mt-[22px] ml-[245px]"/>
                            <Input
                            className=" pl-4 pr-[40px] rounded-[20PX] w-[280px] h-11 text-[14px]"
                            placeholder="Cari guru ...."
                            />
                        </label>
                    </div>
                </div>

                {/* TABLE */}
                <div className="overflow-x-auto font-['Roboto'] mt-8 ">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>
                                    <input type="checkbox" checked className="checkbox checkbox-xs" /> 
                                </th>
                                <td>Nomor</td>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Username</th>
                                <th>Picture</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>

                        <tbody className="text-sm">
                            <tr>
                                <th>
                                    <input type="checkbox" checked className="checkbox checkbox-xs" /> 
                                </th>
                                <td>1</td>
                                <td>Floki</td>
                                <td>Ragnarson</td>
                                <td>Ragnarson123</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <label htmlFor="trash-icon">
                                        <TrashIcon className="w-[24px] h-[24px] self-center text-red-500"/>
                                    </label>
                                </td>
                            </tr>
                            
                            <tr>
                                <th>
                                    <input type="checkbox" checked className="checkbox checkbox-xs" /> 
                                </th>
                                <td>1</td>
                                <td>Floki</td>
                                <td>Ragnarson</td>
                                <td>Ragnarson123</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <label htmlFor="trash-icon">
                                        <TrashIcon className="w-[24px] h-[24px] self-center text-red-500"/>
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <input type="checkbox" checked className="checkbox checkbox-xs" /> 
                                </th>
                                <td>1</td>
                                <td>Floki</td>
                                <td>Ragnarson</td>
                                <td>Ragnarson123</td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 rounded-full">
                                            <img src="https://placeimg.com/192/192/people" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <label htmlFor="trash-icon">
                                        <TrashIcon className="w-[24px] h-[24px] self-center text-red-500"/>
                                    </label>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}