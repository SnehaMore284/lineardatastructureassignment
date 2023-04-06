Q1- Delete the elements in an linked list whose sum is equal to zero.

    function LinkedList() {
        this.root = null;
    }

    
    function Node(value) {
        this.value = value;
        this.next = null;
    }

    
    LinkedList.prototype.insert = function(value) {
        let node = new Node(value), current = null;
        if(!this.root) {
            this.root = node;
        } else {
            current = this.root;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }


    LinkedList.prototype.removeElementsOfZeroSum = function() {
        let sum = 0, start = this.root;
        
        if (!start) {
            return null;
        }
        
        while (start.next) {
            current = start;
            sum = 0;
            while(current.next) {
                sum += current.value;
                if (sum == 0) {
                    start.next = current.next;
                    return this.root;
                }
                current = current.next;
            }
            start = start.next;
        }
    }


    LinkedList.prototype.print = function(nodes) {
        let current = nodes || this.root, result = [];
        while(current) {
            result.push(current.value);
            current = current.next;
        }
        return result.join(" => ")
    }

    let list = new LinkedList();
    list.insert(2);
    list.insert(3);
    list.insert(-5);
    list.insert(-1);
    list.removeElementsOfZeroSum();
    list.print(list.root);

    
    
    Output : '2 => -1' 

Q2-Reverse a linked list in groups of given size.

class Node{
    constructor(a){
        this.data = a;
        this.next = null;
    }
}
  
function push(head, val){
    newNode = new Node(val);
    if(head==null){
        head = newNode;
        return head;
    }
      
    temp = head;
    while(temp.next!=null){
        temp = temp.next;
    }
    temp.next = newNode;
    return head;
}
  
function reverse(head, k){
    
    if(head==null || head.next==null){
        return head;
    }
      
    
    var dummy = new Node(-1);
    dummy.next = head;

    var prev = dummy;
    var curr = dummy;
    var next = dummy;
      
    
    let count = 0;
    while(curr!=null){
        count++;
        curr = curr.next;
    }
      

    while(next!=null){
        curr = prev.next; 
                          
        next = curr.next; 
                          
          
        
        let toLoop = count > k ? k : count - 1;
          
        for(let i=1;i<toLoop;i++){
            
            curr.next = next.next;
            next.next = prev.next;
            prev.next = next;
            next = curr.next;
        }
        prev = curr; 
        count -= k; 
    }
    return dummy.next; 
                       
}
  

function print(head){
    while(head.next!=null){
        console.log(head.data + " ");
        head = head.next;
    }
    console.log(head.data+"<br>");
}
  
  
var head = null;
let k = 3;
head = push(head, 1);
head = push(head, 2);
head = push(head, 3);
head = push(head, 4);
head = push(head, 5);
head = push(head, 6);
head = push(head, 7);
head = push(head, 8);
head = push(head, 9);
  
console.log("Given linked list<br>");
print(head);
console.log("Reversed linked list<br>");
var newHead = reverse(head, k);
print(newHead);
  

Output:
Given linked list 
1 2 3 4 5 6 7 8 9 
Reversed Linked list 
3 2 1 6 5 4 9 8 7 

Q3- Merge a linked list into another linked list at alternate positions.

  
class Node 
{ 
    constructor()
    {
        this.data = 0;
        this.next = null;
    }
}; 
  

function push(head_ref, new_data) 
{ 
    var new_node = new Node();
    new_node.data = new_data; 
    new_node.next = (head_ref); 
    (head_ref) = new_node;
    return head_ref;
  
} 
  

function printList(head) 
{ 
    var temp = head; 
    while (temp != null) 
    { 
        document.write( temp.data + " "); 
        temp = temp.next; 
    } 
    document.write("<br>");
} 
  
 
function merge(p, q) 
{ 
    var p_curr = p, q_curr = q; 
    var p_next, q_next; 
  
    
    while (p_curr != null &&  q_curr != null) 
    { 
        
        p_next = p_curr.next; 
        q_next = q_curr.next; 
  
        
        q_curr.next = p_next;  
        p_curr.next = q_curr; 
  
        
        p_curr = p_next; 
        q_curr = q_next; 
    } 
  
    q = q_curr;  
    return q;
} 
  

var p = null, q = null; 
p = push(p, 3); 
p = push(p, 2); 
p = push(p, 1); 
document.write( "First Linked List:<br>"); 
printList(p); 
q = push(q, 8); 
q = push(q, 7); 
q = push(q, 6); 
q = push(q, 5); 
q = push(q, 4); 
document.write( "Second Linked List:<br>"); 
printList(q); 
q = merge(p, q); 
document.write( "Modified First Linked List:<br>"); 
printList(p); 
document.write( "Modified Second Linked List:<br>"); 
printList(q); 
  

Output:
First Linked List:
1 2 3 
Second Linked List:
4 5 6 7 8 
Modified First Linked List:
1 4 2 5 3 6 
Modified Second Linked List:
7 8 

Q4-In an array, Count Pairs with given sum.

function getPairsCount(arr, n, sum)
{
    let count = 0; 
  
   
    for (let i = 0; i < n; i++)
        for (let j = i + 1; j < n; j++)
            if (arr[i] + arr[j] == sum)
                count++;
  
    return count;
}
  

    let arr = [ 1, 5, 7, -1, 5 ];
    let n = arr.length;
    let sum = 6;
    document.write("Count of pairs is "
        + getPairsCount(arr, n, sum));
      

  
Output:
Count of pairs is-3

Q5-Find duplicates in an array

<script>
      
      let array = [6, 9, 15, 6, 13, 9, 11, 15];
      let index = 0, newArr = [];
      const length = array.length; // to get length of array
      function findDuplicates(arr) {
         for (let i = 0; i < length - 1; i++) {
            for (let j = i + 1; j < length; j++) {
            if (arr[i] === arr[j]) {
                  newArr[index] = arr[i];
                  index++;
               }
            }
         }
         return newArr;
      }
      document.getElementById('result').innerHTML = 'Duplicate values are: <b>' + findDuplicates(array) + '</b>';
    </script>

    Q6-Find the Kth largest and Kth smallest number in an array.

    class MinHeap {
 
 
        parent(i) {
            return (i - 1) / 2;
        };
        left(i) {
            return ((2 * i) + 1);
        };
        right(i) {
            return ((2 * i) + 2);
        }
        getMin() {
            return this.harr[0];
        } 
        replaceMax(x) {
            this.harr[0] = x;
            minHeapify(0);
        }
        constructor(a, size) {
            this.heap_size = size;
            this.harr = a; 
            let i = (this.heap_size - 1) / 2;
            while (i >= 0) {
                this.minHeapify(i);
                i--;
            }
        }
     
        
        extractMin() {
            if (this.heap_size == 0)
                return Number.MAX_SAFE_INTEGER;
     
            
            let root = this.harr[0];
     
           
            if (this.heap_size > 1) {
                this.harr[0] = this.harr[this.heap_size - 1];
                this.minHeapify(0);
            }
            this.heap_size--;
            return root;
        }
     
        
        minHeapify(i) {
            let l = this.left(i);
            let r = this.right(i);
            let smallest = i;
            if (l < this.heap_size && this.harr[l] < this.harr[i])
                smallest = l;
            if (r < this.heap_size && this.harr[r] < this.harr[smallest])
                smallest = r;
            if (smallest != i) {
                let t = this.harr[i];
                this.harr[i] = this.harr[smallest];
                this.harr[smallest] = t;
                this.minHeapify(smallest);
            }
        }
    };
     
    
    function kthSmallest(arr, N, K) {
     
        
        let mh = new MinHeap(arr, N);
     
        
        for (let i = 0; i < K - 1; i++)
            mh.extractMin();
     
        
        return mh.getMin();
    }
     
    
    let arr = [12, 3, 5, 7, 19];
    let N = arr.length, K = 2;
    document.write("K'th smallest element is " + kthSmallest(arr, N, K));
     
    
    Output:
    Kth smallest element is-5

Q-7 Move all the negative elements to one side of the array

function move(arr){
    arr.sort();
}
 

let arr = [ -1, 2, -3, 4, 5, 6, -7, 8, 9 ];
move(arr);
for (let e of arr)
    document.write(e , " ");
   

 
Output:
-7 -3 -1 2 4 5 6 8 9 

Q8- Reverse a string using a stack data structure.

<script>
 
 class Stack
 {
     size;
     top;
     a = [];
   
     
     isEmpty()
     {
         return(this.top < 0);
     }
      
     constructor(n)
     {
         this.top = -1;
         this.size = n;
         this.a = new Array(this.size);
     }
   
     push(x)
     {
         if (this.top >= this.size)
         {
             document.write("Stack Overflow<br>");
             return false;
         }
         else
         {
             this.a[++this.top] = x;
             return true;
         }
     }
   
   
     pop()
     {
         if (this.top < 0)
         {
             document.write("Stack Underflow<br>");
             return 0;
         }
         else
         {
             let x = this.a[this.top--];
             return x;
         }
     }
 }
  
 
 function reverse(str)
 
      
     // Create a stack of capacity
     // equal to length of string
     let n = str.length;
     let obj = new Stack(n);
       
     // Push all characters of string
     // to stack
     let i;
     for(i = 0; i < n; i++)
         obj.push(str[i]);
   
     // Pop all characters of string
     // and put them back to str
     for(i = 0; i < n; i++)
     {
         let ch = obj.pop();
         str[i] = ch;
     }
 
  
 let s = "Sneha".split("");
  
 
 reverse(s);
  

 document.write("Reversed string is " +
                s.join(""));
  

  
 </script>

 Output:
 Reversed string is ahens 

 Q9- Evaluate a postfix expression using stack.
  

function evaluatePostfix(exp)
{
    
        let stack=[];
          
     
        for(let i=0;i<exp.length;i++)
        {
            let c=exp[i];
              
            
            if(! isNaN( parseInt(c) ))
            stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
              
         
            else
            {
                let val1 = stack.pop();
                let val2 = stack.pop();
                  
                switch(c)
                {
                    case '+':
                    stack.push(val2+val1);
                    break;
                      
                    case '-':
                    stack.push(val2- val1);
                    break;
                      
                    case '/':
                    stack.push(val2/val1);
                    break;
                      
                    case '*':
                    stack.push(val2*val1);
                    break;
              }
            }
        }
        return stack.pop();  
}
 

let exp="231*+9-";
document.write("postfix evaluation: "+evaluatePostfix(exp));
 

Output
postfix evaluation: -4


Q10-Implement a queue using the stack data structure.

class Queue {
    constructor() {
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }
    enqueue(item) {
        this.items[this.backIndex] = item
        this.backIndex++
        return item + ' inserted'
    }
    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }
    peek() {
        return this.items[this.frontIndex]
    }
    get printQueue() {
        return this.items;
    }
}
const queue = new Queue()
console.log(queue.enqueue(7))
console.log(queue.enqueue(2))
console.log(queue.enqueue(6))
console.log(queue.enqueue(4))
console.log(queue.dequeue())
console.log(queue.peek())
var str = queue.printQueue;
console.log(str)