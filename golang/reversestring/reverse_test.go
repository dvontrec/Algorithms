package main

import (
	"testing"
)

func TestReverse(t *testing.T) {
	if reverse("apple") != "elppa" {
		t.Errorf("Expected leppa, instead got %v", reverse("apple"))
	}
	if reverse("hello") != "olleh" {
		t.Errorf("Expected olleh, instead got %v", reverse("hello"))
	}
	if reverse("Greetings!") != "!sgniteerG" {
		t.Errorf("Expected !sgniteerG, instead got %v", reverse("Greetings!"))
	}
}

func TestRecursiveReverse(t *testing.T) {
	if recursiveReverse("apple") != "elppa" {
		t.Errorf("Expected leppa, instead got %v", recursiveReverse("apple"))
	}
	if recursiveReverse("hello") != "olleh" {
		t.Errorf("Expected olleh, instead got %v", recursiveReverse("hello"))
	}
	if recursiveReverse("Greetings!") != "!sgniteerG" {
		t.Errorf("Expected !sgniteerG, instead got %v", recursiveReverse("Greetings!"))
	}
}
