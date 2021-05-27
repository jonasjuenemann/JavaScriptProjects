class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    insertAtHead(data) {
        const newNode = new Node(data, this.head) //neue Node hat keinen head -> Null
        //unsere Node hat jetzt aber einen head -> diese neue Node
        this.head = newNode
        this.length++
    }

    getByIndex(index) {
        if (index < 0 || index >= this.length) return null

        let current = this.head
        for (let i=0; i<index; i++) {
            current = current.next
        }
        return current
    }

    reverse() {
        let prev = null
        let current = this.head
        let next
        while (current !== null) {
            next = current.next
            //20, 30, 40...
            current.next = prev
            //null, 10, 20...
            prev = current
            //10, 20, 30...
            current = next
            //20, 30, 40´...
        }
        this.head=prev
    }

    print() {
        let output = ''
        let current = this.head
        while (current) {
            output = `${output}${current.value} -> `
            current = current.next
        }
        console.log(`${output}null`)
    }

    insertAtIndex(index, value) {
        if (index === 0) return this.insertAtHead(value)
        const prev = this.getByIndex(index - 1)
        if (prev == null) return null
        prev.next = new Node(value, prev.next)
        this.length++
    }

    removeHead() {
        this.head = this.head.next
        this.length--
    }

    removeAtIndex(index) {
        if (index < 0 || index >= this.length) return null
        if (index === 0) return this.removeHead()
        const prev = this.getByIndex(index - 1)
        prev.next = prev.next.next
        this.length--
    }

}

class Node {
    constructor(value, next) {
        this.value =  value
        this.next = next // next node
    }
}

LinkedList.fromValues = function(...values) {
    const li = new LinkedList()
    for (let i = values.length-1; i >= 0; i--) {
        li.insertAtHead(values[i])
    }
    return li
}

module.exports = LinkedList