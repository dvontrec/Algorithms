package main

import "testing"

func TestIsPalindrome(t *testing.T) {
	if isPalindrome("abba") != true {
		t.Errorf("Expected true for abba, instead got %v", isPalindrome("abba"))
	}
	if isPalindrome("funny right?") != false {
		t.Errorf("Expected false for funny right?, instead got %v", isPalindrome("funnyright"))
	}

	if isPalindrome("racecar") != true {
		t.Errorf("Expected true for racecar, instead got %v", isPalindrome("racecar"))
	}

}

func TestRecursiveIsPalindrome(t *testing.T) {
	if recursiveIsPalindrome("abba") != true {
		t.Errorf("Expected true for abba, instead got %v", recursiveIsPalindrome("abba"))
	}
	if recursiveIsPalindrome("funny right?") != false {
		t.Errorf("Expected false for funny right?, instead got %v", recursiveIsPalindrome("funnyright"))
	}

	if recursiveIsPalindrome("racecar") != true {
		t.Errorf("Expected true for racecar, instead got %v", isPalindrome("racecar"))
	}

}
