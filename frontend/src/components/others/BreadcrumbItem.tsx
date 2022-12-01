import React from "react";
import { Link } from "react-router-dom";

export default function BreadcrumbItem({
  url,
  name,
  index,
  isLast,
}: {
  url: string;
  name?: string;
  index: number;
  isLast: boolean;
}) {
  return (
    <React.Fragment>
      <li key={index}>
        {isLast ? <p key={index}>{name}</p> : <Link to={url}>{name}</Link>}
        {/* <Link to={url}>{name}</Link> */}
      </li>
    </React.Fragment>
  );
}
