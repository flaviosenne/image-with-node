const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

async function execute(){

    const way = path.resolve(__dirname, "./img")
    try{

        //redimensionar
        await sharp(way+'/image1.jpg').resize(1920, 1080).toFile(way+'/edited-image1.jpeg')
        await sharp(way+'/image2.png').resize(400, 200).toFile(way+'/edited-image2.jpeg')
        await sharp(way+'/image2.png').resize(1920, 1080).toFile(way+'/edited2-image2.jpeg')

        
        // tonalidade do preto
        await sharp(way+'/image2.png').threshold(80).toFile(way+'/edited3-image2.jpeg')
        
        // efeito antigo
        await sharp(way+'/image2.png').recomb([
            [0.3588, 0.7044, 0.1368],
            [0.2990, 0.5870, 0.1140],
            [0.2392, 0.4696, 0.0912]
        ]).toFile(way+'/edited4-image2.jpeg')

        // filtro
        await sharp(way+'/image2.png').modulate({
            hue: 180
        }).toFile(way+'/edited5-image2.jpeg')

        //desfocar
        await sharp(way+'/image2.png').blur(10).toFile(way+'/edited6-image2.jpeg')
        // writeFileSync("img/edited-image1.png", info1)
        
        
        await sharp({
            create: {
                width: 1920,
                height: 1080,
                channels: 4,
                background: {r: 255, g: 255, b: 255, alpha: 0.5}
            }
        }).blur(10).toFile(way+'/edited7-image2.jpeg')


    }
    catch(err){
        console.log("erro mesmo")
        console.log(err)
    }
}

execute()