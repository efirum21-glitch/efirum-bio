export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", maxWidth: 640, padding: "0 20px", fontFamily: "system-ui, Arial, sans-serif" }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, margin: 0 }}>Efirum.bio</h1>
        <p style={{ color: "#666", marginTop: 12 }}>Crea tu página de enlaces en segundos.</p>
        <a href="/dashboard" style={{ display: "inline-block", border: "1px solid #222", padding: "10px 20px", borderRadius: 8, textDecoration: "none", color: "#222", marginTop: 16 }}>
          Entrar
        </a>
      </div>
    </main>
  );
}
