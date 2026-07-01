$ErrorActionPreference = "Continue"

# Logos
Write-Host "Downloading logos..."
Invoke-WebRequest -Uri "https://regionalhomeslufkin.com/logos/regional-logo.svg" -OutFile "public/logos/regional-logo.svg"
Invoke-WebRequest -Uri "https://regionalhomeslufkin.com/logos/regional-icon.svg" -OutFile "public/logos/regional-icon.svg"

# Videos
Write-Host "Downloading video..."
Invoke-WebRequest -Uri "https://regionalhomeslufkin.com/_nuxt/home-hero.K0rNEtQi.mp4" -OutFile "public/videos/home-hero.mp4"

# Images
Write-Host "Downloading images..."
Invoke-WebRequest -Uri "https://regionalhomeslufkin.com/_nuxt/stack-image-1.C8K-2qcw.jpg" -OutFile "public/images/stack-image-1.jpg"
Invoke-WebRequest -Uri "https://regionalhomeslufkin.com/_nuxt/stack-image-2.DROLql56.jpg" -OutFile "public/images/stack-image-2.jpg"

# Trusted Partners
Write-Host "Downloading partner logos..."
Invoke-WebRequest -Uri "https://regionalhomeslufkin.com/_nuxt/skyline.DE6zZ5gQ.png" -OutFile "public/images/partners/skyline.png"
Invoke-WebRequest -Uri "https://regionalhomeslufkin.com/_nuxt/winston.BWFMDejg.svg" -OutFile "public/images/partners/winston.svg"
Invoke-WebRequest -Uri "https://regionalhomeslufkin.com/_nuxt/champion.Dky6XWSE.png" -OutFile "public/images/partners/champion.png"
Invoke-WebRequest -Uri "https://regionalhomeslufkin.com/_nuxt/scotbilt.gKrC1I5n.png" -OutFile "public/images/partners/scotbilt.png"

# Builder logos
Write-Host "Downloading builder logos..."
Invoke-WebRequest -Uri "https://regionalhomes.wpengine.com/wp-content/uploads/2024/01/Bravo-Logo-File.png" -OutFile "public/images/builders/bravo.png"
Invoke-WebRequest -Uri "https://regionalhomes.wpengine.com/wp-content/uploads/2023/11/Champion-Homes-Centered.png" -OutFile "public/images/builders/champion.png"
Invoke-WebRequest -Uri "https://regionalhomes.wpengine.com/wp-content/uploads/2024/01/Embark-Logo-File.png" -OutFile "public/images/builders/embark.png"
Invoke-WebRequest -Uri "https://regionalhomes.wpengine.com/wp-content/uploads/2023/11/Hamilton_Homebuilders-Logo-File.jpg" -OutFile "public/images/builders/hamilton.jpg"
Invoke-WebRequest -Uri "https://regionalhomes.wpengine.com/wp-content/uploads/2024/01/winston.png" -OutFile "public/images/builders/winston.png"

# Lender logos
Write-Host "Downloading lender logos..."
Invoke-WebRequest -Uri "https://regionalhomes.wpengine.com/wp-content/uploads/2024/09/Triad-Financial-Services-logo.png" -OutFile "public/images/lenders/triad.png"
Invoke-WebRequest -Uri "https://regionalhomes.wpengine.com/wp-content/uploads/2023/11/21st_rectangle_logo-01.jpg" -OutFile "public/images/lenders/21st-mortgage.jpg"
Invoke-WebRequest -Uri "https://regionalhomes.wpengine.com/wp-content/uploads/2023/11/genesis.png" -OutFile "public/images/lenders/genesis.png"
Invoke-WebRequest -Uri "https://regionalhomes.wpengine.com/wp-content/uploads/2023/11/cascade-loans-reg-1.png" -OutFile "public/images/lenders/cascade.png"
Invoke-WebRequest -Uri "https://regionalhomes.wpengine.com/wp-content/uploads/2023/11/CSL-Logo500.png" -OutFile "public/images/lenders/csl.png"
Invoke-WebRequest -Uri "https://regionalhomes.wpengine.com/wp-content/uploads/2024/01/fb.png" -OutFile "public/images/lenders/firstbank.png"
Invoke-WebRequest -Uri "https://regionalhomes.wpengine.com/wp-content/uploads/2023/11/CIS-Home-Loans.png" -OutFile "public/images/lenders/cis.png"
Invoke-WebRequest -Uri "https://regionalhomes.wpengine.com/wp-content/uploads/2023/11/credithuman.jpeg" -OutFile "public/images/lenders/credithuman.jpeg"
Invoke-WebRequest -Uri "https://regionalhomes.wpengine.com/wp-content/uploads/2023/11/Country-Place-Mortgage.jpg" -OutFile "public/images/lenders/countryplace.jpg"
Invoke-WebRequest -Uri "https://regionalhomes.wpengine.com/wp-content/uploads/2024/01/AutoMHatic-Final-01.png" -OutFile "public/images/lenders/automhatic.png"

