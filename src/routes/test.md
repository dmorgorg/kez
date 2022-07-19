---
    title: test
---

<script>
    import 'prism-themes/themes/prism-vsc-dark-plus.min.css'

   import '$lib/styles/app.scss';
</script>


# This is just a {title} file

- containing
- an
- unordered list

and 

1. an
1. ordered
1. list

and 

<!-- this is a fenced code block inside a fenced block which doesn't 
display well in this HOWTO. One cannot nest fenced code blocks,
apparently. Or maybe I just don't know how. 
Looks fine in the rendered page, localhost:3000/test, though REMEMBER
 TO INSERT THE CLOSING 3 BACKTICKS below the bottom line! -->
```js
import { something } from 'javascript';
let fencedCodeBlock = 42;
```