const LinkedList = require('./LinkedList')

describe('#insertAtHead', () => {
    test('it adds the element zu the beginning of the list', () => {
        const li = new LinkedList()
        li.insertAtHead(10)
        const oldHead = li.head
        li.insertAtHead(20)

        expect(li.head.value).toBe(20)
        expect(li.head.next).toBe(oldHead)
        expect(li.length).toBe(2)
    })
})

describe('#getByIndex', () => {
    describe('with index lass than 0', () => {
        test('it returns null', () => {
            const li = LinkedList.fromValues(10, 20)

            expect(li.getByIndex(-1)).toBeNull()
        })
    })
    describe('with index 0', () => {
        test('it returns the head', () => {
            const li = LinkedList.fromValues(10, 20)

            expect(li.getByIndex(0).value).toBe(10)
        })
    })
    describe('with index greater than 0', () => {
        test('it returns null', () => {
            const li = LinkedList.fromValues(10, 20, 30, 40, 50)

            expect(li.getByIndex(2).value).toBe(30)
        })
    })
    describe('with index greater than list length', () => {
        test('it returns null', () => {
            const li = LinkedList.fromValues(10, 20)

            expect(li.getByIndex(5)).toBeNull()
        })
    })
})

describe('#insertAtIndex', () => {
    describe('with index lass than 0', () => {
        test('it does not insert anything', () => {
            const li = LinkedList.fromValues(10, 20)
            li.insertAtIndex(-1, 30)

            expect(li.length).toBe(2)
        })
    })
    describe('with index 0', () => {
        test('it inserts at the head', () => {
            const li = LinkedList.fromValues(10, 20)
            li.insertAtIndex(0, 30)

            expect(li.head.value).toBe(30)
            expect(li.head.next.value).toBe(10)
            expect(li.length).toBe(3)
        })
    })
    describe('with index in the middle', () => {
        test('it inserts in the middle', () => {
            const li = LinkedList.fromValues(10, 20, 30, 40, 50)
            li.insertAtIndex(3, 30)

            expect(li.getByIndex(3).value).toBe(30)
            expect(li.getByIndex(3).next.value).toBe(40)
            expect(li.length).toBe(6)
        })
    })
    describe('with index greater than list length', () => {
        test('it doesnt insert anything', () => {
            const li = LinkedList.fromValues(10, 20)
            li.insertAtIndex(5, 30)

            expect(li.length).toBe(2)
        })
    })
})

describe('#removeHead', () => {
    test('removes the head', () => {
        const li = LinkedList.fromValues(10, 20, 30, 40, 50)
        li.removeHead()

        expect(li.head.value).toBe(20)
        expect(li.length).toBe(4)
    })
})

describe('#removeAtIndex', () => {
    describe('with index lass than 0', () => {
        test('it does not delete anything', () => {
            const li = LinkedList.fromValues(10, 20)
            li.removeAtIndex(-1)

            expect(li.length).toBe(2)
        })
    })
    describe('with index 0', () => {
        test('it delete at the head', () => {
            const li = LinkedList.fromValues(10, 20, 30)
            li.removeAtIndex(0)

            expect(li.head.value).toBe(20)
            expect(li.head.next.value).toBe(30)
            expect(li.length).toBe(2)
        })
    })
    describe('with index in the middle', () => {
        test('it delete in the middle', () => {
            const li = LinkedList.fromValues(10, 20, 30, 40, 50)
            li.removeAtIndex(3)

            expect(li.getByIndex(2).value).toBe(30)
            expect(li.getByIndex(2).next.value).toBe(50)
            expect(li.length).toBe(4)
        })
    })
    describe('with index at the end', () => {
        test('it does delete the last element', () => {
            const li = LinkedList.fromValues(10, 20, 30, 40, 50)
            li.removeAtIndex(4)

            expect(li.getByIndex(3).value).toBe(40)
            expect(li.getByIndex(3).next).toBeNull()
            expect(li.length).toBe(4)
        })
    })
    describe('with index greater than list length', () => {
        test('it doesnt delete anything', () => {
            const li = LinkedList.fromValues(10, 20)
            li.removeAtIndex(5)

            expect(li.length).toBe(2)
        })
    })
})
