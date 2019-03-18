
Linear Linked List

`[ Data   | Next Pointer ]->[ Data   | Next Pointer ]->[ Data   | Next Pointer ]->[ Data   | Next Pointer ]->`

Linked list is linear collection of data elements where order of elements is not dependent on their physical address in memory.
Instead each element points to the next element. It is a data structure consisting of collection of nodes, which together forms a sequence

Since, the orders don't have to reside together in the same memory, it serves many benefits. 
It allows for efficient insertion & removal of nodes at arbitrary positions. 
Since the nodes are pointing to each other, we dont have to move the entire result set in case of insertion/deletion
which makes it very efficient. **Insertion/Deletion in Linked list can be done in constant time O(1) - ( Awesome)**

Same operation for Insertion/Deletion with Arrays is very expensive, because other part of array has to be shifted, 
which is in itself an expensive operation

However, their are some disadvantages too, that come with Linked lists
    a) Since all the elements are not contiguous(together), there is extra storage required for pointers which point to next node
    b) Nodes in linked list **must be read in order from beginning** as linked list are sequential access
    c) Since the nodes are stored incontigiously( a benefit for insertion/deletion), 
    it increases the time period required to access individual elements within the list
    d) Its difficult to backtrace elements in linked list. This can be done relatively easier 
    with doubly linked list but that comes with extra storage space for backward pointer
    
Basic Terminology Used in Linked List

Head - Starting Element. First Node
Tail - Last Element

Next element of tail will be null, which indicates no more item in linked list

`[ Data/Information/Payload/Cargo | Next pointer/ Next Link]`      


Indexing	                Θ(n)
Insert/delete at beginning	Θ(1)
Insert/delete at end	    Θ(1) when last element is known;
                            Θ(n) when last element is unknown
Insert/delete in middle     search time + Θ(1)
Wasted space (average)	    Θ(n)                            
