import type { FC, ReactNode } from "react";
import { Link } from "react-router";

export interface MessageLinkProps {
  href?: string;
  children?: ReactNode;
}

export const MessageLink: FC<MessageLinkProps> = ({ href, children }) => {
  if (!href) {
    return children;
  }
  return (
    <Link className="text-blue-500 hover:underline" to={href}>
      {children}
    </Link>
  );
};
