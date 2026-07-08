import React from "react";
import Link from "next/link";

const SecondaryButton = ({
  children,
  onClick,
  href,
  type = "button",
  disabled = false,
  className = "",
  icon,
  ...props
}) => {
  const classNames = `btn btn--secondary ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={classNames} {...props}>
        {icon && <span className="btn__icon">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classNames}
      {...props}
    >
      {icon && <span className="btn__icon">{icon}</span>}
      {children}
    </button>
  );
};

export default SecondaryButton;
