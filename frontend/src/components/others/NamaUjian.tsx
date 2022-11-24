type NamaUjianProps = {
  title?: string;
};

export default function NamaUjian({ title }: NamaUjianProps) {
  return (
    <div className="flex mb-[30px]">
      <img
        className="w-[136px] h-[131px] rounded-[10px]"
        src="https://placeimg.com/192/192/people"
      />
      <div className="block ml-[20px] self-end">
        <p className="text-xs font-['Roboto'] leading-[150%] mb-[5px]">
          Ujian Anda
        </p>
        <h1 className="font-['Open Sans'] font-bold text-[25px] leading-[150%]">
          {title}
        </h1>
      </div>
    </div>
  );
}
