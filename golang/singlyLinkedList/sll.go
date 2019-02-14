package main

import "fmt"

// Node Create a node that contains a value and a next node
type Node struct {
	Val int
	// the next is a pointer to a node
	Next *Node
}

// Sll Sruct for singly linked list
type Sll struct {
	Head   *Node
	Tail   *Node
	Length int
}

func newSll() Sll {
	s := Sll{
		nil,
		nil,
		0,
	}
	return s
}

func (s *Sll) push(val int) {
	// Creates a new node
	n := Node{
		val,
		nil,
	}
	// if there is a head grab it
	h := s.Head
	// if there is no head
	if h != nil {
		//set the old head to be the tail of the new node
		n.Next = h
	}
	// if no tail set new node to be tail
	if s.Tail == nil {
		s.Tail = &n
	}
	s.Head = &n
	s.Length++

}

func (s *Sll) pop() Node {
	// if the length is 0 return null
	if s.Length == 0 {
		return *s.Head
	}
	t := *s.Head
	r := *s.Tail
	i := 1
	for i < s.Length-1 {
		i++
		t = *t.Next
	}

	s.Length--
	if s.Length < 1 {
		s = &Sll{
			t.Next,
			t.Next,
			0,
		}
		return r
	}
	t.Next = r.Next
	s.Tail = &t
	return r
}

func (s *Sll) shift() Node {
	return *s.Head
}

func (s *Sll) unshift(val int) {

}

func (s Sll) print() string {
	v := ""
	n := s.Head
	for n.Next != nil {
		fmt.Println(n.Val)
		v += fmt.Sprintf("%v", n.Val)
		n = n.Next
		if n.Next != nil {
			v += " -> "
		}
	}
	return v
}
