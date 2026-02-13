//priority: 8

ServerEvents.recipes(event => {
	global.cutting.addCuttingRecipe(event, global.id.MC('gravel'), global.id.SP('gravel_bricks'), 1);
});