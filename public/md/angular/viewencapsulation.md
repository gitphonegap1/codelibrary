### View Encapsulation
---

In angular components styles are encapsulated into the component views and wont effect the rest of the application.

```typescript
@Component({
    // encapsulation: ViewEncapsulation.Emulated | None | ShadowDom
})
```
- `Emulated`: By default behaviour. 

- `None`: Styles were applied to other components also.

- `ShadowDom`: it will create separate shadow dom, so that the styles were applied to that component only. The external styles like bootstrap, other css libraties were also not applied to the component for which the **ShadowDom** is activated.
