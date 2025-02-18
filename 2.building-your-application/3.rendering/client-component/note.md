- benefits:
+ interactivity(hooks)
+ access browser api(localStorage...)

* client components rendered?
- full page load(initial, browser refresh)
+ initial page load: render a static HTML preview on the server for both Client and Server Components 
+ On the server: 
    1. cre RSC Payload -> 2. render html on the server
+ On client: 
    1. non-interactive initial preview -> 2. update DOM -> 3. hydrate

- subsequent nav:
+ client component are rendered entirely on the client