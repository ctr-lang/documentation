# The Problem

It’s commonplace to have a centralized variable file in a Stylus, Sass, Less, or PostCss project. This file is typically comprised of mission-critical variables such as primary colors, font styles, and everything else in between. However, there is a big catch: all the variable declarations are global. This is fine for a small project, but as a project grows it becomes increasingly unruly due to the inherent limitations of a single namespace. From cryptic variable names to the ever-looming knowledge that someone can come along at any point and overwrite a variable unknowingly, global variables are simply dangerous. Unless you live on the edge and BASE jump while smoking cigarettes on the weekends, I would advise you shy away.

<div class="cf"></div>
<div class="end"></div>
