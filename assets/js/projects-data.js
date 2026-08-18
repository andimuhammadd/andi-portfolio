const PROJECTS = [
  {
    title: "Server Monitoring Stack (Prometheus, Grafana, Alertmanager)",
    status: "LIVE",
    description: "Stack monitoring infrastruktur production-grade yang mendeteksi anomali CPU, RAM, disk, dan downtime service secara real-time, lengkap dengan alerting otomatis ke Telegram. Seluruh stack didefinisikan sebagai kode (Docker Compose) sehingga bisa di-deploy ulang ke server mana pun hanya dalam beberapa menit.",
    tags: ["Docker", "Prometheus", "Grafana", "Alertmanager", "Linux", "Telegram API"],
    liveUrl: "",
    repoUrl: "https://github.com/andimuhammadd/server-monitoring-stack",
    image: "assets/images/grafana-dashboard.png"
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
    title: "VPS Security Hardening Toolkit",
    status: "LIVE",
    description: "Studi kasus hardening keamanan server produksi yang sedang aktif melayani bisnis nyata: SSH key authentication, fail2ban, firewall rate limiting, dan automatic security updates — lengkap dengan dokumentasi trade-off keputusan keamanan vs kebutuhan operasional tim, plus script audit yang reusable.",
    tags: ["Linux", "Bash", "SSH", "fail2ban", "UFW", "Security"],
    liveUrl: "",
    repoUrl: "https://github.com/andimuhammadd/vps-hardening-toolkit",
    image: "assets/images/audit-output.png"
  }
];
