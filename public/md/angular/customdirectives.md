### Custom Directive
---

Directives add behaviour to an existing DOM element or an existing component instance.

```typescript
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({ selector: '[myHighlight]' })
export class HighlightDirective {
    constructor(el: ElementRef) {
       el.nativeElement.style.backgroundColor = 'yellow';
    }
}
```

Now this directive extends HTML element behavior with a yellow background as below

```html
<p myHighlight>Highlight me!</p>
```