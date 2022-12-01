import BreadcrumbItem from "./BreadcrumbItem";

interface BreadcrumbProps {
  breadcrumbItems: Array<BreadcrumbItemProps>;
}

interface BreadcrumbItemProps {
  url: string;
  name?: string;
}

export default function Breadcrumbs({ breadcrumbItems }: BreadcrumbProps) {
  return (
    <div className="text-xs breadcrumbs font-['Roboto'] mt-[15px] mb-[20px] text-black">
      <ul>
        {breadcrumbItems.map((item, index, array) => (
          <BreadcrumbItem
            {...item}
            index={index + 1}
            isLast={array.length - 1 === index}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
}
