export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string; // ISO
  category: string;
};

export const posts: BlogPost[] = [
  {
    slug: "manfaat-sertifikasi-bagi-karier",
    title: "5 Manfaat Sertifikasi bagi Kemajuan Karier",
    excerpt: "Mengapa sertifikasi profesional penting untuk meningkatkan daya saing?",
    date: "2025-08-01",
    category: "Sertifikasi",
    content:
      "Sertifikasi memberikan bukti kompetensi yang diakui industri. Dengan sertifikasi, profesional memiliki kredibilitas lebih, peluang karier meningkat, dan gaji yang lebih kompetitif. Selain itu, proses sertifikasi mendorong pembelajaran berkelanjutan dan jaringan profesional yang lebih luas.",
  },
  {
    slug: "merancang-program-pelatihan-efektif",
    title: "Merancang Program Pelatihan yang Efektif",
    excerpt: "Langkah-langkah praktis menyusun pelatihan yang berdampak.",
    date: "2025-08-10",
    category: "Pelatihan",
    content:
      "Program pelatihan yang efektif dimulai dari analisis kebutuhan, tujuan yang terukur, kurikulum yang relevan, dan metode evaluasi yang tepat. Keterlibatan peserta dan fasilitator berpengalaman menjadi kunci keberhasilan.",
  },
  {
    slug: "tren-penyeleksian-tenaga-kerja",
    title: "Tren Penyeleksian Tenaga Kerja 2025",
    excerpt: "Bagaimana teknologi mengubah proses seleksi dan penempatan.",
    date: "2025-08-15",
    category: "Penyeleksian",
    content:
      "Automasi, AI, dan assessment berbasis kompetensi semakin dominan. Transparansi proses dan pengalaman kandidat menjadi fokus utama perusahaan modern.",
  },
];
