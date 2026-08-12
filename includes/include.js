
/* =========================================
   HEADER + FOOTER INCLUDE
   ========================================= */

async function loadIncludes() {

    try {

        // ================================
        // HEADER
        // ================================

        const header = document.getElementById("site-header");

        if (header) {

            const response = await fetch("includes/header.html");

            if (!response.ok) {
                throw new Error("Header failed to load");
            }

            header.innerHTML = await response.text();
        }


        // ================================
        // FOOTER
        // ================================

        const footer = document.getElementById("site-footer");

        if (footer) {

            const response = await fetch("includes/footer.html");

            if (!response.ok) {
                throw new Error("Footer failed to load");
            }

            footer.innerHTML = await response.text();
        }


        console.log("Header and footer loaded successfully.");

    } catch (error) {

        console.error("Include loading error:", error);

    }

}


/* Start */
document.addEventListener("DOMContentLoaded", loadIncludes);

