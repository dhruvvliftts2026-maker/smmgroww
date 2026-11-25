# Purple Neon SMM

A mobile-first React + Vite starter storefront using the Purple Neon theme.

## Run on your laptop

1. Install Node.js LTS from https://nodejs.org/
2. Extract this ZIP.
3. Open the `purple-neon-smm` folder in VS Code.
4. Open Terminal in VS Code and run:

```bash
npm install
npm run dev
```

5. Open the local address printed in the terminal (usually http://localhost:5173).

## Build

```bash
npm run build
```

The production website is created in `dist/`.

## Upload to GitHub

1. Create a new empty repository on GitHub.
2. Upload the contents of this folder (not the ZIP itself), or use Git:

```bash
git init
git add .
git commit -m "Initial Purple Neon SMM project"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Deploy free

- Vercel: import the GitHub repository; build command `npm run build`; output folder `dist`.
- Netlify: import the GitHub repository; build command `npm run build`; publish directory `dist`.

## Important payment note

The checkout in this starter is a UI/demo flow only. The API files are secure server-side starting points, not a verified live ZapUPI integration. Before accepting real payments, confirm the current ZapUPI API documentation, request signing, callback format, webhook verification, and hosting runtime. Put secrets only in server environment variables. Never put API secrets in React files or commit them to GitHub.

## Notes

- Guest orders are saved in the current browser only.
- This starter does not include an external SMM provider fulfillment integration.
- Replace demo review/customer text with genuine customer feedback and obtain permission before publishing names.
