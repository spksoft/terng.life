package user

import "fmt"

type ErrInValidID struct {
	ID  string
	Raw error
}

func (e ErrInValidID) Error() string {
	return fmt.Sprintf("invalid id: %s, %v", e.ID, e.Raw)
}

type ErrNotFound struct {
	Raw error
}

func (e ErrNotFound) Error() string {
	return fmt.Sprintf("not found: %v", e.Raw)
}
