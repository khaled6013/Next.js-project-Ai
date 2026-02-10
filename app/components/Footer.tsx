import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Logo / About */}
        <div>
          <h3 style={styles.logo}>MyApp</h3>
          <p style={styles.text}>
            Building modern web apps with Next.js & TypeScript.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={styles.title}>Quick Links</h4>
          <ul style={styles.list}>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={styles.title}>Contact</h4>
          <p style={styles.text}>Email: hello@myapp.com</p>
          <p style={styles.text}>Phone: +880 1234-567890</p>
        </div>

      </div>

      <div style={styles.bottom}>
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

const styles: {
  footer: React.CSSProperties;
  container: React.CSSProperties;
  logo: React.CSSProperties;
  title: React.CSSProperties;
  text: React.CSSProperties;
  list: React.CSSProperties;
  bottom: React.CSSProperties;
} = {
  footer: {
    backgroundColor: "#020617",
    color: "#e5e7eb",
    marginTop: "80px",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "50px 40px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "40px",
  },
  logo: {
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "12px",
  },
  title: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "10px",
  },
  text: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#cbd5f5",
  },
  list: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  bottom: {
    borderTop: "1px solid #1e293b",
    textAlign: "center",
    padding: "14px",
    fontSize: "13px",
    color: "#94a3b8",
  },
};
