export default function Dashboard() {
  return (
    <main style={{ minHeight: "100vh", padding: 40, fontFamily: "system-ui, Arial, sans-serif" }}>
      <h2 style={{ fontSize: 28, fontWeight: 700, margin: 0 }}>Dashboard</h2>
      <p style={{ marginTop: 12, color: "#333" }}>Cuando inicies sesión, aquí verás tu biolink y podrás editarlo.</p>
      <p style={{ color:"#666", marginTop:12 }}>Próximo paso: activar login y guardar tu bio en base de datos.</p>
    </main>
  );
}
