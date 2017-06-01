# The Solution

The solution comes in the form of a specialized namespace to facilitate both local and global variables. Like everything in `ctr`, the variable namespace is an Object whose properties and values are defined in key-value pair fashion to go hand in hand with the data structure of `ctr`. Defined key-value pair variable values can then be used in any `ctr` instance or class. 

The global variable namespace is a single namespace which is shared among all `ctr` instances and classes. It’s comparable to a centralized CSS preprocessor variable file. On the other hand, the local variable namespace is a private namespace that can only be used within its defined `ctr` instance or class.

<div class="feature-variable-img-cont">
  <img src="/feature-variable.png" alt="ctr variable scope">
</div>

The global and local variable namespace allows you to create next-level DRY styles while leveraging the benefits of variable encapsulation. However, the best part about `ctr` variables is the default level of safety they offer by not allowing you to overwrite previously defined variables.

<div class="cf"></div>
<div class="end"></div>
