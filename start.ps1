if ($args[0] -eq "serve") {
    ionic serve
}
if ($args[0] -eq "build") {
    ionic build
}

if ($args[1] -eq "true") {
    npx cap copy
}
if ($args[2] -eq "true") {
    npx cap open android
}