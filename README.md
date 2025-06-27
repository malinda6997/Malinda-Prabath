# 💼 Malinda Prabath - Portfolio

Welcome to my personal portfolio repository!  
This project showcases my profile, skills, and featured projects using a clean and responsive web design built with **HTML**, **CSS**, and **JavaScript**.

---

## 🌐 Live Website

📎 **Hosted on AWS S3**:  
[http://github-action-portfolio-malinda-prabath.s3-website-us-east-1.amazonaws.com/](http://github-action-portfolio-malinda-prabath.s3-website-us-east-1.amazonaws.com/)

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript
- **Hosting**: AWS S3 (Static Website Hosting)
- **CI/CD**: GitHub Actions

---

## ⚙️ CI/CD Deployment with GitHub Actions

This project is automatically deployed to AWS S3 using a GitHub Actions workflow. Every time changes are pushed to the `main` branch, the website is re-uploaded and synced with the S3 bucket.

### ✅ Deployment Workflow Summary:

- Trigger: Push to `main`
- Tool: [`jakejarvis/s3-sync-action`](https://github.com/jakejarvis/s3-sync-action)
- Credentials: Stored securely using GitHub Secrets


## 📁 Project Structure

Malinda-Prabath/

├── index.html

├── style.css

├── script.js

└── .github/
    └── workflows/
        └── deploy.yml



### 🔧 `.github/workflows/deploy.yml`

```yaml
name: Deploy to AWS S3

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Sync files to S3
        uses: jakejarvis/s3-sync-action@master
        with:
          args: --delete
        env:
          AWS_S3_BUCKET: ${{ secrets.AWS_S3_BUCKET }}
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: 'us-east-1'


