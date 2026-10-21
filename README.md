# Mathematics Major Advising

A PreTeXt site for advising mathematics majors at Santa Clara University:

- **Four-year planner** (`assets/planner.html`): enter a student's completed courses and emphasis; get a quarter-by-quarter plan with prerequisite, co-requisite and alternate-year warnings.
- **Course maps** (`assets/*-map*.html`): the whole major on one page with every prerequisite drawn as an arrow, plus variants for proposed changes and a quantum course.
- **Degree requirements** (`source/ch-requirements.ptx`): the rules from the 2026–27 Undergraduate Bulletin, which is the source for everything here.

## Build

```
pip install -r requirements.txt
pretext build web
pretext view web
```

Pushing to `main` builds the site and publishes it to the `gh-pages` branch (`.github/workflows/pretext-deploy.yml`). In the repository settings, point GitHub Pages at `gh-pages`.

## Layout

```
project.ptx                 target: web
publication/publication.ptx external directory = assets/
source/main.ptx             book shell
source/ch-planner.ptx       planner chapter
source/ch-maps.ptx          course maps
source/ch-requirements.ptx  bulletin requirements
assets/                     the planner and maps; copied to external/ in the built site
```

Each page in `assets/` is a self-contained HTML file. The planner and maps are embedded with `<interactive iframe="...">` and can also be opened directly at `external/<file>.html` on the built site.

## Course offerings

The Bulletin says which courses run in alternate years but not which quarters or which years. The planner's offerings table (bottom of the page) holds placeholders. Once the department's rotation is known, edit the `off` (Fall/Winter/Spring) and `alt` (even/odd year) fields in the course table near the top of `assets/planner.html` so every visitor sees the real schedule.

## Updating for a new bulletin

Prerequisites and requirement lists live in three places that must agree: the course table in `assets/planner.html`, the `NODES`/`EDGES` lists in each map, and `source/ch-requirements.ptx`.
