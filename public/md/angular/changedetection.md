### Change Detection
---

Generally angular identifies the data changes in the component and update the specific view of the component with the latest updated values. This process is also known as **Change Detection Process**.

Angular runs this process when ever changes happened in the component like.
- Event Changes.
- Http Requests.
- Timers like (timeout).

For every changes triggerred in the root component and then ot goes to the child components.

There are two types of change detection stratagies.
- ChangeDetectionStrategy.Default
- ChangeDetectionStrategy.OnPush

#### ChangeDetectorRef

Every thime there is a change in the app, Angular will perform `ChangeDetectorRef` on all the components.

#### Methods
1. **markForChack()**: When a view uses **onPush()**, explictly marks the view as changed so that it can be checked. 
2. **detach()**: Detaches the view from the change-detection tree. A detached view is not checked until the component is re-attached, Use with **detachChanges()** to implement the local change detection checks.
3. **detectChanges()**: Check the view and its children for changes.
4. **reattach()**: Re-attaches the previously detached view to the change detection tree.


