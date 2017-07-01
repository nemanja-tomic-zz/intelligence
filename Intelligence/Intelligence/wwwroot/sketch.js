Tree tree;
function setup() {
    noCanvas();
    tree = new Tree();
    Node n = new Node(5);
    tree.addNode(n);
}

function Tree() {
    this.root = null;
} 

Tree.prototype.addNode = function (n) {
    if (this.root = null) {
        this.root = n;
    }
}

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}
