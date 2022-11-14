export function Input(props: any) {
  const { className = "bg-[#FBFCFC]", children, text, type = "text" } = props;
  return (
    <div>
      <input
        {...props}
        type={type}
        className={`${className}
        border-black font-['Open_Sans'] flex items-center text-black py-2 w-full h-[53px] rounded-lg mt-2 p-2 my-6 border-2 focus:outline-none placeholder:text-gray-500"
        `}
      />
      {text || children}
    </div>
  );
}

export default Input;
