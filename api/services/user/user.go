package user

import "time"

type User struct {
	ID          string    `json:"id" bson:"_id"`
	Username    string    `json:"username" bson:"username"`
	Password    string    `json:"password" bson:"password"`
	Email       string    `json:"email" bson:"email"`
	DisplayName string    `json:"display_name" bson:"display_name"`
	CreatedAt   time.Time `json:"created_at" bson:"created_at"`
	UpdatedAt   time.Time `json:"updated_at" bson:"updated_at"`
	DeletedAt   time.Time `json:"deleted_at" bson:"deleted_at"`
}
