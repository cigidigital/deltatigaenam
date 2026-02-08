import { Star, User, UserRound } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { useLanguage } from "@/contexts";

const Testimonials = () => {
	const { t, language } = useLanguage();

	return (
		<section id="testimoni" className="py-16 border-t">
			<div className="container">
				<header className="mb-8">
					<h2 className="text-3xl font-semibold">
						{t("testimonials.title")}
					</h2>
				</header>
				<div className="grid md:grid-cols-3 gap-6">
					{testimonials.map((testimonial) => (
						<article
							key={testimonial.name}
							className="rounded-lg border p-6 bg-card shadow-sm hover:shadow-md transition-shadow"
						>
							<div className="flex items-center gap-2 text-primary">
								{[...Array(5)].map((_, i) => (
									<Star
										key={i}
										size={16}
										fill="currentColor"
									/>
								))}
							</div>
							<p className="text-sm text-muted-foreground mt-3">
								"
								{language === "id"
									? testimonial.quote.id
									: testimonial.quote.en}
								"
							</p>
							<div className="mt-4 flex items-center gap-3">
								<div
									className={`w-12 h-12 rounded-full flex items-center justify-center overflow-hidden ${testimonial.gender === "male"
										? "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400"
										: "bg-pink-100 text-pink-600 dark:bg-pink-900/30 dark:text-pink-400"
										}`}
								>
									{testimonial.image ? (
										<img
											src={testimonial.image}
											alt={testimonial.name}
											className="w-full h-full object-cover"
										/>
									) : testimonial.gender === "male" ? (
										<User size={24} strokeWidth={2} />
									) : (
										<UserRound size={24} strokeWidth={2} />
									)}
								</div>
								<div>
									<div className="text-sm font-medium">
										{testimonial.name}
									</div>
									<div className="text-xs text-muted-foreground">
										{language === "id"
											? testimonial.role.id
											: testimonial.role.en}
									</div>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
