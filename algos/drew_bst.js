class Node
{
    constructor(value)
    {
        this.value = value;
        this.left = null;
        this.right = null;
        //console.log("You have created a new Node!");
    }
    isLeaf()
    {
        if(this.left ===null && this.right===null)
        {
            return true
        }
        return false
    }
}

class BST
{
    constructor(root)
    {
        this.root = root;
        this.count=1;
        //console.log("You have created a Binary Search Tree!")
    }

    sayHello()
    {
        console.log("This method says 'hello!'");
    }

    add(node)
    {
        var runner = this.root
        while (runner)
        {
            if (node <= runner.value)
            {
                if (runner.left == null)
                {
                    runner.left = new Node(node);
                    this.count++;
                    return this;
                }
                else
                {
                    runner = runner.left;
                }
            }
            else
            {
                if (runner.right == null)
                {
                    runner.right = new Node(node);
                    this.count++;
                    return this;
                }
                else //not empty right
                {
                    runner = runner.right;
                }
            }
        }
    }

    min() 
    {
        var runner = this.root
        while (runner)
        {
            if (runner.left == null)
            {
                return runner.value;
            } 
            else{
                runner = runner.left;
            }
        }
    }

    max()
    {
        var runner = this.root
        while (runner)
        {
            if (runner.right == null)
            {
                return runner.value;
            } 
            else{
                runner = runner.right;
            }
        }
    }
    //size: return the number of nodes your tree contains
    size()
    {
        return this.count;
    }
    sizeR(runner=this.root)
    {
        var sum=1;
        if(runner.left !=null)
        {
            sum+=this.size(sum,runner.left)
        }

        if(runner.right !=null)
        {
            sum+=this.size(sum,runner.right)
        }  
        return sum;
    }
}

var firstNode = new Node(10);
var firstBST = new BST(firstNode)


firstBST.add(5).add(15).add(2).add(25).add(100);
console.log(firstBST.min());
console.log(firstBST.size());
```