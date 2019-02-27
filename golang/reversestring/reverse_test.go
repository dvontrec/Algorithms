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
