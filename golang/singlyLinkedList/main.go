package main

import "fmt"

func main() {
	fmt.Println("hello world")
	s := newSll()
	s.push(5)
	s.push(8)
	s.push(18)
	s.push(32)
	s.push(11)
	fmt.Println(s.print())
	s2 := newSll()
	s2.unshift(5)
	s2.unshift(8)
	s2.unshift(18)
	s2.unshift(32)
	s2.unshift(11)
	fmt.Println(s2.print())
}
