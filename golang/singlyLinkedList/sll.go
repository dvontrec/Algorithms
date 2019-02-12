package main

// Node Create a node that contains a value and a next node
type Node struct {
	Val int
	// the next is a pointer to a node
	Next *Node
}

// Sll Sruct for singly linked list
type Sll struct {
	Head *Node
	Tail *Node
}

func newSll() Sll {
	s := Sll{
		nil,
		nil,
	}
	return s
}

func (s Sll) push(val int) {

}

func (s Sll) pop() {

}
