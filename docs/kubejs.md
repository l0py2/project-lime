# KubeJS

## Startup scripts

### Load order (higher priority first to load)

- global/indentifiers.js (100)
- global/materials.js (99)
- global/colours.js (99)
- standardize/main.js (50)
- standardize/mods/\*.js (49)
- standardize/hide-items.js (48)

## Client scripts

- Applies tooltips with standardization information

## Server scripts

### Load order (higher priority first to load)

- global/id.js (100)
- global/recipes.js (99)
- block-conversions/main.js (50)
- block-conversions/tags/\* (49)
- block-conversions/apply.js (48)