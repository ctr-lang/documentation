<div data-size="225" class="syntax"></div>
```yaml
# variable Object
$$:
  <propOne>: <valueOne>
  <objectKey>:
    <propTwo>: <valueTwo>

.test:
  width: $<propOne>$
  font-size: $<objectKey>.<propTwo>$
```

```css
.test {
  width: <valueOne>;
  font-size: <valueTwo>;
}
```
<div class="cf"></div>


