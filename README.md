### Hosted at

https://nicolas-py.github.io/portfolio-m/

### Data API

Portfolio data is fetched from the centralized API:

```
https://nicolas-py.github.io/portfolio-provider/api/portfolio.json
```

### Run locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`

### Commit tags

- structure
- style
- js
- content
- yml

### Hex generation

Hex codes are generated client-side from the last 4 chars of URLs:

```javascript
const toHex = (url) => url.replace(/\/$/, '').slice(-4).split('').map(c => 
  c.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0')
).join('').padEnd(8, '0');

// ".../portfolio-m/" → "6F2D6D00" (from "o-m")
```
