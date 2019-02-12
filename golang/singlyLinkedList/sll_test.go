package main

import (
	"testing"
)

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
}

func TestSllPop(t *testing.T) {
	s := newSll()
	s.push(31)
	s.push(11)
	s.push(15)
	n := s.pop()
	if n.Val != 31 {
		t.Errorf("Expected to get the final node 31, instead got %v", n.Val)
	}
	if s.Tail.Val != 11 {
		t.Errorf("Forgot to remove the final tail from the list should be 11, instead got %v", s.Tail.Val)
	}

	if s.Tail.Next != nil {
		t.Errorf("Forgot to sever connection from tail expoected nil, instead got %v", s.Tail.Next)
	}

}
func TestSllShift(t *testing.T) {

}
func TestSllPopUnshift(t *testing.T) {

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
