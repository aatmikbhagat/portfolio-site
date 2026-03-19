export default function Footer() {
    return (
        <footer className="flex items-center justify-between h-14 text-xs text-muted bg-zinc-900 border-t border-zinc-800 px-4">
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
            </div>
            <div>
                © {new Date().getFullYear()} Aatmik Bhagat. All rights reserved.
            </div>
        </footer>
    );
}