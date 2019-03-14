**Whenever you see sorted array and you have to find somthing, 
think of binary search.** 

**Whenever you see O(log n), think for binary search. It may be the solution**

Binary search - also known as  half-interval search, logarithmic search, or binary chop 
is an algorithm that finds the position of target in a **SORTED ARRAY**. Sorted being the keyword here

Binary search compares the target value to middle element. If the middle element is smaller than target value, 
then it searches to the left of middle value, else it searches to the right of sorted value.

And then performs the same thing again. Check the middle and adjust the sorting range.

Time Complexity: O(log(n)) - since we split search area by two for every next iteration. 
