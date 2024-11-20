import Link from "next/link";
function Navbar() {
  return (
    <div className="flex justify-center">
      <div className="w-full navbar fixed bg-transparent backdrop-blur-md max-w-[1200px] mt-4">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Moneta</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="mx-3">
              <button className="btn btn-outline btn-warning">Logout</button>
            </li>
            <li>
              <details>
                <summary>Menu</summary>
                <ul className="bg-base-100 rounded-t-none p-2">
                  <li>
                    <Link href="/Expenses">Expenses</Link>
                  </li>
                  <li>
                    <Link href="/About">About</Link>
                  </li>
                  <li>
                    <Link href="/faqs">FAQs</Link>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
