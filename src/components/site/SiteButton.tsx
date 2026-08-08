import { Link, type LinkProps } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import {
  siteButtonClass,
  type SiteButtonSize,
  type SiteButtonVariant,
} from "@/lib/site-buttons";

type SharedProps = {
  variant?: SiteButtonVariant;
  size?: SiteButtonSize;
  className?: string;
  children?: ReactNode;
};

export function SiteButton({
  variant,
  size,
  className,
  children,
  ...props
}: SharedProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button type="button" className={siteButtonClass(variant, size, className)} {...props}>
      {children}
    </button>
  );
}

export function SiteLinkButton({
  variant,
  size,
  className,
  children,
  ...props
}: SharedProps & LinkProps) {
  return (
    <Link className={cn(siteButtonClass(variant, size), className)} {...props}>
      {children}
    </Link>
  );
}

export function SiteAnchorButton({
  variant,
  size,
  className,
  children,
  ...props
}: SharedProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={siteButtonClass(variant, size, className)} {...props}>
      {children}
    </a>
  );
}
