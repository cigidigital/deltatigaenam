type Testimonial = {
	name: string;
	gender: "male" | "female";
	image?: string;
	role: { id: string; en: string };
	quote: { id: string; en: string };
};

export const testimonials: Testimonial[] = [
	{
		name: "Kevin Joeliantara Widodo",
		gender: "male",
		image: "/kevin-joelantara.png",
		role: {
			id: "Junior Officer PT Pertamina International Shipping",
			en: "Junior Officer, PT Pertamina International Shipping",
		},
		quote: {
			id: "Materi training sangat baik dan telah disesuaikan dengan standar CRP sebagai bekal sertifikasi. Pengajarnya sangat kompeten, sabar, dan mampu mentransfer ilmu yang benar-benar dibutuhkan. Dukungan dan layanan selama training sangat memuaskan, serta fasilitasi yang diberikan membuat peserta semakin semangat mengikuti pelatihan.",
			en: "The training material is excellent and adapted to CRP standards as certification preparation. The instructors are very competent, patient, and able to transfer the knowledge that is truly needed. The support and service during training were very satisfying, and the facilities provided made participants more enthusiastic about taking the training.",
		},
	},
	{
		name: "Hoirun Nisyak, S.Pd., M.Pd.",
		gender: "female",
		image: "/hoirun-nisyak.png",
		role: {
			id: "Universitas Sriwijaya",
			en: "Sriwijaya University",
		},
		quote: {
			id: "Materinya luar biasa, memberikan wawasan dan pengalaman baru yang sangat bermanfaat. Pengajar menyampaikan materi dengan lugas, padat, dan mudah dipahami. Pelayanan sangat baik. saya beri nilai 10.",
			en: "The material is extraordinary, providing benefitial new insights and experiences. The instructor delivered the material clearly, concisely, and easily understood. The service is very good. I give it a 10.",
		},
	},
	{
		name: "Eka Suhendra",
		gender: "male",
		image: "/eka-suhendra.png",
		role: {
			id: "Direktur Manajemen Risiko PT Pertamina International Shipping",
			en: "Director of Risk Management, PT Pertamina International Shipping",
		},
		quote: {
			id: "Materi yang disampaikan sangat bermanfaat dan relevan dengan pekerjaan saya saat ini. Pengajarnya berpengalaman, kuat secara konseptual, serta mampu mengaitkan teori dengan praktik pengelolaan risiko secara nyata. Pelaksanaan training berjalan tepat waktu dan profesional.",
			en: "The material delivered is very beneficial and relevant to my current work. The instructors are experienced, conceptually strong, and able to relate theory to real-world risk management practices. The training session was punctual and professional.",
		},
	},
];

