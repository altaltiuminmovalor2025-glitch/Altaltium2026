 // Función para formatear números a moneda
      function formatCurrency(value) {
        return new Intl.NumberFormat('es-MX', {
          style: 'currency',
          currency: 'MXN',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }).format(value);
      }

      // Función para formatear los precios en la tabla
      function formatTablePrices() {
        const priceCells = document.querySelectorAll('.price-cell');
        priceCells.forEach(cell => {
          const price = parseFloat(cell.getAttribute('data-price')) || 0;
          cell.textContent = formatCurrency(price);
        });
      }

      // Efecto de scroll para la barra y el hero
      window.addEventListener("scroll", () => {
        const navbar = document.querySelector(".navbar");
        const hero = document.querySelector(".hero");
        if (window.scrollY > 50) {
          navbar.classList.add("visible");
          navbar.classList.add("scrolled");
          hero.classList.add("scrolled");
        } else {
          navbar.classList.remove("visible");
          navbar.classList.remove("scrolled");
          hero.classList.remove("scrolled");
        }
      });
    
      // Función para filtrar la tabla
      function filterTable() {
        const searchInput = document.getElementById("searchInput").value.toLowerCase();
        const zoneFilter = document.getElementById("zoneFilter").value;
        const tableBody = document.getElementById("tableBody");
        const rows = tableBody.getElementsByTagName("tr");
        const noDataRow = document.getElementById("noDataRow");
        const noResultsRow = document.getElementById("noResultsRow");
    
        let hasResults = false;
        for (let row of rows) {
          const cells = row.getElementsByTagName("td");
          if (cells.length === 0 || row.id === "noDataRow" || row.id === "noResultsRow") continue; // Ignorar filas sin datos o mensajes
          const estado = cells[0].textContent.toLowerCase();
          const alcaldia = cells[1].textContent.toLowerCase();
          const colonia = cells[2].textContent.toLowerCase();
          const zona = cells[4].textContent;
    
          const matchesSearch = searchInput
            ? estado.includes(searchInput) ||
              alcaldia.includes(searchInput) ||
              colonia.includes(searchInput) ||
              zona.toLowerCase().includes(searchInput)
            : true;
          const matchesZone = zoneFilter ? zona === zoneFilter : true;
    
          if (matchesSearch && matchesZone) {
            row.style.display = "";
            hasResults = true;
          } else {
            row.style.display = "none";
          }
        }
    
        // Mostrar mensaje si no hay resultados
        if (noDataRow) {
          noDataRow.style.display = hasResults || rows.length > 1 ? "none" : "";
        }
        if (noResultsRow) {
          noResultsRow.style.display = !hasResults && rows.length > 1 ? "" : "none";
        }

        // Reaplicar formato de precios después de filtrar
        formatTablePrices();
      }
    
      // Escuchar cambios en el campo de búsqueda y el filtro de zona
      document.getElementById("searchInput").addEventListener("input", filterTable);
      document.getElementById("zoneFilter").addEventListener("change", filterTable);

      // Formatear precios al cargar la página
      document.addEventListener("DOMContentLoaded", formatTablePrices);