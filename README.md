# `unocss-issue-server-only`

1. `npm install`.
2. `npm run dev`.
3. Note that the `bg-red` class is showing correctly.
4. Change `bg-red` in `index.page.server.vue` to `bg-green` and save.
5. Not that the change is detected by HMR but no new class is generated.
6. Try refreshing the page.
7. Still no new class is generated.
8. Try restarting the server.
9. The `bg-green` class is now showing.
