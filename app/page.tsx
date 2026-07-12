// TODO: Remove use client directive when the app is fully migrated to server components
"use client";

import Button from "@/app/components/Button";
import SubtaskCheckbox from "@/app/components/SubtaskCheckbox";
import TextField from "@/app/components/TextField";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { useState } from "react";

export default function Home() {
	const [idleTextFieldValue, setIdleTextFieldValue] = useState("");
	const [activeTextFieldValue, setActiveTextFieldValue] = useState(
		"Building a slideshow",
	);
	const [errorTextFieldValue, setErrorTextFieldValue] = useState("");

	return (
		<div>
			<main>
				<ThemeToggle />
				<div
					style={{
						width: "300px",
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
					}}
				>
					<Button
						variant="primary-large"
						label="Button Primary (L)"
					/>
					<Button variant="primary" label="Button Primary (S)" />
					<Button variant="secondary" label="Button Secondary" />
					<Button variant="destructive" label="Button Destructive" />
					<SubtaskCheckbox label="In Progress" checked={false} />
					<SubtaskCheckbox label="Completed" checked={true} />
					<TextField
						value={idleTextFieldValue}
						onChange={(e) => setIdleTextFieldValue(e.target.value)}
						label="Text Field (Idle)"
						placeholder="Enter task name"
						error={null}
					/>
					<TextField
						value={activeTextFieldValue}
						onChange={(e) =>
							setActiveTextFieldValue(e.target.value)
						}
						label="Text Field (Active)"
						placeholder="Enter task name"
						error={null}
					/>
					<TextField
						value={errorTextFieldValue}
						onChange={(e) => setErrorTextFieldValue(e.target.value)}
						label="Text Field (Error)"
						placeholder="Enter task name"
						error={
							errorTextFieldValue.length === 0
								? "Can't be empty"
								: null
						}
					/>
				</div>
			</main>
		</div>
	);
}
