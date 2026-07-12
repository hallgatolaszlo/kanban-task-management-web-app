import Button from "@/app/components/Button";
import { ThemeToggle } from "@/app/components/ThemeToggle";

export default function Home() {
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
					<Button variant="primary-large" text="Button Primary (L)" />
					<Button variant="primary" text="Button Primary (S)" />
					<Button variant="secondary" text="Button Secondary" />
					<Button variant="destructive" text="Button Destructive" />
				</div>
			</main>
		</div>
	);
}
