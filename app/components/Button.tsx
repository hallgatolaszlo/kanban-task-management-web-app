"use client";

import styles from "@/app/components/styles/Button.module.css";

export default function Button({
	variant = "primary",
	onClick = () => {},
	label = "Button",
}: {
	variant?: "primary-large" | "primary" | "secondary" | "destructive";
	onClick?: () => void;
	label?: string;
}) {
	return (
		<button
			className={`${styles["button"]} ${styles[`button--${variant}`]} ${variant === "primary-large" ? "heading-m" : "body-l"}`}
			onClick={onClick}
		>
			{label}
		</button>
	);
}
