# Redirection Script

Minimal Next.js app for Vercel that redirects visitors from `deeldepot.com` or
`www.deeldepot.com` to `casoodo.com` while preserving the full path and query
string.

Examples:

- `https://deeldepot.com/product-123` -> `https://casoodo.com/product-123`
- `https://deeldepot.com/shop/item?ref=ad` -> `https://casoodo.com/shop/item?ref=ad`

## Deploy on Vercel

1. Import this repository into Vercel.
2. Keep the framework preset as `Next.js`.
3. Add `deeldepot.com` and `www.deeldepot.com` to the Vercel project domains.
4. Point the domain DNS records to Vercel.

Vercel will run `npm run build` automatically.
