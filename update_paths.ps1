$srcDir = "c:\Users\admin\Desktop\Project\finris-react\src"

# Get all TypeScript and JavaScript files
$files = Get-ChildItem -Path $srcDir -Recurse -Include "*.tsx", "*.ts", "*.jsx", "*.js"

foreach ($file in $files) {
    $content = Get-Content -Path $file.FullName -Raw
    
    # Replace image paths
    $content = $content -replace "/assets/images/resources/", "/assets/resources/"
    $content = $content -replace "/assets/images/shapes/", "/assets/shapes/"
    $content = $content -replace "/assets/images/icon/", "/assets/icon/"
    $content = $content -replace "/assets/images/team/", "/assets/team/"
    $content = $content -replace "/assets/images/project/", "/assets/project/"
    $content = $content -replace "/assets/images/blog/", "/assets/blog/"
    $content = $content -replace "/assets/images/testimonial/", "/assets/testimonial/"
    $content = $content -replace "/assets/images/gallery/", "/assets/gallery/"
    $content = $content -replace "/assets/images/shop/", "/assets/shop/"
    $content = $content -replace "/assets/images/backgrounds/", "/assets/backgrounds/"
    $content = $content -replace "/assets/images/brand/", "/assets/brand/"
    $content = $content -replace "/assets/images/home-showcase/", "/assets/home-showcase/"
    $content = $content -replace "/assets/images/landing-page/", "/assets/landing-page/"
    
    # Save the file
    Set-Content -Path $file.FullName -Value $content
}

Write-Host "All image paths have been updated to match the new folder structure."