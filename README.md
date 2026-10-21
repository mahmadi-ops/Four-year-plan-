# Mathematics and Computer Science Major Advising

A PreTeXt site for advising mathematics and computer science majors at Santa Clara University:

- **Four-year planners** (`assets/planner.html` for mathematics, `assets/cs-planner.html` for computer science): students build their own quarter-by-quarter plan (courses taken and intended), tick AP/IB/transfer credit separately, and get recommendations for what to take next with prerequisite, co-requisite and alternate-year warnings; the plan prints.
- **Course maps** (`assets/major-map.html`, `assets/cs-major-map.html`): each major on one page with every prerequisite drawn as an arrow.
- **Degree requirements** (`source/ch-requirements.ptx`, `source/ch-cs-requirements.ptx`): the rules from the 2026–27 Undergraduate Bulletin, which is the source for everything here.

## Build

```
pip install -r requirements.txt
pretext build web
pretext view web
```

Pushing to `main` builds the site and publishes it to the `gh-pages` branch (`.github/workflows/pretext-deploy.yml`). In the repository settings, point GitHub Pages at `gh-pages`.

## Layout

```
project.ptx                 target: web (xsl/custom-html.xsl)
xsl/custom-html.xsl         adds assets/wide.css to every page
publication/publication.ptx external directory = assets/
source/main.ptx             article shell
source/ch-planner.ptx       mathematics planner
source/ch-cs-planner.ptx    computer science planner
source/ch-maps.ptx          mathematics major map
source/ch-cs-map.ptx        computer science major map
source/ch-requirements.ptx  bulletin requirements, mathematics
source/ch-cs-requirements.ptx bulletin requirements, computer science
assets/                     the planners, maps and wide.css; copied to external/ in the built site
```

Each page in `assets/` is a self-contained HTML file. The planner and maps are embedded with `<interactive iframe="...">` and can also be opened directly at `external/<file>.html` on the built site.

## Course offerings

The Bulletin says which courses run in alternate years but not which quarters or which years. The mathematics planner's offerings table holds placeholders; the computer science planner uses the department's tentative 2026–27 schedule. Once the department's rotation is known, edit the `off` (Fall/Winter/Spring) and `alt` (even/odd year) fields in the course table near the top of `assets/planner.html` so every visitor sees the real schedule.

## Updating for a new bulletin

Prerequisites and requirement lists live in three places that must agree: the course table in `assets/planner.html`, the `NODES`/`EDGES` lists in each map, and `source/ch-requirements.ptx`.
