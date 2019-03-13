Bubble sort - Also called sinking sort algorithm
Checks every adjacent pair and swap them if they are not in sorted order.
Keeps on doing it until no sorting is needed and we have our sorted array

Best Case Performance - O(n);
Worst Case Performance - O(n^2)
Average Performance - O(n^2)
No Extra Space Needed

First Pass
6 5 3 1 8 7 2 4 ( 6 >5 - Swap)
5 6 3 1 8 7 2 4 ( 6 >3 - Swap)
5 3 6 1 8 7 2 4 ( 6 > 1 - Swap)
5 3 1 6 8 7 2 4 ( 6 < 8 - Stay as is but 8 > 7 so swap )
5 3 1 6 7 8 2 4 ( 8 >2 )
5 3 1 6 7 2 8 4 ( 8 >4 )
5 3 1 6 7 2 4 8 ( 8 >4 )

Second Pass
 5 3 1 6 7 2 4 8 ( 5 >3 )
 3 5 1 6 7 2 4 8 ( 5 >1 )
 3 1 5 6 7 2 4 8
 3 1 5 6 7 2 4 8
 3 1 5 6 7 2 4 8
 3 1 5 6 7 2 4 8 ( 7>2)
 3 1 5 6 2 7 4 8 ( 7>4)
 3 1 5 6 2 4 7 8 
 3 1 5 6 2 4 7 8

Similarly keep going until no sorting needed
 
