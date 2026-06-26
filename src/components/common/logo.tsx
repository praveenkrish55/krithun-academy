import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export function Logo({
  className,
  width = 92, // Matches the native aspect ratio with height (approx 1.42)
  height = 65,
}: LogoProps) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logo/logo.svg"
        alt="Krithun Academy"
        width={width}
        height={height}
        priority
        className={cn("h-14 w-auto object-contain", className)}
      />
    </Link>
  );
}