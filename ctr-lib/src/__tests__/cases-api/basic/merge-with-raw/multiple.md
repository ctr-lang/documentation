__Description__: should be able to deep merge multiple raw Objects through Array syntax

```
mergeWith: Object || [Object, Object]
```


__Notes__

+ `mergeWith` sytax is the same as `merge` 
    - The key diffrance is that `mergeWith` merges in the var including the key while `merge` only merges the value
+ If Array, mergeing starts from 0 so lowest index always supersedes on confilcts