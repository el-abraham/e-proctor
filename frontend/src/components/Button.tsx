export default function Button(props: any) {
  const { className = "bg-[#272343]", children, text, type = "Button" } = props;
  return (
    <button
      {...props}
      type={type}
      className={`${className}
        whitespace-nowrap inline-flex justify-center font-['Open_Sans'] text-[18px] items-center text-white  w-[434px] h-[53px] my-4 mx-auto font-semibold rounded
      `}
    >
      {text || children}
    </button>
  );
}
