class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
        //console.log("You have created a new Node!");
    }
}

class BST {
    constructor(root) {
        this.root = root;
        //console.log("You have created a Binary Search Tree!")
    }
    sayHello() {
        console.log("This method says 'hello!'");
    }
    //add: adds nodes to the tree based on their value (NOTE: if child == parent, child is placed on left)
    add(node) {
        //step 1 check if node is greater than or less than the root value
        var runner = this.root
        while (runner) {
            if (node <= runner.value) {
                if (runner.left == null) //if left is empty
                {
                    runner.left = new Node(node);
                    return this;
                }
                else //not empty left
                {
                    runner = runner.left;
                }
            }
            else {
                if (runner.right == null) //if right is empty
                {
                    runner.right = new Node(node);
                    return this;
                }
                else //not empty right
                {
                    runner = runner.right;
                }
            }
        }
        //step 2 check if either left or right is empty (if it is we're done)
        //step 3 go down a level
    }
    //min: search your tree; return the minimum value contained in a node
    min() {
        //step 1 check if node is greater than or less than the root value
        var runner = this.root
        while (runner) {
            if (runner.left == null) {
                return runner.value;
            } 
            else{
                runner = runner.left;
            }
        }
    }
    //size: return the number of nodes your tree contains
    size(){
        var runner = this.root;
        var sum = 0;
        while (runner){
            sum ++;
            if(runner.left == null && runner.right == null){
                return;
            }

            if(runner.left != null){
                sum ++;
                
            }

            if(runner.right != null){
                sum ++;
            }

        }
    }
}

var firstNode = new Node(10);
var firstBST = new BST(firstNode)
firstBST.add(5).add(10).add(20).add(100).add(3).add(2).add(4);
console.log(firstBST.min());