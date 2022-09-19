package user

import (
	"context"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

const (
	CollectionName = "users"
)

type MongodbUser struct {
	db *mongo.Database
}

func (m *MongodbUser) GetByID(ctx context.Context, id string) (User, error) {
	coll := m.db.Collection(CollectionName)

	oid, err := primitive.ObjectIDFromHex(id)
	if err != nil {
		return User{}, ErrInValidID{ID: id, Raw: err}
	}

	var user User
	filter := bson.M{"_id": oid}

	err = coll.FindOne(ctx, filter).Decode(&user)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return User{}, ErrNotFound{Raw: err}
		}
		return User{}, err
	}

	return user, nil
}

func (m *MongodbUser) GetByUsername(ctx context.Context, username string) (User, error) {
	coll := m.db.Collection(CollectionName)

	var user User
	filter := bson.M{"username": username}

	err := coll.FindOne(ctx, filter).Decode(&user)
	if err != nil {
		if err == mongo.ErrNoDocuments {
			return User{}, ErrNotFound{Raw: err}
		}
		return User{}, err
	}

	return user, nil
}

func NewMongodbUser(db *mongo.Database) *MongodbUser {
	return &MongodbUser{db: db}
}
