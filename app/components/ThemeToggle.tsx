"use client";

import styles from "@/app/components/styles/ThemeToggle.module.css";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

export function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<div className={styles["container"]}>
			<Image
				width={19}
				height={19}
				src="/icon-light-theme.svg"
				alt="Light Theme Icon"
			/>
			<label className={styles["switch"]}>
				<input
					type="checkbox"
					checked={resolvedTheme === "dark"}
					onChange={() =>
						setTheme(resolvedTheme === "dark" ? "light" : "dark")
					}
				/>
				<span className={styles["slider"]}></span>
			</label>
			<Image
				width={16}
				height={16}
				src="/icon-dark-theme.svg"
				alt="Dark Theme Icon"
			/>
		</div>
	);
}
