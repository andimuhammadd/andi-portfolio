const PROJECTS = [
  {
    title: "Server Monitoring Stack (Prometheus, Grafana, Alertmanager)",
    status: "LIVE",
    description: "Stack monitoring infrastruktur production-grade yang mendeteksi anomali CPU, RAM, disk, dan downtime service secara real-time, lengkap dengan alerting otomatis ke Telegram. Seluruh stack didefinisikan sebagai kode (Docker Compose) sehingga bisa di-deploy ulang ke server mana pun hanya dalam beberapa menit.",
    tags: ["Docker", "Prometheus", "Grafana", "Alertmanager", "Linux", "Telegram API"],
    liveUrl: "",
    repoUrl: "https://github.com/andimuhammadd/server-monitoring-stack"
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
