## API

BITE
```bash
CreateBite = post('api/v1/bites/create')
GetBites = get('api/v1/bites')
GetBiteById = get('api/v1/bites/:id')
UpdateBiteById = put('api/v1/bites/:id')
DeleteBiteById = delete('api/v1/bites/:id')
UnlockBite = put('api/v1/bites/:id/unlock', data)
SetBiteVislble = put('api/v1/bites/:id/set_visible', data)
SetBiteVidoeVisible = put('api/v1/bites/:id/videos/:index/set_visible', data)
RemoveBiteVideo = delete('api/v1/bites/:id/videos/:index')
CreateComment = post('api/v1/bites/:id/comments/create', data)
DeleteComment = delete('api/v1/bites/:id/comments/:index')
```

Transaction
```bash
GetTransactions = get('api/v1/transactions')
GetTransactionsByBite = get('api/v1/transactions/bites/:id')
GetTransactionsByUser = get('api/v1/trnasactions/users/:id')
```