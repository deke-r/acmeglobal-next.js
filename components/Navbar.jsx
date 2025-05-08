'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link href="/" className="navbar-brand ms-md-5">
          <Image src="/images/logo.webp" alt="acmeglobal logo" width={172} height={50} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto my-0 mb-2 mb-lg-0 me-md-5">
            <li className="nav-item px-2">
              <Link href="/" className="nav-link active text-muted">Home</Link>
            </li>
            <li className="nav-item px-2">
              <Link href="/about" className="nav-link text-muted">About Us</Link>
            </li>

            <li className="nav-item dropdown px-2">
              <span className="nav-link dropdown-toggle f_14 text-muted f_14" style={{ fontWeight: 600 }} role="button" data-bs-toggle="dropdown">
                Services
              </span>
              <ul className="dropdown-menu shadow-sm">
                <li className="px-2"><Link className="dropdown-item f_14 text-muted fw-semibold" href="/print-media">Print Media</Link></li>
                <hr className="mx-3 my-2" />
                <li className="px-2"><Link className="dropdown-item f_14 text-muted fw-semibold" href="/electronic-media">Electronic Media</Link></li>
                <hr className="mx-3 my-2" />
                <li className="px-2"><Link className="dropdown-item f_14 text-muted fw-semibold" href="/outdoor-media">Outdoor Media</Link></li>
                <hr className="mx-3 my-2" />
                <li className="px-2"><Link className="dropdown-item f_14 text-muted fw-semibold" href="/online-media">Online Media</Link></li>
                <hr className="mx-3 my-2" />
                <li className="px-2"><Link className="dropdown-item f_14 text-muted fw-semibold" href="/market-planning">Market Planning</Link></li>
                <hr className="mx-3 my-2" />
                <li className="px-2"><Link className="dropdown-item f_14 text-muted fw-semibold" href="/media-planning">Media Planning</Link></li>
                <hr className="mx-3 my-2" />
                <li className="px-2"><Link className="dropdown-item f_14 text-muted fw-semibold" href="/media-buying-implementation">Media Buying & Implementation</Link></li>
                <hr className="mx-3 my-2" />
                <li className="px-2"><Link className="dropdown-item f_14 text-muted fw-semibold" href="/digital-planning">Digital Planning</Link></li>
                <hr className="mx-3 my-2" />
                <li className="px-2"><Link className="dropdown-item f_14 text-muted fw-semibold" href="/marketing-consultancy">Marketing Consultancy</Link></li>
              </ul>
            </li>

        
            <li className="nav-item px-2">
              <Link href="/contact" className="nav-link text-muted">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
