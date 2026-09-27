"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export default function TransitionLink({
  href,
  children,
  className,
  prefetch = true,
  replace,
  scroll,
  onClick,
  ...rest
}) {
  const router = useRouter();

  const navigate = useCallback(() => {
    if (replace) router.replace(href, { scroll });
    else router.push(href, { scroll });
  }, [href, replace, router, scroll]);

  const handleClick = useCallback(
    (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0)
        return;
      e.preventDefault();

      if (typeof onClick === "function") {
        try {
          onClick();
        } catch (_) {}
      }

      if (typeof document !== "undefined" && document.startViewTransition) {
        document.startViewTransition(() => navigate());
      } else {
        navigate();
      }
    },
    [navigate, onClick],
  );

  return (
    <Link
      href={href}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      className={className}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </Link>
  );
}
