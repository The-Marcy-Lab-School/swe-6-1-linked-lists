class Node {
    constructor(data = null, next = null) {
        this.data = data 
        this.next = next 
    }
}

class LinkedList {
    #len = 0

    constructor() {
        this.head = null 
    }

    appendToTail(data) { // add new node to end of list
        const node = new Node(data)
        this.#len++

        if (!this.head) { // if empty list
            this.head = node // new node becomes head
            return 
        }
       
        let cur = this.head 
        while (cur.next) { // traverse to tail
            cur = cur.next 
        }

        cur.next = node // link new node to tail
    }

    prependToHead(data) { // add new node to head 
        // create new node
        // set new node's next to the head
        // change head to be the new node
        this.head = new Node(data, this.head)
        this.#len++
    }

    removeHead() {
        if (!this.head) return null 

        const data = this.head.data // save head data
        this.head = this.head.next // remove head node
        this.#len--
        return data 
    }

    contains(data) {
        let cur = this.head 

        while (cur) {
            if (cur.data === data) return true 
            cur = cur.next 
        }

        return false 
    }

    length() {
        return this.#len
    }

    print() {
        let cur = this.head, list = ""
	    while (cur) {
	      list += `${cur.data} -> `;
	      cur = cur.next;
	    }
	    console.log(list += "NULL")
    }
}

const linkedList = new LinkedList() 
linkedList.appendToTail(2) 
linkedList.appendToTail(3) 
linkedList.prependToHead(1)
linkedList.prependToHead(0)
linkedList.removeHead()
linkedList.removeHead()
linkedList.print()

