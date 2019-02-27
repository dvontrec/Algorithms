package main

func main() {

}

func isPalindrome(s string) bool {
	for i := range s {
		if s[i] != s[(len(s)-1)-i] {
			return false
		}
	}
	return true
}
