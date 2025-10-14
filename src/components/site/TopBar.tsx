import { Instagram, Mail, Phone } from "lucide-react";

const TopBar = () => {
	return (
		<div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
			<div className="container flex h-10 items-center justify-end">
				<div className="flex items-center gap-4 text-sm text-muted-foreground">
					<a
						href="https://www.instagram.com/deltatigaenam/"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1.5 hover:text-foreground transition-colors"
						aria-label="Instagram PT Delta Tiga Enam"
					>
						<Instagram className="w-4 h-4" />
						<span className="hidden sm:inline">Instagram</span>
					</a>
					<a
						href="https://wa.me/6281316690036"
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center gap-1.5 hover:text-foreground transition-colors"
						aria-label="WhatsApp PT Delta Tiga Enam"
					>
						<Phone className="w-4 h-4" />
						<span className="hidden sm:inline">WhatsApp</span>
					</a>
					<a
						href="mailto:info@deltatigaenam.com"
						className="flex items-center gap-1.5 hover:text-foreground transition-colors"
						aria-label="Email PT Delta Tiga Enam"
					>
						<Mail className="w-4 h-4" />
						<span className="hidden sm:inline">Email</span>
					</a>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
