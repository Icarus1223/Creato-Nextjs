## API

BITE

```bash
createBite = get('api/v1/bites/create')
getBites = get('api/v1/bites')
getBiteById = get('api/v1/bites/:id')
deleteBiteById = delete('api/v1/bites/:id')
setBiteVislble = put('api/v1/bites/:id/set_visible', data)
setBiteVidoeVisible = put('api/v1/bites/:id/video/:index/set_visible', data)
removeBiteVideo = delete('api/v1/bites/:id/video/:index')
```