# Home images
Write-Host "Downloading home images..."
$homeImages = @(
    @{url="https://regentstorage.blob.core.windows.net/regent-public/8263df349fe546e9a8210cb93cfa624b.jpg"; name="bourbon.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/c1cabbee551149c98e6b7d101a593236.jpg"; name="camino-ph.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/09abf0288007413b8fb00a933e6853ae.jpg"; name="carondelet.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/cff7c042aed8477eba86c5ea451c05c7.webp"; name="cedar-creek.webp"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/e6d1078149754c92ae41e8ccb7ac03dd.jpg"; name="creole.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/9517cc830e7a43ba96e0fb0478384765.jpg"; name="eva.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/b70cd52e72d14084bd5856191070d4eb.jpg"; name="fay.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/89cea19db356448b9b36c0356575bf52.jpg"; name="freemont.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/72bd3db9ebb04af6af705d9ba6e7c2e0.jpg"; name="helicon.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/2cda6eee41fd449398ceafb774b5d24c.jpg"; name="hudson.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/5e08ed6d5c7f4917a2074d355b4057c4.jpg"; name="kinlock-falls.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/59764f40aa324d71ba6b5256703a0fbe.jpg"; name="lynn.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/e4ec544dc0a045f39d9ca531b6788548.webp"; name="pip.webp"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/28d8029918fd41e3aa930dd58e7400f6.jpg"; name="ponchatrain.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/852ddf64526b4abd98bdc17970ade176.jpg"; name="powell.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/e803773963bc401f81cef0702d98639f.jpg"; name="quest-ph.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/689fd8bc416d4b72bf0fed4dea63d538.jpg"; name="river-view.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/8012f6eea84a4b8da02816c374caf556.jpg"; name="rover.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/2877b4e3c01a4e0eb6b0e712db855f50.jpg"; name="sipsey.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/fb18f052b4494db5ad8041e65bd53e3b.jpeg"; name="sky-harbor.jpeg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/e4641d8943544f01b5ed7e758d7209dc.jpeg"; name="trek.jpeg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/3be1713d783f4b3d8f8c93c89876f4e9.jpg"; name="tulane.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/a59d8b838ef64e248c51dc3a5c58deec.jpg"; name="wilson-bend.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/9ad1165629be44e6bcb1b2c3f7ccb156.jpeg"; name="woodworth-ph.jpeg"}
)

foreach ($img in $homeImages) {
    Write-Host "  -> $($img.name)"
    Invoke-WebRequest -Uri $img.url -OutFile "public/images/homes/$($img.name)"
}

# Team photos
Write-Host "Downloading team photos..."
$teamImages = @(
    @{url="https://regentstorage.blob.core.windows.net/regent-public/bio-8919bc4c-da7a-413e-8f65-72f7ed9b313b.jpg"; name="cindy-claybrook.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/bio-8ed2d611-f7ea-426c-9ec5-bb5ad87c1724.jpg"; name="ashley-delgado.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/bio-a09df2fb-32e9-493c-930f-0198c8c4f367.jpg"; name="rustin-guarnere.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/bio-47ec553b-4965-4ded-8001-00c582285314.jpg"; name="anthony-palos.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/bio-c905cd04-6ea4-4187-8b94-8e796d962e0d.jpg"; name="colby-payne.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/bio-95f132b9-9457-43cf-8ea0-fde940e9b87b.jpg"; name="julian-ramirez.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/bio-28519716-7416-40b9-b828-63fbde0ef105.jpg"; name="jonatan-rangel.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/bio-b59c3bab-623e-4977-a955-c5efe09da7b1.jpg"; name="jake-smith.jpg"},
    @{url="https://regentstorage.blob.core.windows.net/regent-public/bio-1476458f-f38a-4daa-bd5b-bdeff416796e.jpg"; name="tristan-tidwell.jpg"}
)

foreach ($img in $teamImages) {
    Write-Host "  -> $($img.name)"
    Invoke-WebRequest -Uri $img.url -OutFile "public/images/team/$($img.name)"
}

Write-Host "All assets downloaded successfully!"
