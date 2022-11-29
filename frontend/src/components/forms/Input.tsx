import React from "react";

const Input = React.forwardRef((props: any, ref) => {
  const { className = "bg-[#FBFCFC]", children, text, type = "text" } = props;
  return (
    <div>
      <input
        ref={ref}
        {...props}
        type={type}
        className={`first-letter:${className}
             font-['Open_Sans'] flex items-center text-black w-full h-[48px] mt-2 placeholder:text-gray-500"
            `}
      />
      {text || children}
    </div>
  );
});

export default Input;
