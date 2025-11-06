type Props = { params: { slug: string } };

export default function PublicBio({ params }: Props) {
  const { slug } = params;
  return (
    <main style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center", fontFamily: "system-ui, Arial, sans-serif" }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: 0 }}>@{slug}</h1>
        <p style={{ color: "#666", marginTop: 10 }}>Tu página pública estará aquí.</p>
      </div>
    </main>
  );
}
