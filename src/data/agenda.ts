export type AgendaItem = {
  id: string;
  title: string;
  date: string; // ISO
  location: string;
  description: string;
};

export const agenda: AgendaItem[] = [
  {
    id: "sertifikasi-ahli-k3",
    title: "Sertifikasi Ahli K3 Umum",
    date: "2025-09-05T09:00:00+07:00",
    location: "Jakarta",
    description: "Program sertifikasi K3 komprehensif untuk profesional industri.",
  },
  {
    id: "pelatihan-hrbp",
    title: "Pelatihan HR Business Partner",
    date: "2025-09-12T09:00:00+07:00",
    location: "Bandung",
    description: "Meningkatkan kompetensi HR menjadi mitra strategis bisnis.",
  },
  {
    id: "bootcamp-digital-marketing",
    title: "Bootcamp Digital Marketing",
    date: "2025-09-20T09:00:00+07:00",
    location: "Surabaya",
    description: "Kuasai strategi pemasaran digital end-to-end.",
  },
  {
    id: "assesment-center",
    title: "Assessment Center & Penyeleksian",
    date: "2025-10-01T09:00:00+07:00",
    location: "Jakarta",
    description: "Teknik penilaian kompetensi untuk penempatan kerja efektif.",
  },
];
