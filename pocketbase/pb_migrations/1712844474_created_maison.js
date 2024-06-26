/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qlnqfuovkywz0fe",
    "created": "2024-04-11 14:07:54.186Z",
    "updated": "2024-04-11 14:07:54.186Z",
    "name": "maison",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cl6urgco",
        "name": "nomMaison",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("qlnqfuovkywz0fe");

  return dao.deleteCollection(collection);
})
