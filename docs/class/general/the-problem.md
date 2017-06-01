# The Problem

It's age old wisdom that a multi-class CSS pattern in HTML is a superior approach to maintainable scalability compared to that of a single-class approach. The principal reason can be demonstrated through a good old fashion button dilemma. It's a common dilemma that we all face: there are three different types of buttons we need to create for our money-making website all of which share common properties but none of which are the same.

For the sake of simplicity, we have a `.hook`, `.line`, and `.sinker` button, and they all share the following CSS dimension properties.

<div class="fw"></div>
```css
.button {
  width: 125px;
  height: 75px;
}
```

Now comes the dilemma; each button will have a different background. One solution is to create a separate class for each button like so.

<div class="fw"></div>
```css
.hook-button {
  width: 125px;
  height: 75px;
  background: green;
}
```

However, since we are astute developers practiced in the dark arts of CSS wizardry we recognize this solution is repetitive, and it violates the DRY (don’t repeat yourself) CSS principal. As such, we decide to leverage class inheritance to inherit the `.button` class and then create a separate `background` class for each style.

<div class="fw"></div>
```html
<body>
  <!-- hook content -->
  <div class="button hook"></div>
  <!-- line content -->
  <div class="button line"></div>
  <!-- sinker content -->
  <div class="button sinker"></div>
</body>
```

Things are looking great, but then we realize the design is a bit too edgy for our tastes do we decide to add a `border-radius` property to `.line` and `.sinker`. Here's where things get tricky because one solution is to add `border-radius` directly to `.line` and `.sinker`. Another valid and multi-class solution is to create a separate `border-radius` class and apply it to `.line` and `.sinker`. Nonetheless, once the `border-radius` dilemma is figured out, we then decide the `color` of the text is not fitting, and then, and then, and then. This is the crux of the button dilemma, it's the inevitability of the next “and then(s)” compounded with the desire to not repeat yourself.



<div class="cf"></div>
<div class="end"></div>
