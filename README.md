Just a Simple Dependency injection helper class for inject services. 
Its use is very easy, i use in react projects to access services for call REST.

Use case:
In main file of the project just create your services an set into DI object
```javascript
import {DI} from "simpledi-jr";

let service = new Service();
DI.add(service);
// or // 
let service2 = new Service();
DI.add(service,"service2");

```

Later to acess de services just use.

```javascript
let service = DI.get(Service);

// or //

let service2 = DI.get("service2");
```