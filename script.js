  const NAME = "Brajkant";
        const DEFAULTS = {
            marks: [], certs: [
                { t: "Power BI", i: "Skill Course", y: "2026", l: "" },
                { t: "Tally ERP 9", i: "School Edge Learning Foundation", y: "2021–2022", l: "" },
                { t: "Microsoft Office", i: "School Edge Learning Foundation", y: "2021–2022", l: "" }]
        };
        const PROJ = {
            expense: { n: "Expense Tracker (Python)", tech: "Python, JSON", d: "A command-line app to track daily spending.", b: ["Built add, view and delete features, with the date added automatically.", "Showed category-wise totals and a grand total.", "Saved data in a JSON file, with input validation and try/except error handling."], tags: ["Python", "JSON", "File handling"], links: [["Source code", "https://github.com/Brajkant02/Expense-Tracker-Python"]] },
            learnx: { n: "BK LearnX – Learning Platform", tech: "Node.js, Express, MySQL, JavaScript", d: "A full-stack educational platform with user accounts.", b: ["Built user registration and login with a Node.js and Express backend and a MySQL database.", "Created REST API endpoints that connect the frontend to the database.", "Deployed the frontend on Vercel and the backend on Render."], tags: ["Node.js", "Express", "MySQL", "REST API"], links: [["Live site", "https://bk-learn-x.vercel.app/"], ["Source code", "https://github.com/Brajkant02/Bk-LearnX"]] },
            hospital: { n: "Hospital Data Dashboard", tech: "MS Excel", d: "An Excel dashboard to analyse hospital records. The file has private contact details, so it is not shared publicly.", b: ["Organised records of 47 hospitals across 3 states and 4 territories.", "Built pivot tables, charts and slicers to analyse hospitals by state, territory and type.", "Used COUNT, COUNTIF and COUNTIFS formulas in a summary sheet."], tags: ["Excel", "Pivot tables", "Slicers", "COUNTIFS"], links: [] },
            portfolio: { n: "Portfolio Website", tech: "HTML, CSS, JavaScript", d: "This site: responsive, with dark mode and a role-wise resume generator.", b: ["Designed a responsive layout with a mobile menu and dark mode.", "Built a resume generator that prints a role-specific resume as PDF.", "Added marks and certificate sections that I can update from the page."], tags: ["HTML", "CSS", "JavaScript"], links: [["Source code", "https://github.com/Brajkant02/Brajkant-Portfolio"]] }
        };
        const EDU = [["PGDCA (Post Graduate Diploma in Computer Applications)", "Government Polytechnic, Kanpur", "2025 – 2027 (Pursuing)"], ["B.Sc. (Zoology)", "Chhatrapati Shahu Ji Maharaj University, Kanpur", "2022 – 2025"]];
        const CONTACT = ["Kanpur, Uttar Pradesh", "+91 9355354035", "brajkant02@gmail.com", "github.com/Brajkant02", "linkedin.com/in/brajkant-sharma-2b027b402"];
        const LANG = ["Python (Intermediate)", "JavaScript (Intermediate)", "Java (Basic)"].join(", ");
        const ROLES = {
            python: {
                label: "Python Developer", head: "Junior Python Backend Developer (Fresher)",
                sum: "Fresher with a solid base in Python, OOP and data structures. Built a command-line Expense Tracker in Python with JSON storage, and a full-stack app with Node.js, Express and MySQL. Looking for a junior or trainee Python backend role.",
                skills: [["Languages", LANG], ["Python", "OOP, functions, file and JSON handling, exception handling, data structures and algorithms"], ["Database and APIs", "MySQL, SQL, REST APIs, Node.js and Express (Basic)"], ["Tools", "Git, GitHub, VS Code"]], projects: ["expense", "learnx"]
            },
            software: {
                label: "Software Engineer", head: "Software Developer (Fresher)",
                sum: "Fresher with working knowledge of Python, JavaScript and Java, OOP and data structures. Built and deployed a full-stack web app and a Python command-line tool. Looking for a trainee or junior software developer role.",
                skills: [["Languages", LANG], ["Core concepts", "OOP, data structures and algorithms, exception handling"], ["Web and backend", "HTML, CSS, JavaScript, Node.js (Basic), Express (Basic), REST APIs"], ["Database", "MySQL, SQL"], ["Tools", "Git, GitHub, VS Code, Vercel, Render"]], projects: ["learnx", "expense"]
            },
            frontend: {
                label: "Frontend Developer", head: "Junior Frontend Developer (Fresher)",
                sum: "Fresher building responsive websites with HTML, CSS and JavaScript. Deployed a full-stack learning platform on Vercel and built a portfolio site with dark mode and a mobile menu. Looking for a junior frontend developer role.",
                skills: [["Frontend", "HTML, CSS, JavaScript (Intermediate), responsive design"], ["Backend basics", "Node.js, Express (Basic), REST APIs, MySQL"], ["Tools", "Git, GitHub, VS Code, Vercel, Render"]], projects: ["learnx", "portfolio"]
            },
            data: {
                label: "Data Entry / Accountant", head: "Data Entry Operator | MIS Executive | Accounts Assistant", certs: true,
                sum: "Fresher trained in MS Excel, Tally ERP 9, Power BI and MySQL. Built an Excel dashboard analysing 47 hospital records by state, territory and type. Focused on accurate, clean data and on-time reporting. Looking for a Data Entry, MIS or Accounts Assistant role.",
                skills: [["Excel", "Pivot Tables, Slicers, VLOOKUP, XLOOKUP, SUMIF, COUNTIF, COUNTIFS, Data Validation, Conditional Formatting, Charts"], ["Power BI", "Data cleaning, dashboards, data visualisation"], ["Tally ERP 9", "Ledgers, vouchers, financial data entry"], ["MySQL", "SQL queries, joins, aggregate functions"], ["MS Word and PowerPoint", "Reports, mail merge, presentations"], ["Typing speed", "30 WPM"]], projects: ["hospital"]
            }
        };
        const $ = s => document.querySelector(s);
        const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
        const safe = u => /^https?:\/\//i.test(u) ? u : "";
        const clone = o => JSON.parse(JSON.stringify(o));
        let store; try { store = JSON.parse(localStorage.getItem("pf") || "null") } catch (e) { }
        store = store && store.marks && store.certs ? store : clone(DEFAULTS);
        const save = () => { try { localStorage.setItem("pf", JSON.stringify(store)) } catch (e) { } };
        let editing = false, role = "python";
        document.querySelectorAll("[data-name]").forEach(n => n.textContent = NAME);

        function renderProj() {
            $("#projList").innerHTML = ["learnx", "expense", "hospital", "portfolio"].map(k => {
                const p = PROJ[k];
                return `<article class="card"><h3>${esc(p.n)}</h3><span>${esc(p.d)}</span><ul>${p.b.map(x => `<li>${esc(x)}</li>`).join("")}</ul><div class="tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join("")}</div><div class="links">${p.links.map(l => `<a href="${esc(l[1])}" target="_blank" rel="noopener">${esc(l[0])}</a>`).join("")}</div></article>`
            }).join("");
        }
        function renderMarks() {
            $("#marksList").innerHTML = store.marks.map((m, i) => {
                const p = Math.round(m.o / m.t * 1000) / 10;
                return `<div class="card"><b>${esc(m.s)}</b><span class="muted">${esc(m.e || "")}</span><div class="bar"><i style="width:${Math.min(p, 100)}%"></i></div><div>${esc(m.o)} / ${esc(m.t)} (${p}%)</div><button class="del editonly" data-k="marks" data-i="${i}">Delete</button></div>`
            }).join("");
            $("#marks").classList.toggle("hide", !store.marks.length && !editing);
        }
        function renderCerts() {
            $("#certList").innerHTML = store.certs.map((c, i) => {
                const u = safe(c.l);
                return `<div class="card"><b>${esc(c.t)}</b><span class="muted">${esc(c.i)}${c.y ? " · " + esc(c.y) : ""}</span>${u ? `<div class="links"><a href="${esc(u)}" target="_blank" rel="noopener">View certificate</a></div>` : ""}<button class="del editonly" data-k="certs" data-i="${i}">Delete</button></div>`
            }).join("");
            $("#certs").classList.toggle("hide", !store.certs.length && !editing);
        }
        function renderRes() {
            $("#tabs").innerHTML = Object.keys(ROLES).map(k => `<button class="tab${k === role ? " on" : ""}" data-r="${k}">${esc(ROLES[k].label)}</button>`).join("");
            const r = ROLES[role];
            $("#paper").innerHTML = `<h1>${esc(NAME)}</h1><p class="hd">${esc(r.head)}</p><p class="ct">${CONTACT.map(esc).join(" | ")}</p>
 <h4>Summary</h4><p>${esc(r.sum)}</p>
 <h4>Skills</h4>${r.skills.map(s => `<p><b>${esc(s[0])}:</b> ${esc(s[1])}</p>`).join("")}
 <h4>Projects</h4>${r.projects.map(id => { const p = PROJ[id]; return `<p><b>${esc(p.n)}</b> | ${esc(p.tech)}</p><ul>${p.b.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` }).join("")}
 <h4>Education</h4>${EDU.map(e => `<p><b>${esc(e[0])}</b>, ${esc(e[1])} | ${esc(e[2])}</p>`).join("")}
 ${r.certs && store.certs.length ? `<h4>Certifications</h4><ul>${store.certs.map(c => `<li>${esc(c.t)}, ${esc(c.i)}${c.y ? " | " + esc(c.y) : ""}</li>`).join("")}</ul>` : ""}`;
            document.title = NAME + " – " + r.label + " Resume";
        }
        function render() { renderProj(); renderMarks(); renderCerts(); renderRes() }

        document.addEventListener("click", e => {
            const d = e.target.closest(".del"); if (d) { store[d.dataset.k].splice(+d.dataset.i, 1); save(); render(); return }
            const t = e.target.closest(".tab"); if (t) { role = t.dataset.r; renderRes() }
            if (e.target.closest("#nav a")) $("#nav").classList.remove("open");
        });
        $("#menu").onclick = () => $("#nav").classList.toggle("open");
        $("#theme").onclick = () => { const r = document.documentElement, dark = r.dataset.theme ? r.dataset.theme === "dark" : matchMedia("(prefers-color-scheme:dark)").matches; r.dataset.theme = dark ? "light" : "dark" };
        $("#print").onclick = () => window.print();
        $("#edit").onclick = () => { editing = !editing; document.body.classList.toggle("edit", editing); $("#edit").textContent = editing ? "Close edit mode" : "Edit mode"; render() };
        $("#export").onclick = () => { const p = $("#exp"); p.textContent = "const DEFAULTS=" + JSON.stringify(store, null, 1) + ";"; p.classList.remove("hide") };
        $("#reset").onclick = () => { if (confirm("Reset marks and certificates to the saved defaults?")) { try { localStorage.removeItem("pf") } catch (e) { } store = clone(DEFAULTS); render() } };
        $("#marksForm").onsubmit = e => {
            e.preventDefault(); const f = e.target, o = parseFloat(f.o.value), t = parseFloat(f.t.value);
            if (!(t > 0) || !(o >= 0) || o > t) { alert("Marks obtained must be between 0 and the total."); return }
            store.marks.push({ s: f.s.value.trim(), o, t, e: f.e.value.trim() }); save(); f.reset(); render()
        };
        $("#certForm").onsubmit = e => {
            e.preventDefault(); const f = e.target, l = f.l.value.trim();
            store.certs.push({ t: f.t.value.trim(), i: f.i.value.trim(), y: f.y.value.trim(), l: safe(l) }); save(); f.reset(); render()
        };
        render();