export function Input(props: any) {
  const { className = "bg-[#FBFCFC]", children, text, type = "text" } = props;
  return (
    <div>
      <input
        {...props}
        type={type}
        className={`first-letter:${className}
             font-['Open_Sans'] flex items-center text-black w-full h-[48px] mt-2 placeholder:text-gray-500"
            `}
      />
      {text || children}
    </div>
  );
}

export default Input;
