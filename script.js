const CSV_URL = 'galerie_dataviz.csv';

async function chargerCSV() {
  const response = await fetch(CSV_URL);
  const text = await response.text();
  Papa.parse(text, {
    header: true,
    skipEmptyLines: true,
    complete: (results) => {
      afficherCartes(results.data);
      peuplerFiltres(results.data);
    }
  });
}

function afficherCartes(data) {
  const container = document.getElementById("results");
  container.innerHTML = "";

  data.forEach(row => {
    const card = document.createElement("article");
    card.className = "card";
    card.setAttribute("tabindex", "0");
    card.setAttribute("data-theme", row["Thème"]);
    card.setAttribute("data-type", row["Type"]);
    card.innerHTML = `
      <strong>${row["Titre"]}</strong><br>
      <a href="${row["Lien"]}" target="_blank" rel="noopener">${row["Lien"]}</a><br>
      <em>${row["Auteur(s)"]} • ${row["Type"]} • ${row["Thème"]}</em>
      <p>${row["Description"]}</p>
    `;
    container.appendChild(card);
  });
}

function peuplerFiltres(data) {
  const themes = new Set();
  const types = new Set();

  data.forEach(row => {
    if (row["Thème"]) themes.add(row["Thème"]);
    if (row["Type"]) types.add(row["Type"]);
  });

  const themeSelect = document.getElementById("filtre-theme");
  const typeSelect = document.getElementById("filtre-type");

  themes.forEach(theme => {
    const opt = document.createElement("option");
    opt.value = theme;
    opt.textContent = theme;
    themeSelect.appendChild(opt);
  });

  types.forEach(type => {
    const opt = document.createElement("option");
    opt.value = type;
    opt.textContent = type;
    typeSelect.appendChild(opt);
  });
}

function appliquerFiltres() {
  const q = document.getElementById("search").value.toLowerCase();
  const theme = document.getElementById("filtre-theme").value;
  const type = document.getElementById("filtre-type").value;

  const cards = document.querySelectorAll(".card");
  let anyVisible = false;

  cards.forEach(card => {
    const matchText = card.innerText.toLowerCase();
    const matchTheme = card.getAttribute("data-theme");
    const matchType = card.getAttribute("data-type");

    const visible = matchText.includes(q) &&
      (!theme || matchTheme === theme) &&
      (!type || matchType === type);

    card.style.display = visible ? "flex" : "none";
    if (visible) anyVisible = true;
  });

  const container = document.getElementById("results");

  // Supprime un éventuel message précédent
  const oldMessage = document.getElementById("no-results");
  if (oldMessage) oldMessage.remove();

  if (!anyVisible) {
    const message = document.createElement("p");
    message.id = "no-results";
    message.textContent = "Aucun résultat trouvé.";
    message.style.gridColumn = "1 / -1";
    message.style.textAlign = "center";
    message.style.fontStyle = "italic";
    message.style.color = "#555";
    container.appendChild(message);
  }
}

document.getElementById("search").addEventListener("input", appliquerFiltres);
document.getElementById("filtre-theme").addEventListener("change", appliquerFiltres);
document.getElementById("filtre-type").addEventListener("change", appliquerFiltres);

chargerCSV();