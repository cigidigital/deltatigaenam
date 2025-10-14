import { Link, NavLink } from "react-router-dom";
import { Menu, Languages } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts";

const Header = () => {
	const [open, setOpen] = useState(false);
	const { language, setLanguage } = useLanguage();

	const toggleLanguage = () => {
		setLanguage(language === "id" ? "en" : "id");
	};

	return (
		<header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
			<div className="container flex h-16 items-center justify-between">
				<Link to="/" className="flex items-center gap-2">
					<img
						src="/logo.png"
						alt={
							language === "id"
								? "PT. Delta Tiga Enam"
								: "PT. Delta Tiga Enam"
						}
						className="h-8 w-auto"
						loading="eager"
					/>
					<span className="font-semibold">PT. Delta Tiga Enam</span>
				</Link>

				<nav className="hidden md:flex items-center gap-6">
					<NavLink
						to="/"
						className={({ isActive }) =>
							`text-sm ${
								isActive
									? "text-foreground"
									: "text-muted-foreground hover:text-foreground"
							} story-link`
						}
					>
						{language === "id" ? "Beranda" : "Home"}
					</NavLink>
					<NavLink
						to="/layanan"
						className={({ isActive }) =>
							`text-sm ${
								isActive
									? "text-foreground"
									: "text-muted-foreground hover:text-foreground"
							} story-link`
						}
					>
						{language === "id" ? "Layanan" : "Services"}
					</NavLink>
					<NavLink
						to="/agenda"
						className={({ isActive }) =>
							`text-sm ${
								isActive
									? "text-foreground"
									: "text-muted-foreground hover:text-foreground"
							} story-link`
						}
					>
						{language === "id" ? "Agenda" : "Agenda"}
					</NavLink>
					<NavLink
						to="/blog"
						className={({ isActive }) =>
							`text-sm ${
								isActive
									? "text-foreground"
									: "text-muted-foreground hover:text-foreground"
							} story-link`
						}
					>
						{language === "id" ? "Blog" : "Blog"}
					</NavLink>
					<button
						onClick={toggleLanguage}
						className="text-sm text-muted-foreground hover:text-foreground story-link flex items-center gap-1.5"
						title={language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
					>
						<Languages className="w-4 h-4" />
						<span>{language === "id" ? "EN" : "ID"}</span>
					</button>
				</nav>

				<div className="flex items-center gap-4">
					<button
						onClick={toggleLanguage}
						className="md:hidden text-sm text-muted-foreground hover:text-foreground story-link mr-4 flex items-center gap-1.5"
						title={language === "id" ? "Switch to English" : "Ganti ke Bahasa Indonesia"}
					>
						<Languages className="w-4 h-4" />
						<span>{language === "id" ? "EN" : "ID"}</span>
					</button>
					<button
						className="md:hidden"
						aria-label="Toggle menu"
						onClick={() => setOpen((v) => !v)}
					>
						<Menu />
					</button>
				</div>
			</div>

			{open && (
				<div className="md:hidden border-t">
					<div className="container py-3 flex flex-col gap-2">
						<Link
							to="/"
							onClick={() => setOpen(false)}
							className="text-sm text-foreground"
						>
							{language === "id" ? "Beranda" : "Home"}
						</Link>
						<Link
							to="/layanan"
							onClick={() => setOpen(false)}
							className="text-sm text-foreground"
						>
							{language === "id" ? "Layanan" : "Services"}
						</Link>
						<Link
							to="/agenda"
							onClick={() => setOpen(false)}
							className="text-sm text-foreground"
						>
							{language === "id" ? "Agenda" : "Agenda"}
						</Link>
						<Link
							to="/blog"
							onClick={() => setOpen(false)}
							className="text-sm text-foreground"
						>
							{language === "id" ? "Blog" : "Blog"}
						</Link>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
