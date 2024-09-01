### Custom Pipes
---

Apart from built in pipes, we can create our own pipes bsed on the requirement.

Pipe is a class decorated with pipe metadata **@Pipe** decorator

```typescript
@Pipe({
    name: '[testpipe]'
})
```
Pipe class implements **PipeTransform** inteface's transform method that accepts an input value followed by the optional parameters and returns the transformed value.

```typescript
import { Pipes, PipeTransform } from '@angular/core';

@Pipe({
    name: `[testpipe]`
})

export class TestPipe implements PipeTransform {
    transform(value:any, args:any){

    }
}

```