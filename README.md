# extend-sails-model
Example of extending SailsJS models to prevent attribute duplication.

base/Model.js contains attributes and methods that apply to all models.

base/models/ActivationExpiryBase.js and NameDescriptionBase.js extend base/Model.js to add their own attributes.

base/models/NameDescriptionActivationExpiryBase.js then extends both ActivationExpiryBase.js and NameDescriptionBase.js to provide all of their attributes.

models/User.js then extends NameDescriptionActivationExpiryBase.js and adds its own user_attribute attribute.

Posting to http://localhost:1337/user returns the following:

{
    "name": "test name",
    "description": "test description",
    "activation_date": "2015-04-14T12:14:02.960Z",
    "expiry_date": null,
    "user_attribute": "test user attribute",
    "createdAt": "2015-04-14T12:14:02.963Z",
    "updatedAt": "2015-04-14T12:14:02.963Z",
    "id": 1
}

So you end up with the built in id, createdAt, updatedAt, plus name and description from NameDescriptionBase and also activation_date and expiry_date from ActivationExpiryBase.

You can then re-use these base models throughout your actual models to prevent method and particulary attribute duplication. It also aids with consistency across model definitions.