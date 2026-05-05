# Potato recipe event

## Initialize

```js
ServerEvents.recipes(event => {
	potato.recipes.applyEvent(event);
});
```

## Available methods

### Generic

- potato.event.replaceOutput(filter, original, replacement)

### Create

- potato.event.create_cutting(ingredient, result, processingTime)
- potato.event.create_deploying(ingredients, result, keepHeldItem)
- potato.event.create_filling(ingredients, result)
- potato.event.create_item_application(ingredients, result)
- potato.event.create_mechanical_crafting(pattern, keys, result)
- potato.event.create_mixing(ingredients, result, heatRequirement)
- potato.event.create_pressing(ingredient, result)
- potato.event.create_sequenced_assembly(ingredient, sequence, loops, results, transitionalItem)
- potato.event.create_splashing(ingredient, results)

**All methods above have "raw" variant to be used on the create_sequenced_assembly sequence**
Example: potato.event.raw_create_pressing(ingredient, result)