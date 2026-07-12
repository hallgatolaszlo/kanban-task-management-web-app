"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div style={{ display: "flex", gap: "0.5rem" }}>
			<button
				className="button button--secondary"
				onClick={() => setTheme("light")}
			>
				Light
			</button>
			<button
				className="button button--secondary"
				onClick={() => setTheme("dark")}
			>
				Dark
			</button>
			<button
				className="button button--secondary"
				onClick={() => setTheme("system")}
			>
				System
			</button>
			<span className="text-muted">Current: {theme}</span>
		</div>
	);
}
