# Cloud CI/CD Assignment – Dima Al-Buheisi

A static website automatically deployed to GitHub Pages using GitHub Actions CI/CD pipeline.

**Course:** Cloud Computing  
**Instructor:** Dr. Faten F Abushmmala  

## Live Site

https://dimaalbohisi.github.io/cloud-beginner-cicd-pages-DimaBuheisi/


## Project Files

| File | Description |
|------|-------------|
| `index.html` | Main webpage |
| `style.css` | Styling |
| `script.js` | Interactive JS feature |
| `.github/workflows/deploy.yml` | CI/CD workflow |

## How to Open Locally

1. Clone the repository:
   ```bash
git clone https://github.com/dimaalbohisi/cloud-beginner-cicd-pages-DimaBuheisi.git   ```
2. Open `index.html` directly in your browser — no server needed.

## How the Pipeline Works

Every push to the `main` branch triggers the GitHub Actions workflow which:
1. Checks that all required files exist (`index.html`, `style.css`, `script.js`)
2. Uploads the site files as a Pages artifact
3. Deploys them live to GitHub Pages automatically
