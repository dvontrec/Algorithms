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

}
func TestSllSet(t *testing.T) {

}

func TestSllInsert(t *testing.T) {

}
func TestSllRemove(t *testing.T) {

}
func TestSllReverse(t *testing.T) {

}
