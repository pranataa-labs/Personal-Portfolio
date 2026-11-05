# AGENTS.md — Universal AI Coding Assistant Directives
# Reference: https://github.com/pranataa-labs/workflow-master

**Stack:** Universal Full-Stack / Data Science / Machine Learning  
**Operating Workflow:** Terintegrasi penuh dengan [Workflow Master](https://github.com/pranataa-labs/workflow-master).

---

## 1. Operating Discipline & 9-Stage Engineering Workflow
Semua pekerjaan rekayasa pada repositori ini WAJIB mematuhi 9 tahapan alur kerja di Workflow Master:
1. **Triage:** Pahami tujuan, klasifikasikan tipe tugas, dan tentukan tingkat risiko (Low / Medium / High).
2. **Discover:** Periksa file terkait, konfigurasi paket (`package.json`, `composer.json`, `requirements.txt`), skema DB, dan kontrak sebelum modifikasi.
3. **Design:** Rancang acceptance criteria, alur data/API, dan batasan penanganan error.
4. **Plan:** Tentukan file dan urutan perubahan secara minimalis, proporsional, dan modular.
5. **Implement:** Tulis kode bersih, type-safe, aman, dan mematuhi konvensi proyek.
6. **Verify:** Jalankan test suite, linter, atau typechecker yang tersedia dengan bukti output eksekusi nyata.
7. **Review:** Periksa diff, otorisasi, dan cegah kebocoran rahasia / API keys / data PII.
8. **Release:** Verifikasi kesehatan rilis dan kelayakan deploy jika diotorisasi.
9. **Report:** Laporkan hasil verifikasi secara transparan dan berbasis fakta.

---

## 2. Core Rules & Autonomous Archetype Scaffolding
- **Rule 16 — Autonomous Project Scaffolding:** Ketika diminta membuat sistem/aplikasi baru berbasis domain (misal: toko buku, antrian klinik, kasir/POS, SaaS, LMS, booking jasa), **JANGAN tanyakan kebutuhan dasar** (auth, keranjang, warna, font). Langsung terapkan:
  - Bangun arsitektur dua sisi (*Dual-Sided*: Customer Flow dengan palet/tipografi khas domain via `distinctive-ui-design` + Admin Backoffice dengan rute terproteksi/diobfuskasi via `shadcn-admin-design-system`).
  - Sertakan data awal realistis (*seed data*) 6–12 item domain lengkap dengan gambar sampul dan akun demo siap pakai (`admin@example.com` / `password123` dan `user@example.com` / `password123`).
- **Rule 17 — Machine Learning & MLOps:** Terapkan *Simple Baseline First*, kunci random seed global untuk reproduktifitas, cegah *Data Leakage* dengan `Pipeline` dan `ColumnTransformer` yang hanya di-fit pada data latih, lakukan *Slice Analysis*, dan lindungi inferensi runtime.
- **Rule 18 — AI Operational Discipline & Anti-Amnesia:**
  - *Contextual Synthesis over Blind Mimicry:* Jangan menyalin teks/topik referensi eksternal secara buta; sesuaikan dengan manifest aktual proyek (`package.json`, dll.).
  - *Clean Production Handoff:* Bersihkan seluruh bypass demo dan form pre-filled sebelum menyerahkan UI produksi.
  - *Strict Auth & Session Boundaries:* Kunci aksi tamu vs member (keranjang, checkout) dan sembunyikan elemen UI khusus member bagi tamu.
  - *Permanent Cache-Busting:* Gunakan nama file baru saat memperbarui gambar dokumentasi GitHub agar tidak terjebak cache proxy GitHub Camo.
  - *Feature-First Documentation:* Utamakan kapabilitas teknis dan fitur bisnis; jangan boroskan ruang untuk tabel kode warna.
  - *Unboxed Assets:* Biarkan logo melayang bebas (*card-free*) tanpa bingkai kotak kaku.
- **Rule 19 — Anti-Slop Web Design, Mobile Ergonomics & Security Audit Skills:**
  - *Anti-Slop Web Design:* Tolak estetika AI generik (larang gradient ungu-violet acak, 3 kartu seragam, nested card borders, dan font Inter seragam tanpa kontras hierarki). Pisahkan Surface Mode (*Persuade, Operate, Read, Experience*) menggunakan 8 arketipe visual domain di `distinctive-ui-design` dan validasi dengan `ui-sloplint.ps1`.
  - *Mobile-First & Touch Ergonomics:* Terapkan ukuran target sentuh minimal 44×44px (iOS) / 48×48px (Android), optimasi zona jempol bawah (*Thumb Zone*), ganti modal tengah kaku dengan *Bottom Sheet* swipeable pada ponsel, dan pasang safe area insets `env(safe-area-inset-*)`.
  - *Humanized Copy:* Hindari frasa retorika AI klise (`delve`, `testament to`, `in today's fast-paced world`, formula `not only X but Y`); gunakan bahasa lugas, manusiawi, dan autentik.
  - *Autonomous Security Audit:* Terapkan protokol audit 4-fase (Reconnaissance, Vulnerability Hunting OWASP Top 10, Proof Validation, Structured Patching) sebelum rilis.
- **Rule 20 — Concise Code, Clean Logs & Professional Documentation Discipline:**
  - *Anti-Emoji Clutter:* DILARANG menyematkan emoji pada pemanggilan log/print (`print()`, `console.log()`, `Log::info()`, `logger`), komentar kode (`#`, `//`, `/* */`), subjudul/heading dokumentasi `README.md`, dan commit messages. Gunakan teks tag log formal (`[INFO]`, `[SUCCESS]`, `[WARN]`, `[ERROR]`) dan validasi dengan `check-code-hygiene.ps1`.
  - *Kata Baku & Lugas (PUEBI/KBBI):* Wajib menggunakan bahasa baku resmi sesuai kamus teknis KBBI di `clean-code-concise-docs` (atau Technical English formal). Hindari bahasa pergaulan, singkatan santai (`yg`, `tdk`, `utk`, `kyk`), dan frasa retorika AI klise.
  - *Singkat, Padat & Berbobot:* Tulis komentar kode hanya untuk menjelaskan alasan arsitektural (*why*), bukan mengulang sintaks (*what*). Buat dokumentasi README langsung ke inti masalah (*to-the-point*), instruksi instalasi langsung dapat disalin, dan hilangkan basa-basi panjang.
- **Rule 05 — Security Baseline:** Validasi semua input di server, gunakan prepared statements, cegah SQL injection, XSS, dan lindungi kredensial.
- **Rule 11.1 — Mandatory README Topics & GitHub Metadata Sync:** Pada SETIAP pembuatan atau pembaruan `README.md` di seluruh repositori ekosistem, AI **WAJIB** menyertakan baris tautan topik GitHub tepat di bawah judul/subjudul:
  ```markdown
  [`react`](https://github.com/topics/react) • [`typescript`](https://github.com/topics/typescript) • [`tailwind`](https://github.com/topics/tailwind) • [`shadcn-ui`](https://github.com/topics/shadcn-ui)
  ```
  Topik dipilih secara kontekstual (5–10 tag) sesuai dependensi riil dan domain proyek. Selain itu, AI **WAJIB** otomatis menyelaraskan metadata topik ke repositori GitHub menggunakan `gh repo edit <owner>/<repo> --add-topic <tags>`. DILARANG membuat atau memperbarui README tanpa baris topik ini.
- **Rule 04 — Testing & QA:** Terapkan pola AAA (Arrange-Act-Assert), isolasi test, dan mock external services.
- **Rule 12 — Git & AI Hygiene:** Buat commit atomik dengan standar Conventional Commits (`feat:`, `fix:`, `refactor:`, `test:`, `docs:`).
- **Rule 12.1 — Dual-Account Co-Authorship & Pairing (Otomatis Tanpa Perintah):** Pada SETIAP commit Git di seluruh repositori ekosistem, AI WAJIB menyertakan trailer co-author akun kedua secara otomatis dan mandiri, TANPA perlu diminta atau diperintahkan lagi oleh pengguna:
  ```text
  Co-authored-by: aria sastra <192975116+ariasastra-dev@users.noreply.github.com>
  ```
  Aturan ini bersifat permanen dan non-negotiable untuk menjaga sinkronisasi kontribusi dan membuka/meningkatkan tier badge GitHub (**Pair Extraordinaire**, **Pull Shark**, dan **YOLO** via alur Branch & PR). DILARANG membuat commit tanpa trailer ini. Selain itu, pada setiap inisialisasi/publikasi repositori baru, AI WAJIB otomatis mengundang akun `ariasastra-dev` sebagai collaborator dengan push permission.
- **Rule 12.2 — Mandatory Branch & Pull Request Flow (Dilarang Direct Push ke `main`):** Pada SETIAP pembaruan kode, perbaikan bug, refaktorisasi, maupun pembaruan dokumentasi di repositori yang telah memiliki cabang utama (`main`), AI **DILARANG KERAS** melakukan *direct push* (`git push origin main`). AI **WAJIB** secara otomatis dan mandiri menjalankan alur **Branch -> Commit (dengan Co-Author Rule 12.1) -> Push Branch -> Buat Pull Request (`gh pr create`) -> Merge Pull Request (`gh pr merge --merge --delete-branch`) -> Pull `main`** menggunakan skrip `skills/git-commit-craft/scripts/ship-pr.ps1` agar setiap pengiriman kode secara konsisten meningkatkan pencapaian lencana **Pull Shark**, **Pair Extraordinaire**, dan **YOLO**.

---

## 3. Agent Skills (Prosedur Eksekusi — 16 Skills)
Rules di atas menetapkan kewajiban; skill di [skills/](https://github.com/pranataa-labs/workflow-master/tree/main/skills) menetapkan langkah eksekusi dan skrip validatornya. Gunakan skill sesuai tahap:
- **Discover / Data Exploration:** `data-analysis-explorer` (profiling dataset akurasi penuh, kohort, anomali IQR/MAD, `scripts/profile-dataset.py`).
- **Design / Plan:** `domain-scaffolding` (Rule 16), `distinctive-ui-design` (8 arketipe visual domain, 4 Surface Modes, Craft Floor, `scripts/ui-sloplint.ps1`).
- **Implement (Web & UI):** `clean-code-concise-docs` (KBBI, anti-emoji, `scripts/check-code-hygiene.ps1`), `shadcn-admin-design-system` (4 komposisi backoffice Mode Operate), `laravel-web-studio`.
- **Implement (Data Science & ML):** `data-science-workbench` (uji hipotesis, efek ukuran, koreksi Holm-Bonferroni, `scripts/stat-test.py`), `ml-model-engineering` (Pipeline anti-leakage, perbandingan baseline vs kandidat, slice analysis, `scripts/train-evaluate-baseline.py`).
- **Verify:** `verify-and-test` (`scripts/verify.ps1`). Dilarang mengklaim berhasil tanpa bukti output eksekusi nyata.
- **Review:** `diff-review` (`scripts/scan-diff.ps1`, wajib sebelum setiap commit), `security-audit` (`scripts/audit-recon.ps1`, wajib sebelum rilis), `git-commit-craft` (`scripts/ship-pr.ps1`, wajib untuk alur Branch & PR).
- **Release:** `github-repo-publish` (`scripts/publish-repo.ps1`), `release-deploy-check` (`scripts/check-deploy.ps1`).
- **Report:** `readme-github-sync` (`scripts/check-readme.ps1`, `scripts/sync-topics.ps1`), `professional-report-writer` (laporan eksekutif Piramida Minto, KPI strip, KaTeX, Cetak/PDF A4, `scripts/build-html-report.py`).
