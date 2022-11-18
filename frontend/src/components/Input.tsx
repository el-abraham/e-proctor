export function Input(props: any) {
  const { className = "bg-[#FBFCFC]", children, text, type = "text" } = props;
  return (
    <div>
      <input
        {...props}
        type={type}
        className={`${className}
        font-['Open_Sans'] flex items-center transition duration-300 text-black w-full h-[53px] rounded-lg border-2 focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-400 border-slate-300 shadow-smplaceholder:text-gray-500"
        `}
      />
      {text || children}
    </div>
  );
}

export default Input;
