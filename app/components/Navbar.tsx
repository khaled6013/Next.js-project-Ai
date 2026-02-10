import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>MyApp</h2>

      <ul style={styles.menu}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

const styles: {
  nav: React.CSSProperties;
  logo: React.CSSProperties;
  menu: React.CSSProperties;
} = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    backgroundColor: "#0f172a",
    color: "#ffffff",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  menu: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
  },
};
