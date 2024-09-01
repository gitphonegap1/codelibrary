### Dependency Injection
---

In Angular, DI is a design pattern that allows the application to define the dependencies of a component or service in a separate location and then inject them into the component or service at runtime. DI provides a way to make the components loosely coupled and easier to test.

Dependencies are declares as providers in a angular module, and the injector then creates instances of those dependencies when they are needed. When a component or service requests a dependency, the injector provides it into the component or service.

**Benifits of Dependency Injection**

1. **Loose Coupling:** DI makes components and services loosely coupled, allowing them to be tested and modified independently of each other.
2. **Reusability:** By seperate dependencies from the components and services, they can be re-used across the different parts of the application.
3. **Testability:** DI makes easier to test components and services by allowing us to mock or replace the dependencies with the test-specific logic or implementations.
4. **Maintainability:** DI helps to improve the maintainability of an application by reducing the complexity of managing dependencies and making it easier to refactor the code.
5. **Scalability:** DI makes easier to add new features to an application by allowing us to add new components and services without having to worry about managing dependencies manually.


