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
}
