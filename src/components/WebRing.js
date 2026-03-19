export default function WebRing() {
    return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <a href="https://cs-webring.vercel.app/go?site=https%3A%2F%2Faatmikbhagat.com%2F&nav=prev">←</a>
        <a href="https://cs-webring.vercel.app/">
          <img
            src="https://cs-webring.vercel.app/icon.black.svg"
            alt="CS Webring"
            style={{ width: "24px", height: "auto", opacity: 0.8 }}
          />
        </a>
        <a href="https://cs-webring.vercel.app/go?site=https%3A%2F%2Faatmikbhagat.com%2F&nav=next">→</a>
    </div>);
}