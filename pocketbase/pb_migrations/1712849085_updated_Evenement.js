/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrwpwabu1hma7wx")

  // remove
  collection.schema.removeField("zw6dnat1")

  // remove
  collection.schema.removeField("uvlmoie5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cq8tke3d",
    "name": "date_heure",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("yrwpwabu1hma7wx")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zw6dnat1",
    "name": "date",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uvlmoie5",
    "name": "heure",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // remove
  collection.schema.removeField("cq8tke3d")

  return dao.saveCollection(collection)
})
