import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useMediumPosts } from "@/hooks/use-medium-posts";
import { useAgenda } from "@/hooks/use-agenda";
import { faq } from "@/data/faq";
import { Button } from "@/components/ui/button";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import InstagramEmbed from "@/components/sections/InstagramEmbed";
import Testimonials from "@/components/sections/Testimonials";
import FAQSection from "@/components/sections/FAQ";
import { useLanguage } from "@/contexts";

const Index = () => {
	const location = useLocation();
	const canonical = `${window.location.origin}${location.pathname}`;
	const { posts: blogPosts } = useMediumPosts();
	const { agenda } = useAgenda();
	const { t, language } = useLanguage();

	const latest = [...blogPosts].slice(0, 3);
	const upcoming = [...agenda].slice(0, 3);

	return (
		<>
			<Helmet>
				<title>
					{language === "id"
						? "PT. Delta Tiga Enam | Lembaga Konsultan, Training & Sertifikasi"
						: "PT. Delta Tiga Enam | Consultant, Training & Certification Institution"}
				</title>
				<meta
					name="description"
					content={
						language === "id"
							? "Perusahaan penyedia sertifikasi, pelatihan, penyeleksian, dan penempatan tenaga kerja di Indonesia."
							: "Company providing certification, training, selection, and placement of human resources in Indonesia."
					}
				/>
				<link rel="canonical" href={canonical} />
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "Organization",
						name: "PT. Delta Tiga Enam",
						url: window.location.origin,
						description:
							language === "id"
								? "Sertifikasi, pelatihan, penyeleksian, dan penempatan tenaga kerja di Indonesia"
								: "Certification, training, selection, and placement of human resources in Indonesia",
						sameAs: [],
					})}
				</script>
				<script type="application/ld+json">
					{JSON.stringify({
						"@context": "https://schema.org",
						"@type": "FAQPage",
						mainEntity: faq.map((q) => ({
							"@type": "Question",
							name: language === "id" ? q.q.id : q.q.en,
							acceptedAnswer: {
								"@type": "Answer",
								text: language === "id" ? q.a.id : q.a.en,
							},
						})),
					})}
				</script>
			</Helmet>

			<Hero />

			<About />
			<WhyUs />

			<Services />

			<InstagramEmbed />

			<Testimonials />

			<FAQSection />

			<section className="py-12 border-t">
				<div className="container">
					<header className="flex items-end justify-between mb-6">
						<h2 className="text-2xl font-semibold">
							{t("agenda.title")}
						</h2>
						<a className="story-link" href="/agenda">
							{t("blog.readMore")}
						</a>
					</header>
					{/* Timeline style */}
					{upcoming.length > 0 ? (
						<ul className="relative border-l pl-4 md:pl-6 border-border">
							{[...upcoming]
								.sort((a, b) => a.date.localeCompare(b.date))
								.slice(0, 3)
								.map((a, index) => (
									<li
										key={a.id}
										className="mb-6 last:mb-0 relative animate-fade-in"
										style={{
											animationDelay: `${index * 0.2 + 0.3
												}s`,
										}}
									>
										<span className="absolute -left-2 md:-left-2.5 top-2 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full bg-primary border-2 border-background shadow" />
										<div className="rounded-lg bg-card/80 backdrop-blur border shadow-sm p-4 md:p-5">
											<div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
												<time className="text-xs text-primary font-medium">
													{new Date(
														a.date
													).toLocaleDateString(
														language === "id"
															? "id-ID"
															: "en-US",
														{
															weekday: "long",
															day: "2-digit",
															month: "long",
															year: "numeric",
														}
													)}
												</time>
												<span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] bg-primary/10 text-primary">
													{language === "id"
														? a.location.id
														: a.location.en}
												</span>
											</div>
											<h3 className="text-sm md:text-base font-semibold">
												{language === "id"
													? a.title.id
													: a.title.en}
											</h3>
											<p className="text-xs text-muted-foreground mt-0.5 line-clamp-2">
												{language === "id"
													? a.description.id
													: a.description.en}
											</p>
											{a.link && (
												<div className="mt-3">
													<Button
														size="sm"
														className="h-8 px-3"
														asChild
													>
														<a
															href={a.link}
															target="_blank"
															rel="noopener noreferrer"
														>
															{language === "id"
																? "Daftar"
																: "Register"}
														</a>
													</Button>
												</div>
											)}
										</div>
									</li>
								))}
						</ul>
					) : (
						<p>{t("agenda.noUpcoming")}</p>
					)}
				</div>
			</section>

			<section className="py-12 border-t">
				<div className="container">
					<header className="flex items-end justify-between mb-6">
						<h2 className="text-2xl font-semibold">
							{t("latestArticles.title")}
						</h2>
						<a className="story-link" href="/blog">
							{t("blog.readMore")}
						</a>
					</header>
					{/* Media cards style */}
					<div className="grid gap-4 md:grid-cols-3">
						{latest.map((p, index) => (
							<article
								key={p.guid}
								className="group rounded-lg border bg-card shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
							>
								{p.thumbnail && (
									<div className="w-full h-32 overflow-hidden">
										<img
											src={p.thumbnail}
											alt={p.title}
											className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
										/>
									</div>
								)}
								<div className="p-4 flex flex-col flex-grow">
									<h3 className="text-sm md:text-base font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
										{p.title}
									</h3>
									<p className="text-xs text-muted-foreground mt-1 line-clamp-2 flex-grow">
										{p.description.replace(/<[^>]*>/g, "")}
									</p>
									<div className="mt-3">
										<a
											className="inline-flex items-center text-xs font-medium text-primary hover:underline"
											href={p.link}
											target="_blank"
											rel="noopener noreferrer"
										>
											{t("blog.readMore")}
											<svg
												className="ml-1 h-3 w-3"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M14 5l7 7m0 0l-7 7m7-7H3"
												/>
											</svg>
										</a>
									</div>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default Index;
