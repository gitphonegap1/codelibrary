# RxJS Subject – Explained with Real-world Use Cases

## 🔁 What is a Subject?

In **RxJS**, a `Subject` is both an **Observable** and an **Observer**. It can:
- emit values (`next()`)
- be subscribed to (`subscribe()`)

This means it can **multicast** values to many observers at once.

---

## ✅ Core Features

| Feature               | Description                        |
|------------------------|------------------------------------|
| Acts as               | Observable + Observer              |
| Multicast             | Yes                                |
| Usage                 | `.next()`, `.subscribe()`          |

---

## 🧪 Basic Example

```ts
import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe(val => console.log('A:', val));
subject.subscribe(val => console.log('B:', val));

subject.next(1);
subject.next(2);
```

**Output:**
```
A: 1
B: 1
A: 2
B: 2
```

---

## 📚 Types of Subjects

| Type              | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| `Subject`         | Basic subject. No initial value.                                            |
| `BehaviorSubject` | Holds the latest value. New subscribers get the last emitted value.         |
| `ReplaySubject`   | Remembers multiple past values.                                             |
| `AsyncSubject`    | Emits only the last value on completion.                                    |

---

## Simple Examples of RxJS Subjects
---

## 🔹 Subject

A basic Subject does not hold any initial value and only multicasts to current subscribers.

```ts
import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe(val => console.log('A:', val));

subject.next(1); // A: 1
subject.next(2); // A: 2

subject.subscribe(val => console.log('B:', val));

subject.next(3); // A: 3, B: 3
```

> **Note:** Subscriber B does not receive 1 or 2 because it subscribed later.

---

## 🔹 BehaviorSubject

Remembers the last emitted value and sends it to new subscribers.

```ts
import { BehaviorSubject } from 'rxjs';

const behaviorSubject = new BehaviorSubject<number>(0); // initial value

behaviorSubject.subscribe(val => console.log('A:', val)); // A: 0

behaviorSubject.next(1); // A: 1

behaviorSubject.subscribe(val => console.log('B:', val)); // B: 1

behaviorSubject.next(2); // A: 2, B: 2
```

> **Note:** New subscribers receive the most recent value (1) immediately.

---

## 🔹 ReplaySubject

Can replay multiple previous values to new subscribers based on buffer size.

```ts
import { ReplaySubject } from 'rxjs';

const replaySubject = new ReplaySubject<number>(2); // remembers last 2 values

replaySubject.next(1);
replaySubject.next(2);
replaySubject.next(3);

replaySubject.subscribe(val => console.log('Subscriber:', val));
// Subscriber: 2
// Subscriber: 3
```

> **Note:** Replays the last 2 values (2, 3) to the new subscriber.

---

## 🔹 AsyncSubject

Only emits the **last value** when `.complete()` is called.

```ts
import { AsyncSubject } from 'rxjs';

const asyncSubject = new AsyncSubject<number>();

asyncSubject.subscribe(val => console.log('Subscriber:', val));

asyncSubject.next(1);
asyncSubject.next(2);
asyncSubject.next(3);

asyncSubject.complete(); // Triggers emission
// Subscriber: 3
```

> **Note:** No value is emitted until `.complete()` is called. Only the last value is sent.

---
## 🌍 Real-world Use Cases

### 1. **Sharing WebSocket Messages**
When you want multiple components to receive updates from a WebSocket.

```ts
const wsSubject = new Subject<string>();

const socket = new WebSocket('ws://example.com');

socket.onmessage = (event) => {
  wsSubject.next(event.data);
};

// Component A
wsSubject.subscribe(msg => console.log('A received:', msg));

// Component B
wsSubject.subscribe(msg => console.log('B received:', msg));
```

---

### 2. **Bridging DOM Events to Observables**

```ts
const clickSubject = new Subject<MouseEvent>();

document.addEventListener('click', e => clickSubject.next(e));

clickSubject.subscribe(e => console.log('Clicked at:', e.clientX, e.clientY));
```

---

### 3. **Cross-component Communication in Angular**

You can use `Subject` in a shared service to pass data across components.

```ts
@Injectable({ providedIn: 'root' })
export class MessageService {
  private messageSubject = new Subject<string>();
  message$ = this.messageSubject.asObservable();

  sendMessage(msg: string) {
    this.messageSubject.next(msg);
  }
}
```

**Sender Component:**
```ts
this.messageService.sendMessage('Hello from Sender!');
```

**Receiver Component:**
```ts
this.messageService.message$.subscribe(msg => {
  console.log('Received:', msg);
});
```

---

### 4. **Loading Spinner Toggle**

```ts
@Injectable({ providedIn: 'root' })
export class LoaderService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  show() { this.loadingSubject.next(true); }
  hide() { this.loadingSubject.next(false); }
}
```

You can then subscribe to `loading$` in a component and show/hide a loader.

---

## 🏁 Summary

- `Subject` is a core RxJS tool for manual and shared data streams.
- Use it when:
  - You want to share a single stream with multiple observers
  - Bridge external code (like events, websockets) to RxJS
  - Handle custom logic across components

