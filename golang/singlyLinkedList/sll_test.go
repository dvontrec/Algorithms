package main

import (
	"testing"
)

func createTestSll() Sll {
	s := newSll()
	s.push(31)
	s.push(11)
	s.push(15)
	return s
}

func TestNewSll(t *testing.T) {
	s := newSll()

	if s.Head != nil {
		t.Errorf("Expected Sll to have Head valuu of nil, got %v", s.Head)
	}
	if s.Tail != nil {
		t.Errorf("Expected Sll to have Tail valuu of nil, got %v", s.Tail)
	}
}

func TestSllPush(t *testing.T) {
	s := newSll()
	s.push(31)
	if s.Head.Val != 31 {
		t.Errorf("Expected empty Sll head to be 31(new node value) instead got %v", s.Head.Val)
	}
	if s.Tail.Val != 31 {
		t.Errorf("Expected empty Sll head to be 31(new node value) instead got %v", s.Head.Val)
	}
	if s.Length != 1 {
		t.Errorf("The List length was not increased, should be 1 got %v", s.Length)
	}

}

func TestSllPop(t *testing.T) {
	s := createTestSll()
	n := s.pop()

	if n.Val != 15 {
		t.Errorf("Expected to get the final node 15, instead got %v", n.Val)
	}
	if s.Tail.Val != 11 {
		t.Errorf("Forgot to remove the final tail from the list should be 11, instead got %v", s.Tail.Val)
	}

	if s.Tail.Next != nil {
		t.Errorf("Forgot to sever connection from tail expected nil, instead got %v", s.Tail.Next)
	}

	if s.Length != 2 {
		t.Errorf("The List length was not shortened, should be 2 got %v", s.Length)
	}

}
func TestSllShift(t *testing.T) {
	s := createTestSll()
	n := s.shift()

	if n.Val != 31 {
		t.Errorf("Expected to get the head node 31, instead got %v", n.Val)
	}
	if n.Next != nil {
		t.Errorf("Expected to get nil value after connection was severed, instead got %v", n.Next)
	}

	if s.Head.Val != 11 {
		t.Errorf("Ecpected the new head to be 11, instead got %v", s.Head.Val)
	}

	if s.Length != 2 {
		t.Errorf("The List length was not shortened, should be 2 got %v", s.Length)
	}

}
func TestSllUnshift(t *testing.T) {
	s := createTestSll()
	s.unshift(25)

	if s.Head.Val != 25 {
		t.Errorf("Expected the new head to be 25, instead got %v", s.Head.Val)
	}

	if s.Head.Next.Val != 31 {
		t.Errorf("Expected heads next to be old head, should be 31 instead got %v", s.Head.Next.Val)
	}

	if s.Length != 4 {
		t.Errorf("The List length was not increased, should be 4 got %v", s.Length)
	}

}
func TestSllGet(t *testing.T) {
	s := createTestSll()
	n1 := s.get(1)
	n2 := s.get(5)

	if n1.Val != 11 {
		t.Errorf("Searched for the node at index 1 11, instead got %v", n1.Val)
	}

	if n2 != nil {
		t.Errorf("Searched for out of range index, expected nil, instead got %v", n2)
	}

}
func TestSllSet(t *testing.T) {
	s := createTestSll()
	s.set(1, 13)

	if s.get(1).Val != 13 {
		t.Errorf("Index 1 was not set to be 13, instead got %v", s.get(1).Val)
	}
}

func TestSllInsert(t *testing.T) {
	s := createTestSll()
	s.insert(1, 93)

	if s.get(1).Val != 93 {
		t.Errorf("Index 1 was not set to 93, instead got %v", s.get(1).Val)
	}

	if s.get(1).Next.Val != 11 {
		t.Errorf("Index 1 was not set to 8, instead got %v", s.get(1).Val)
	}

	if s.get(0).Next.Val != 93 {
		t.Errorf("Previous node was not linked, next should be 93 instead got %v", s.get(0).Next.Val)
	}

	if s.Length != 4 {
		t.Errorf("THe length was not increased, should get 4, instead got %v", s.Length)
	}

}
func TestSllRemove(t *testing.T) {
	s := createTestSll()
	n := s.remove(1)

	if n.Val != 11 {
		t.Errorf("THe correct node was not removed, should be 11 instead got %v", n.Val)
	}
	if n.Next != nil {
		t.Errorf("Did not sever connection from removed node, should get nil instead got %v", n.Next)
	}
	if s.get(1).Val != 15 {
		t.Errorf("The node at index 1 was not removed, should get 15, instead go %v", s.get(1).Val)
	}

	if s.get(0).Next.Val != 15 {
		t.Errorf("The previous node was not linked correctly, should get 15 instead got %v", s.get(0).Next.Val)
	}

	if s.Length != 2 {
		t.Errorf("The length was not decreased, should get 2, instead got %v", s.Length)
	}
}
func TestSllReverse(t *testing.T) {

}
