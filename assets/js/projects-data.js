/* =========================================================
   DATA PROJECT
   ---------------------------------------------------------
   Ini satu-satunya file yang perlu kamu edit untuk
   menambah / mengubah / menghapus project.

   Cara menambah project baru:
   1. Salin satu blok { ... } di bawah.
   2. Ganti isinya sesuai project kamu.
   3. Tambahkan koma setelah tanda kurung kurawal "}" sebelumnya.
   4. Simpan file ini, lalu upload ulang / push ke Netlify.

   Tips: kamu juga bisa buka file admin.html di browser,
   isi form-nya, lalu tinggal copy-paste kode yang otomatis
   dibuat ke dalam array di bawah ini.

   Field:
   - title       : nama project
   - status      : contoh "LIVE", "IN PROGRESS", "ARCHIVED"
   - description : penjelasan singkat (1-3 kalimat)
   - tags        : array teknologi yang dipakai
   - liveUrl     : link demo / website yang bisa diakses (boleh "")
   - repoUrl     : link source code / GitHub (boleh "")
   ========================================================= */

const PROJECTS = [
  {
    title: "Dashboard Monitoring Jaringan",
    status: "LIVE",
    description: "Dashboard berbasis web untuk memantau status uptime, trafik, dan beban server VPS secara real-time, lengkap dengan notifikasi otomatis saat layanan down.",
    tags: ["PHP", "MySQL", "JavaScript", "Linux", "Bash"],
    liveUrl: "https://contoh-demo-monitoring.netlify.app",
    repoUrl: "https://github.com/username/network-monitoring-dashboard"
  },
  {
    title: "Sistem Manajemen Inventaris (Yii2)",
    status: "LIVE",
    description: "Aplikasi web internal untuk mencatat, melacak, dan melaporkan inventaris perangkat IT kantor, dibangun dengan Yii Framework dan MySQL, mendukung multi-role user.",
    tags: ["Yii Framework", "PHP", "MySQL", "Bootstrap"],
    liveUrl: "https://contoh-demo-inventaris.netlify.app",
    repoUrl: "https://github.com/username/inventory-management-yii2"
  },
  {
    title: "Skrip Otomasi Deployment VPS",
    status: "ARCHIVED",
    description: "Kumpulan Bash script untuk otomasi setup awal VPS: konfigurasi firewall, hardening SSH, instalasi stack LEMP, dan penjadwalan backup otomatis.",
    tags: ["Bash", "Linux", "Nginx", "Automation"],
    liveUrl: "",
    repoUrl: "https://github.com/username/vps-deployment-scripts"
  }
];
