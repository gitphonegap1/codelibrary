### Directives

In angular directives are special markers on DOM element (such as element, class or attribute) which tells angular to do something with that element or children. Directives are core features of angular and helps in manipulating the DOM by adding behaviour to the existing elements, transforming the appearence or layout, or creating new elements dynamically. 

#### Types of Directives in Angular


1. **Component Directives**

    These are the most commonly used directives and are actually directives with a template. A component directive is a class decorated with `@Component` and contains a selector, template, and logic.
  
2. **Structiral Directives**

    Structural directives change the structure of the DOM by adding or removing elements. These directives modify the layout by altering DOM elements.

    **Common Examples:** 

    `*ngIf`: Conditionally includes a template based on the value of an expression.

    `*ngFor`: Repeats a template for each item in a list.

    `*ngSwitch`: Conditionally includes one of the templates based on the value of an expression.

3. **Attribute Directives**

    Attribute directives change the appearance or behavior of an element, component, or another directive. Unlike structural directives, they do not change the structure of the DOM.

    **Common Examples:**

    `ngClass`: Adds or removes CSS classes based on an expression.

    `ngStyle`: Adds or removes inline styles based on an expression.
