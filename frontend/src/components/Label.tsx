export default function Label(value: any, children: any, ...props: any) {
  return (
    <label className="text-slate-600 mb-1 block" {...props}>
      {value || children}
    </label>
  );
}
