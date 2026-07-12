"use client";

import styles from "@/app/components/styles/SubtaskCheckbox.module.css";

export default function SubtaskCheckbox({
	onChange = () => {},
	label = "Subtask",
	checked = false,
}: {
	onChange?: () => void;
	label: string;
	checked?: boolean;
}) {
	return (
		<div className={styles["container"]}>
			<input
				className={styles["checkbox"]}
				id={`checkbox-${label}`}
				type="checkbox"
				checked={checked}
				onChange={onChange}
			/>
			<label
				className={`${styles["label"]} body-m ${checked ? styles["checked"] : ""}`}
				htmlFor={`checkbox-${label}`}
			>
				{label}
			</label>
		</div>
	);
}
