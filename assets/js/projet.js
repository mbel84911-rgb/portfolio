const projects = [
    { src: "assets/imgs/AD.png",           alt: "Active Directory",      doc: "documentation/active directory.pdf" },
    { src: "assets/imgs/apache.png",       alt: "Changement port Apache", doc: "documentation/changement port apache-1.pdf" },
    { src: "assets/imgs/ssh.png",          alt: "Changement port SSH",    doc: "documentation/changement port ssh-1.pdf" },
    { src: "assets/imgs/cisco.png",        alt: "Config Switch Routeur",  doc: "documentation/config switch routeur-1.pdf" },
    { src: "assets/imgs/glpi.png",         alt: "Déploiement GLPI",       doc: "documentation/deploiement GLPI.pdf" },
    { src: "assets/imgs/haproxy.png",      alt: "HAProxy",                doc: "documentation/haproxy.pdf" },
    { src: "assets/imgs/POWERSHELL.png",   alt: "PowerShell",             doc: "documentation/POWERSHELL.pdf" },
    { src: "assets/imgs/ppe-elephant.png", alt: "PPE Éléphant",           doc: "documentation/elephant.pdf" },
];

function updateGrid() {
    const grid = document.getElementById("projectGrid");
    grid.innerHTML = projects.map(project => `
        <div class="project">
            <img src="${project.src}" alt="${project.alt}" class="img-project">
            <div class="overlay">
                <p class="project-title">${project.alt}</p>
                <a href="${project.doc}" target="_blank" download class="btn btn-primary">Télécharger</a>
            </div>
        </div>
    `).join('');
}

updateGrid();