package main

func main() {

}

// Accepts a string and returns the length of the longest sub string
func longestSubString(s string) int {
	// create a pointer for the start and the end of substring
	pointer1 := 0
	pointer2 := 0
	// create hash map for characters in substring
	chars := map[string]bool{}
	max := 0
	// loop through the string until the pointer 2 reaches the max
	for pointer2 < len(s) {
		// if the character exists in the map
		if chars[string(s[pointer2])] {
			// pointer 1 goes up and reset the window and map
			pointer1++
			pointer2 = pointer1
			chars = map[string]bool{}
		}
		// add the character to the map
		chars[string(s[pointer2])] = true
		// increment the pointer
		pointer2++
		// if the new window is bigger than the current max
		if pointer2-pointer1 > max {
			max = pointer2 - pointer1
		}

	}
	// return the max
	return max
}
