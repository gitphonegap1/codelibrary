
# 🧠 NgRx – Simple Introduction

NgRx is a **state management library** for Angular, inspired by Redux (from the React world). It helps manage **application state** in a predictable and consistent way.

---

## ⚙️ Installation Steps

1. Install the core NgRx packages:
```bash
npm install @ngrx/store
```

2. Add `StoreModule` in `AppModule`:
```ts
import { StoreModule } from '@ngrx/store';

@NgModule({
  imports: [
    StoreModule.forRoot({})
  ]
})
export class AppModule {}
```

3. Add `provideStore` in `AppConfig File`:
```ts
import { provideStore } from '@ngrx/store';

export const appConfig: ApplicationConfig = {
  providers: [
    provideStore({})
  ]
};
```

## 🚦 Why Use NgRx?

- Manages **shared/global state** (like user data, UI loading flags, etc.)
- Makes your app **predictable** and **debuggable**
- Encourages **separation of concerns** and clean architecture
- Works great for **large-scale applications**

---

## 🔄 Core Concepts (Flow)

### 1. **Store**
The central place that holds all app state (like a big JavaScript object).

### 2. **Actions**
Plain objects that **describe** what happened.
```ts
export const loadUsers = createAction('[User] Load Users');
```

### 3. **Reducers**
Functions that **take current state + action** → and return a **new state**.
```ts
export const userReducer = createReducer(
  initialState,
  on(loadUsers, state => ({ ...state, loading: true }))
);
```

### 4. **Selectors**
Functions to **read specific pieces** of the state from the store.
```ts
export const selectUsers = createSelector(
  selectUserState,
  state => state.users
);
```

### 5. **Effects** (Optional but powerful)
Handles **side effects** like API calls, logging, etc., based on actions.
```ts
loadUsers$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadUsers),
    mergeMap(() => this.userService.getAll()
      .pipe(map(users => loadUsersSuccess({ users })))
    )
  )
);
```

---

## 🧩 Simple Analogy

Think of your app as a bakery:
- **Action**: Customer places an order (event).
- **Reducer**: Chef reads the order and bakes the item (updates state).
- **Store**: The shelf that holds all baked goods (state).
- **Selector**: Customer checks what’s on the shelf (reads state).
- **Effect**: Assistant makes a phone call to supplier for ingredients (side-effect/API).

---
