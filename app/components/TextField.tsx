"use client";

import styles from "@/app/components/styles/TextField.module.css";

export default function TextField({
	error = null,
	label = "Label",
	placeholder = "Placeholder",
	value = "",
	onChange = () => {},
}: {
	error?: string | null;
	label?: string;
	placeholder?: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
	return (
		<div className={`${styles["container"]}`}>
			<label
				className={`${styles["label"]} body-m`}
				htmlFor={`text-field-${label}`}
			>
				{label}
			</label>
			<div className={`${styles["input-container"]}`}>
				<input
					id={`text-field-${label}`}
					className={`${styles["input"]} ${error ? styles["input--error"] : ""} body-l`}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
				<span className={`${styles["error"]} body-l`}>{error}</span>
			</div>
		</div>
	);
}
