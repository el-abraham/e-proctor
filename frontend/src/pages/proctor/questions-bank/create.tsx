import QuestionForm from "../../../components/forms/QuestionForm";
import Breadcrumbs from "../../../components/others/Breadcrumbs";
import SidebarGuru, {
  NavbarEnum,
} from "../../../components/sidebar/SidebarGuru";
import Header from "./header";
import TabsBankSoal from "./tabs";

// https://npm.io/package/react-quilljs

export default function BankSoalBuatPertanyaan() {
  return (
    <div className="bg-[#EFF0F3] min-h-screen h- flex text-black">
      <SidebarGuru active={NavbarEnum.BANKSOAL} />

      <div className="mr-[24px] w-full ml-6 pl-[240px]">
        <Header />
        {/* <Breadcrumbs /> */}
        <div className="text-xs breadcrumbs font-['Roboto'] mt-[15px] mb-[20px] text-black">
          <ul>
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Bank Soal</a>
            </li>
            <li>Buat Pertanyaan Baru</li>
          </ul>
        </div>
        <QuestionForm />
      </div>
    </div>
  );
}
