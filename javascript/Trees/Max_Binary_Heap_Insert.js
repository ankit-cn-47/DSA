class MaxBinaryHeap {
    constructor(){
        this.values = [];
    }
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element <= parent) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax() {
        const max = this.values[0];
        const end = this.values.pop()
        if(this.values.length > 0) {
            this.values[0] = end
            this.trickleDown()
        }
        return max
    }

    trickleDown() {
        let idx = 0
        const element = this.values[0]        
        const len = this.values.length

        while(true) {
            let leftIdx = idx*2+1
            let rightIdx = idx*2+2
            let leftChild,rightChild
            let swap = null
            if(leftIdx<len) {
                leftChild = this.values[leftIdx]
                if(this.values[idx] < leftChild){
                    swap = leftIdx
                }
            }
            if(rightIdx<len) {
                rightChild = this.values[rightIdx];
                if(
                    (swap === null && this.values[idx] < rightChild) ||
                    (swap !=null && rightChild > leftChild)
                ) {
                    swap = rightIdx
                }
            }
            if(swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
            
        }
    }
}

let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

console.log(heap.extractMax())
console.log(heap.values);

console.log(heap.extractMax())
console.log(heap.values);

console.log(heap.extractMax())
console.log(heap.values);

console.log(heap.extractMax())
console.log(heap.values);

console.log(heap.extractMax())
console.log(heap.values);

console.log(heap.extractMax())
console.log(heap.values);

console.log(heap.extractMax())
console.log(heap.values);

console.log(heap.extractMax())
console.log(heap.values);

console.log(heap.extractMax())
console.log(heap.values);



