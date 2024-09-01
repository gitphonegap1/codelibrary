### Component Life Cycle
---


In Angular, every component goes through a series of phases known as a component lifecycle. The component lifecycle consists of eight stages, each of which represents a specific state in the life of the component. The lifecycle methods provided by Angular allow developers to execute specific tasks at different stages of the component's life cycle.

The following are the phases of the component lifecycle:

1. **ngOnChanges():** This method is called whenever a component's input properties change.
2. **ngOnInit():** This method is called when the component is initialized. It is called once, immediately after the first ngOnChanges().
3. **ngDoCheck():** This method is called during every change detection cycle.
4. **ngAfterContentInit():** This method is called after angular projects external content into the component's view, such as content projected from the parent component. It is called once, after the first ngDoCheck().
5. **ngAfterContentChecked():** This method is called after every change detection cycle involving the component's projected content. It is called once, after the first ngAfterContentInit().
6. **ngAfterViewInit():** This method is called after angular initializes the component's view and child's view.
7. **ngAfterViewChecked():** This method is called after every change detection cycle involving the component's views and child's views.
8. **ngDestroy():** This method is called just before angular destroys the component.