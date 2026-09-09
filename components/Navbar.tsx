import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-black text-white border-b border-gray-800">
      
      <h1 className="font-[var(--font-space-grotesk)] text-3xl font-bold text-[#00f600]">
        ANDROID CLUB
      </h1>

      <div className="flex gap-8">
        <Link className="hover:text-[#00f600]" href="/">
          Home
        </Link>

        <Link className="hover:text-[#00f600]" href="/events">
          Events
        </Link>

        <Link className="hover:text-[#00f600]" href="/members">
          Members
        </Link>

        <Link className="hover:text-[#00f600]" href="/archive">
          Archive
        </Link>

        <Link className="hover:text-[#00f600]" href="/contact">
          Contact
        </Link>
      </div>

    </nav>
  );
}