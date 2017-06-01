# Info
<div class="te-verified"></div>

Every kool project has a dot-rc (runtime configuration) file, so it goes without saying `ctr` also has one. Aside from the "coolness" factor the `.ctrrc.yml` the file can be an extremely powerful aid to help localize global settings and variables. Implementation is as simple as can be; create a `.ctrrc.yml` file in the root directory of the project and everything else is taken care of. While the primary purpose for the dot-rc file is to set global `ctr` options such as the hover duration and or the default ease function, global variables can also be defined in the `.ctrrc.yml` which is handy for YAML centric implementations.

__Notes__

+ `option` work in Stylus, JS, and YAML
+ [`ctrSetVariable`](../helpers/set.md#ctrsetvariable){: .pjax} and [`ctrSetOption`](../helpers/set.md#ctrsetoption){: .pjax} supersede
+ `ctr` keeps track of the modify time and will update itself if `.ctrrc.yml` is updated

<div class="cf"></div>
<div class="end"></div>

