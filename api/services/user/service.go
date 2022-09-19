package user

type Userer interface {
	GetByID(id string) (User, error)
	GetByUsername(username string) (User, error)
	Insert(user User) error
}
