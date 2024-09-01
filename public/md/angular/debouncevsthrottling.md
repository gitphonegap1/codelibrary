### Debounce vs Throttling
---

#### Debounce

Ensures that a function is only called after a specified period of inactivity. If the event is triggered again before this time is up, the timer resets.

Ideal for scenarios where you want to delay a function until a user has stopped performing an action (e.g., waiting for a user to finish typing before making an API call).

**Example**

```typescript

const deb = document.getElementById("deb");

let timer;

const debounce = (callback) => {
  clearTimeout(timer);
	timer = setTimeout(()=> callback(), 1000);
}

deb.onkeypress = () => {
   debounce(()=>{
      console.log(`keypressed`)
   })
}
```
**Explanation**: The `debounce` function creates a delay (in this case, 300ms). The search function will only be executed if the user stops typing for 300ms.


#### Throttling

Ensures that a function is called at most once in a specified period, regardless of how often the event is triggered.

Useful when you want to limit the number of times a function is called, such as limiting the rate of API requests while scrolling or resizing a window.

**Example**

```typescript
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function(...args) {
    const context = this;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function() {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

const handleResize = throttle(() => {
  console.log('Resize event handler executed');
}, 100);

window.addEventListener('resize', handleResize);

```
**Explanation**: The `throttle` function limits the execution of the `handleResize` function to once every 100ms, even if the resize event is triggered continuously.