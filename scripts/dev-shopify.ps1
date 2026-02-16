Write-Host "Starting Vite watch build..."
Start-Process -FilePath "npm" -ArgumentList "run","build","--","--watch"

Write-Host "Starting Shopify theme dev..."
shopify theme dev
