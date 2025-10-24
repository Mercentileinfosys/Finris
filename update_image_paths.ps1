$srcDir = "c:\Users\admin\Desktop\Project\finris-react\src"

# Define path mappings (old path pattern => new path pattern)
$pathMappings = @{
    "/assets/images/resources/" = "/assets/resources/"
    "/assets/images/shapes/" = "/assets/shapes/"
    "/assets/images/icon/" = "/assets/icon/"
    "/assets/images/team/" = "/assets/team/"
    "/assets/images/project/" = "/assets/project/"
    "/assets/images/blog/" = "/assets/blog/"
    "/assets/images/testimonial/" = "/assets/testimonial/"
    "/assets/images/gallery/" = "/assets/gallery/"
    "/assets/images/shop/" = "/assets/shop/"
    "/assets/images/backgrounds/" = "/assets/backgrounds/"
    "/assets/images/brand/" = "/assets/brand/"
    "/assets/images/home-showcase/" = "/assets/home-showcase/"
}

# Get all TypeScript and JavaScript files
$files = Get-ChildItem -Path $srcDir -Recurse -Include "*.tsx", "*.ts", "*.jsx", "*.js"

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    $modified = $false
    
    foreach ($mapping in $pathMappings.GetEnumerator()) {
        if ($content -match [regex]::Escape($mapping.Key)) {
            $content = $content -replace [regex]::Escape($mapping.Key), $mapping.Value
            $modified = $true
            Write-Host "Updated paths in $($file.FullName)"
        }
    }
    
    # Special case for landing-page images
    if ($content -match "/assets/images/landing-page/") {
        $content = $content -replace "/assets/images/landing-page/", "/assets/landing-page/"
        $modified = $true
        Write-Host "Updated landing-page paths in $($file.FullName)"
    }
    
    if ($modified) {
        Set-Content -Path $file.FullName -Value $content
    }
}

Write-Host "All image paths have been updated to match the new folder structure."