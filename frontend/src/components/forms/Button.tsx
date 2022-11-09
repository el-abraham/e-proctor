import clsx from "clsx";

export default function Button(props:any){
    const{
        className = 'bg-blue-600',
        children,
        text,
        type = 'submit',
    } = props;
    return(
        <button {...props} type={type} className={clsx(className, "btn btn-primary")}>{text ?? children}</button>
    );
}