import {
	createContext,
	useContext,
	useState,
	ReactNode,
	useEffect,
} from "react";

type Language = "id" | "en";

interface LanguageContextType {
	language: Language;
	setLanguage: (lang: Language) => void;
	t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined
);

// Language dictionary
const translations = {
	id: {
		// Hero Section
		"hero.title1":
			"Mitra Tepercaya Untuk Sertifikasi & Pelatihan Profesional",
		"hero.subtitle1": "SOLUSI PELATIHAN TERINTEGRASI",
		"hero.description1":
			"PT. Delta Tiga Enam berdedikasi memberikan layanan terbaik di bidang sertifikasi, pelatihan, penyeleksian, dan penempatan tenaga kerja di Indonesia.",
		"hero.cta1": "Lihat Layanan",
		"hero.title2": "Tingkatkan Kompetensi SDM Perusahaan Anda",
		"hero.subtitle2": "PELATIHAN BERBASIS KOMPETENSI",
		"hero.description2":
			"Program pelatihan yang disesuaikan dengan kebutuhan industri untuk mengembangkan keterampilan teknis dan soft skills karyawan.",
		"hero.cta2": "Lihat Agenda",
		"hero.title3": "Sertifikasi Tenaga Kerja Berstandar Nasional",
		"hero.subtitle3": "KOMPETENSI YANG DIAKUI INDUSTRI",
		"hero.description3":
			"Skema sertifikasi berbasis kompetensi yang diakui industri untuk berbagai jabatan dan keahlian sesuai SKKNI.",
		"hero.cta3": "Lihat Blog",

		// About Section
		"about.title": "Tentang Kami",
		"about.description":
			"Delta Tiga Enam adalah lembaga pelatihan dan penyelenggara sertifikasi profesi. Kami membantu perusahaan dan individu meningkatkan kompetensi melalui pelatihan, konsultasi manajemen, pengelolaan human capital, dan layanan headhunter yang terintegrasi.",
		"about.vision": "Visi",
		"about.visionText":
			"Menjadi mitra strategis dalam transformasi human capital berkelanjutan.",
		"about.mission": "Misi",
		"about.mission1":
			"Solusi human capital komprehensif yang disesuaikan kebutuhan klien.",
		"about.mission2": "Program pelatihan inovatif selaras tren industri.",
		"about.mission3":
			"Layanan headhunter efektif untuk menghadirkan talenta terbaik.",
		"about.values": "Nilai Kami",
		"about.value1.title": "Dynamic",
		"about.value1.desc":
			"Selalu adaptif terhadap perubahan dan inovasi dalam dunia kerja.",
		"about.value2.title": "Excellence",
		"about.value2.desc": "Unggul dalam setiap layanan yang diberikan.",
		"about.value3.title": "Leading",
		"about.value3.desc":
			"Pionir dalam pengembangan solusi human capital yang inovatif.",

		// Services Section
		"services.title": "Layanan Unggulan Kami",
		"services.description":
			"Solusi lengkap pengembangan SDM yang terpercaya untuk kemajuan perusahaan Anda",
		"services.all": "Lihat Semua Layanan",
		"service.verified": "Tersertifikasi",

		// Service Items
		"service1.title": "Konsultasi Manajemen",
		"service1.desc":
			"Solusi komprehensif untuk merumuskan strategi, meningkatkan efisiensi operasional, mengoptimalkan sumber daya, mengelola perubahan, dan memitigasi risiko bisnis.",
		"service1.cta": "Konsultasi sekarang",

		"service2.title": "Konsultasi Manajemen Human Capital",
		"service2.desc":
			"Pendekatan strategis untuk strategi HC, pengembangan organisasi, manajemen kinerja, talent & succession, serta kompensasi dan benefit yang kompetitif.",
		"service2.cta": "Pelajari lebih lanjut",

		"service3.title": "Headhunter",
		"service3.desc":
			"Layanan end-to-end: perumusan profil jabatan, sourcing & screening berbasis data, asesmen & wawancara behavioral, negosiasi penawaran, hingga onboarding.",
		"service3.cta": "Cari talenta",

		"service4.title": "Pelatihan Karyawan",
		"service4.desc":
			"Program fleksibel: soft skills & leadership, teknis & spesialisasi, digital & teknologi, program kustom, serta coaching & mentoring untuk kinerja optimal.",
		"service4.cta": "Jadwal pelatihan",

		"service5.title": "Sertifikasi Kompetensi",
		"service5.desc":
			"Sertifikasi komprehensif: persiapan uji, pendampingan & asesmen, upgrade/re-sertifikasi, sertifikasi BNSP RI, dan sertifikasi internasional.",
		"service5.cta": "Lihat agenda",

		// CTA Section
		"cta.title": "Butuh solusi khusus untuk perusahaan Anda?",
		"cta.button": "Konsultasi Gratis",

		// Workflow Section
		"workflow.title": "Alur Layanan",
		"workflow.step1.title": "Konsultasi",
		"workflow.step1.desc": "Pahami kebutuhan",
		"workflow.step2.title": "Penawaran",
		"workflow.step2.desc": "Rencana & jadwal",
		"workflow.step3.title": "Kesepakatan",
		"workflow.step3.desc": "Scope disepakati",
		"workflow.step4.title": "Pelaksanaan",
		"workflow.step4.desc": "Eksekusi program",
		"workflow.step5.title": "Evaluasi",
		"workflow.step5.desc": "Laporan & tindak lanjut",

		// Agenda Page
		"agenda.title": "Agenda Mendatang",
		"agenda.register": "Daftar Sekarang",
		"agenda.noUpcoming": "Tidak ada agenda mendatang saat ini.",

		// Blog Page
		"blog.title": "Blog",
		"blog.readMore": "Baca selengkapnya",
		"blog.back": "Kembali ke Blog",
		"latestArticles.title": "Artikel Terbaru",

		// Not Found Page
		"notFound.message": "Halaman tidak ditemukan",
		"notFound.back": "Kembali ke Beranda",

		// Footer
		"footer.description":
			"Sertifikasi, pelatihan, penyeleksian, dan penempatan tenaga kerja di Indonesia.",
		"footer.headOffice": "Kantor Pusat",
		"footer.headOffice.address1":
			"Gedung Bursa Efek Indonesia Tower 1 Level 3, Unit 304",
		"footer.headOffice.address2":
			"Jalan Jendral Sudirman Kav. 52-53, SCBD Senayan,",
		"footer.headOffice.address3":
			"Kebayoran Baru, Jakarta Selatan, DKI Jakarta",
		"footer.marketingOffice": "Kantor Pemasaran",
		"footer.marketingOffice.address1":
			"Cikarang Technopark, Jalan Inti I Blok C1 No. 7",
		"footer.marketingOffice.address2":
			"Cibatu, Cikarang Selatan, Kabupaten Bekasi",
		"footer.marketingOffice.address3": "Jawa Barat 17530",
		"footer.operationalOffice": "Kantor Operasional",
		"footer.operationalOffice.address1":
			"Taman Widya Asri Blok GG No. 18, Serang",
		"footer.operationalOffice.address2": "Kota Serang, Banten 46111",
		"footer.copyright":
			"© {year} PT. Delta Tiga Enam. Hak cipta dilindungi undang-undang.",

		// Testimonials
		"testimonials.title": "Apa Kata Klien",

		// FAQ
		"faq.title": "FAQ",

		// Why Us (Values)
		"whyUs.title": "Nilai Kami",
		"whyUs.description": "Nilai-nilai yang menjadi landasan kami",
		"whyUs.value1.title": "Dynamic",
		"whyUs.value1.desc":
			"Selalu adaptif terhadap perubahan dan inovasi dalam dunia kerja.",
		"whyUs.value2.title": "Excellence",
		"whyUs.value2.desc": "Unggul dalam setiap layanan yang diberikan.",
		"whyUs.value3.title": "Leading",
		"whyUs.value3.desc":
			"Pionir dalam pengembangan solusi human capital yang inovatif.",
		"whyUs.value4.title": "Transcendent",
		"whyUs.value4.desc":
			"Melampaui ekspektasi klien dan memberikan nilai tambah yang berkelanjutan.",
		"whyUs.value5.title": "Action",
		"whyUs.value5.desc":
			"Berorientasi pada hasil dan tindakan nyata untuk mencapai tujuan.",

		// CSChat
		"cschat.button": "Hubungi Kami",
		"cschat.title": "Terhubung dengan Kami",
		"cschat.description":
			"Kami online di jam kerja (Senin–Jumat, 09.00–17.00 WIB).",
		"cschat.whatsapp": "Chat via WhatsApp",
		"cschat.email": "Kirim Email",

		// Delivery
		"delivery.title": "Alur Layanan",
		"delivery.step": "Langkah",
		"delivery.steps.consultation.title": "Konsultasi",
		"delivery.steps.consultation.desc": "Pahami kebutuhan Anda.",
		"delivery.steps.offer.title": "Penawaran",
		"delivery.steps.offer.desc": "Rencana & jadwal jelas.",
		"delivery.steps.implementation.title": "Pelaksanaan",
		"delivery.steps.implementation.desc": "Pelatihan/asesmen efektif.",
		"delivery.steps.certification.title": "Sertifikasi",
		"delivery.steps.certification.desc": "Hasil terukur & diakui.",
	},
	en: {
		// Hero Section
		"hero.title1":
			"Trusted Partner for Professional Certification & Training",
		"hero.subtitle1": "INTEGRATED TRAINING SOLUTIONS",
		"hero.description1":
			"PT. Delta Tiga Enam is dedicated to providing the best services in certification, training, selection, and placement of human resources in Indonesia.",
		"hero.cta1": "View Services",
		"hero.title2": "Enhance Your Company's Human Resources Competency",
		"hero.subtitle2": "COMPETENCY-BASED TRAINING",
		"hero.description2":
			"Training programs tailored to industry needs to develop employees' technical skills and soft skills.",
		"hero.cta2": "View Agenda",
		"hero.title3": "Nationally Standardized Workforce Certification",
		"hero.subtitle3": "INDUSTRY-RECOGNIZED COMPETENCY",
		"hero.description3":
			"Competency-based certification schemes recognized by industry for various positions and skills according to SKKNI.",
		"hero.cta3": "View Blog",

		// About Section
		"about.title": "About Us",
		"about.description":
			"Delta Tiga Enam is a training institution and professional certification provider. We help companies and individuals enhance their competencies through training, management consulting, human capital management, and integrated headhunting services.",
		"about.vision": "Vision",
		"about.visionText":
			"To become a strategic partner in sustainable human capital transformation.",
		"about.mission": "Mission",
		"about.mission1":
			"Comprehensive human capital solutions tailored to client needs.",
		"about.mission2":
			"Innovative training programs aligned with industry trends.",
		"about.mission3":
			"Effective headhunting services to bring in the best talent.",
		"about.values": "Our Values",
		"about.value1.title": "Dynamic",
		"about.value1.desc":
			"Always adaptive to changes and innovations in the workplace.",
		"about.value2.title": "Excellence",
		"about.value2.desc": "Excel in every service provided.",
		"about.value3.title": "Leading",
		"about.value3.desc":
			"Pioneer in developing innovative human capital solutions.",

		// Services Section
		"services.title": "Our Premium Services",
		"services.description":
			"Complete HR development solutions trusted for your company's advancement",
		"services.all": "View All Services",
		"service.verified": "Certified",

		// Service Items
		"service1.title": "Management Consulting",
		"service1.desc":
			"Comprehensive solutions for formulating strategy, improving operational efficiency, optimizing resources, managing change, and mitigating business risks.",
		"service1.cta": "Consult now",

		"service2.title": "Human Capital Management Consulting",
		"service2.desc":
			"Strategic approach to HC strategy, organizational development, performance management, talent & succession, as well as competitive compensation and benefits.",
		"service2.cta": "Learn more",

		"service3.title": "Headhunter",
		"service3.desc":
			"End-to-end service: job profiling, data-based sourcing & screening, assessment & behavioral interviews, offer negotiation, to onboarding.",
		"service3.cta": "Find talent",

		"service4.title": "Employee Training",
		"service4.desc":
			"Flexible programs: soft skills & leadership, technical & specialization, digital & technology, custom programs, as well as coaching & mentoring for optimal performance.",
		"service4.cta": "Training schedule",

		"service5.title": "Competency Certification",
		"service5.desc":
			"Comprehensive certification: test preparation, accompaniment & assessment, upgrade/re-certification, BNSP RI certification, and international certification.",
		"service5.cta": "View agenda",

		// CTA Section
		"cta.title": "Need a custom solution for your company?",
		"cta.button": "Free Consultation",

		// Workflow Section
		"workflow.title": "Service Workflow",
		"workflow.step1.title": "Consultation",
		"workflow.step1.desc": "Understand needs",
		"workflow.step2.title": "Offer",
		"workflow.step2.desc": "Plan & schedule",
		"workflow.step3.title": "Agreement",
		"workflow.step3.desc": "Scope agreed",
		"workflow.step4.title": "Implementation",
		"workflow.step4.desc": "Program execution",
		"workflow.step5.title": "Evaluation",
		"workflow.step5.desc": "Report & follow-up",

		// Agenda Page
		"agenda.title": "Upcoming Agenda",
		"agenda.register": "Register Now",
		"agenda.noUpcoming": "No upcoming agenda at this time.",

		// Blog Page
		"blog.title": "Blog",
		"blog.readMore": "Read more",
		"blog.back": "Back to Blog",
		"latestArticles.title": "Latest Articles",

		// Not Found Page
		"notFound.message": "Page not found",
		"notFound.back": "Back to Home",

		// Footer
		"footer.description":
			"Certification, training, selection, and placement of human resources in Indonesia.",
		"footer.headOffice": "Head Office",
		"footer.headOffice.address1":
			"Indonesia Stock Exchange Building Tower 1 Level 3, Unit 304",
		"footer.headOffice.address2":
			"Jalan Jendral Sudirman Kav. 52-53, SCBD Senayan,",
		"footer.headOffice.address3":
			"Kebayoran Baru, South Jakarta, DKI Jakarta",
		"footer.marketingOffice": "Marketing Office",
		"footer.marketingOffice.address1":
			"Cikarang Technopark, Jalan Inti I Block C1 No. 7",
		"footer.marketingOffice.address2":
			"Cibatu, South Cikarang, Bekasi Regency",
		"footer.marketingOffice.address3": "West Java 17530",
		"footer.operationalOffice": "Operational Office",
		"footer.operationalOffice.address1":
			"Taman Widya Asri Block GG No. 18, Serang",
		"footer.operationalOffice.address2": "Serang City, Banten 46111",
		"footer.copyright":
			"© {year} PT. Delta Tiga Enam. All rights reserved.",

		// Testimonials
		"testimonials.title": "What Our Clients Say",

		// FAQ
		"faq.title": "FAQ",

		// Why Us (Values)
		"whyUs.title": "Our Values",
		"whyUs.description": "The values that form our foundation",
		"whyUs.value1.title": "Dynamic",
		"whyUs.value1.desc": "Always adaptive to changes and innovations in the workplace.",
		"whyUs.value2.title": "Excellence",
		"whyUs.value2.desc": "Excel in every service provided.",
		"whyUs.value3.title": "Leading",
		"whyUs.value3.desc": "Pioneer in developing innovative human capital solutions.",
		"whyUs.value4.title": "Transcendent",
		"whyUs.value4.desc": "Exceeding client expectations and delivering sustainable added value.",
		"whyUs.value5.title": "Action",
		"whyUs.value5.desc": "Results-oriented and concrete action to achieve goals.",

		// CSChat
		"cschat.button": "Contact Us",
		"cschat.title": "Connect with Us",
		"cschat.description":
			"We're online during business hours (Monday–Friday, 09:00–17:00 WIB).",
		"cschat.whatsapp": "Chat via WhatsApp",
		"cschat.email": "Send Email",

		// Delivery
		"delivery.title": "Service Workflow",
		"delivery.step": "Step",
		"delivery.steps.consultation.title": "Consultation",
		"delivery.steps.consultation.desc": "Understand your needs.",
		"delivery.steps.offer.title": "Offer",
		"delivery.steps.offer.desc": "Clear plan & schedule.",
		"delivery.steps.implementation.title": "Implementation",
		"delivery.steps.implementation.desc": "Effective training/assessment.",
		"delivery.steps.certification.title": "Certification",
		"delivery.steps.certification.desc": "Measurable & recognized results.",
	},
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
	const [language, setLanguage] = useState<Language>("id");

	// Load language preference from localStorage on initial load
	useEffect(() => {
		const savedLanguage = localStorage.getItem(
			"language"
		) as Language | null;
		if (savedLanguage) {
			setLanguage(savedLanguage);
		}
	}, []);

	// Save language preference to localStorage when it changes
	useEffect(() => {
		localStorage.setItem("language", language);
	}, [language]);

	const t = (key: string): string => {
		return (
			translations[language][
				key as keyof (typeof translations)[typeof language]
			] || key
		);
	};

	return (
		<LanguageContext.Provider value={{ language, setLanguage, t }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = () => {
	const context = useContext(LanguageContext);
	if (context === undefined) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
