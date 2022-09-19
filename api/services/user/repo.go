package user

import "context"

type UserDatasSourcer interface {
	GetByID(ctx context.Context, id string) (User, error)
	GetByUsername(ctx context.Context, username string) (User, error)
}
