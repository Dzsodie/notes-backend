# Bitwise Operation
```
function absBitwise(x: number): number {
  return (x ^ (x >> 31)) - (x >> 31);
}
```
# Using Math.sqrt
```
function absSqrt(x: number): number {
  return Math.sqrt(x * x);
}
```
# Recursive Approach
```
function absRecursive(x: number): number {
  return x < 0 ? absRecursive(-x) : x;
}
```