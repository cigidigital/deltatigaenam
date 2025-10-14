import { Zap, Award, TrendingUp, Sparkles, Target } from "lucide-react";
import { useLanguage } from "@/contexts";

const items = [
	{
		icon: Zap,
		titleKey: "whyUs.value1.title",
		descKey: "whyUs.value1.desc",
		letter: "D",
	},
	{
		icon: Award,
		titleKey: "whyUs.value2.title",
		descKey: "whyUs.value2.desc",
		letter: "E",
	},
	{
		icon: TrendingUp,
		titleKey: "whyUs.value3.title",
		descKey: "whyUs.value3.desc",
		letter: "L",
	},
	{
		icon: Sparkles,
		titleKey: "whyUs.value4.title",
		descKey: "whyUs.value4.desc",
		letter: "T",
	},
	{
		icon: Target,
		titleKey: "whyUs.value5.title",
		descKey: "whyUs.value5.desc",
		letter: "A",
	},
];

const WhyUs = () => {
	const { t } = useLanguage();

	return (
		<section id="why-us" className="py-16 border-t bg-muted/30">
			<div className="container">
				<header className="mb-10 text-center">
					<h2 className="text-3xl font-semibold">
						{t("whyUs.title")}
					</h2>
					<p className="text-muted-foreground mt-2">
						{t("whyUs.description")}
					</p>
				</header>
				<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
					{items.map(({ icon: Icon, titleKey, descKey, letter }) => (
						<article
							key={titleKey}
							className="rounded-xl border bg-gradient-to-br from-card to-card/70 p-6 shadow-sm text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
						>
							<div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/20">
								<Icon />
							</div>
							<h3 className="font-semibold">{t(titleKey)}</h3>
							<p className="text-sm text-muted-foreground mt-1 leading-relaxed">
								{t(descKey)}
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhyUs;
