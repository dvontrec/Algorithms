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
	// if no tail set new node to be the head and the tail
	s.Length++
	if s.Tail == nil {
		s.Tail = &n
		s.Head = &n
		return
	}
	s.Tail.Next = &n
	s.Tail = &n

}

func (s *Sll) pop() *Node {
	// if the length is 0 return null
	if s.Length == 0 {
		return nil
	}
	t := s.Head
	r := s.Tail
	i := 1
	for i < s.Length-1 {
		i++
		t = t.Next
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
	s.Tail = t
	return r
}

func (s *Sll) shift() *Node {
	// if the length is 0 return null
	if s.Length == 0 {
		return nil
	}
	h := s.Head
	s.Head = h.Next
	h.Next = nil
	s.Length--
	return h
}

func (s *Sll) unshift(val int) {
	n := Node{
		val,
		s.Head,
	}
	s.Length++
	s.Head = &n
	if s.Tail == nil {
		s.Tail = &n
	}

}

func (s *Sll) get(index int) *Node {
	if index < 0 {
		return nil
	}
	i := 0
	n := s.Head
	for i < s.Length {
		if i == index {
			return n
		}
		n = n.Next
		i++
	}
	return nil
}
func (s *Sll) set(index int, val int) {
	if index < 0 || index >= s.Length {
		return
	}
	n := s.get(index)
	n.Val = val

}

func (s *Sll) insert(index int, val int) {
	if index < 0 || index > s.Length {
		return
	}
	if index == s.Length {
		s.push(val)
		return
	}
	if index == 0 {
		s.unshift(val)
	}

	pre := s.get(index - 1)
	next := pre.Next
	n := Node{
		val,
		next,
	}
	pre.Next = &n
	s.Length++
}
func (s *Sll) remove(index int) *Node {
	if index < 0 || index >= s.Length {
		return nil
	}
	if index == s.Length-1 {
		return s.pop()
	}
	if index == 0 {
		return s.shift()
	}

	n := s.get(index)
	prev := s.get(index - 1)
	next := n.Next
	prev.Next = next
	n.Next = nil
	s.Length--
	return n
}

func (s Sll) print() string {
	v := ""
	n := s.Head
	for n != nil {
		v += fmt.Sprintf("%v", n.Val)
		n = n.Next
		if n != nil {
			v += " -> "
		}
	}
	return v
}
