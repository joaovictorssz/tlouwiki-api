var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get('/tlouapi', (req, res)=>{
    res.json([
        {
            name : 'Joel Miller',
            age: 56,
            gender: "Male",
            height: 182,
            weight: 91,
            background: 'https://miro.medium.com/max/1400/1*KTTiuYlSRImseTgiGh8jWA.jpeg',
            img: 'https://1.bp.blogspot.com/-uTDWT8U0nbM/VeDHGuzAEWI/AAAAAAAAF0E/1r6FcVozBiA/s200/JOEL%2BTHE%2BLAST%2BOF%2BUS%2BBIO%2B_.png',
            description: 'A brutal survivor with few moral lines left to cross. Joel, now in his late 40s, has been hardened by the ravages of the fungal pandemic that has devastated civilization as we know it. He’s lost friends, family, and everything he valued in life. Living in one of few remaining military-controlled quarantine zones, he operates as a black market smuggler, dealing in contraband, taking numerous de-humanizing jobs over the years to survive in this new post-pandemic world. Joel’s conscience slowly dwindles away as he shuts down his emotions to cope to his new life.'

        },
        {
            name : 'Ellie Williams',
            age: 19,
            gender: "Female",
            height: 165,
            weight: 62,
            background: 'https://sm.ign.com/t/ign_it/screenshot/default/cdv_5bft.1200.jpg',
            img: 'https://3.bp.blogspot.com/-M9yAZxKo7jU/VeFGfa1HYOI/AAAAAAAAF2A/xRPf4aKvQbY/s200/THE%2BLAST%2BOF%2BUS%2BELLIE%2BBIO%2B_.png',
            description: 'A brave, 14-year-old girl, Ellie has grown up in this harsh world and it is all she has ever known. She’s an orphan who was raised in a boarding school run by the military within the bounds of the quarantine zone. Naïve and curious about the outside world, she is wise beyond her years and highly capable of taking care of herself and those around her. Obsessed with comic books, CDs, and other pop culture, her knowledge base is filled by the remnants of a world that no longer exists.'

        },
        {
            name : 'Tommy Miller',
            age: 45,
            gender: "Male",
            height: 178,
            weight: 78,
            background: 'https://static1.thegamerimages.com/wordpress/wp-content/uploads/2021/03/the-last-of-us-tommy.png',
            img: 'https://4.bp.blogspot.com/-3uXbitYtii8/VeFOodJBdqI/AAAAAAAAF2s/hhnO-8y0mKc/s200/THE%2BLAST%2BOF%2BUS%2BTOMMY%2BBIO%2B_.png',
            description: 'Tommy was born during the early to mid-1980s, sometime after his older brother Joel in Arlington, Texas where they were raised together.  As a child, Tommy shared a mutual interest in music and college football with his brother. Later, Tommy became an uncle after the birth of his niece, Sarah, and likely contributed to raising her. Tommy regularly joined Joel and Sarah at several events and carnivals, evidenced by the photos in Sara`s room.'

        },
        {
            name : 'Tess Servopoulos',
            age: 48,
            gender: "Female",
            height: 159,
            weight: 77,
            background: 'https://img.olhardigital.com.br/wp-content/uploads/2023/01/Tess-the-last-of-us-part-1.jpeg',
            img: 'https://4.bp.blogspot.com/-n0pkm1LC910/VeDHG0AujvI/AAAAAAAAF0I/hP5mf7lIiIo/s200/TESS%2BTHE%2BLAST%2BOF%2BUS%2BBIO%2B_.png',
            description: 'After the Cordyceps brain infection outbreak, Tess became a smuggler in the Boston quarantine zone, living in Area 4. While there, she met Joel. The two became partners; Joel serving as the muscle while she was the brains in their operations. The two became close, Tess even affectionately calling him "Texas" and the two flirted with each other during their missions, heavily relying upon each other in the post-pandemic world. With Tess having various contacts in the Boston underworld and a no-holds barred approach, she and Joel earned a ruthless reputation, to the point where their fellow survivors (including Ronnie) within the QZ did not attempt to cross them.'

        },
        {
            name : 'Sarah Miller',
            age: 12,
            gender: "Female",
            height: 152,
            weight: 42,
            background: 'https://i.pinimg.com/736x/2f/2d/16/2f2d16e4dd4fb1c3389fbd0a5e1bb9f2.jpg',
            img: 'https://4.bp.blogspot.com/-Dw_oHRlKHCw/VeE_hJMPe0I/AAAAAAAAF10/uupGkFGbAWg/s200/THE%2BLAST%2BOF%2BUS%2BSARAH%2BBIO.png',
            description: 'Sarah was born in late 2000 or early–mid 2001, to Joel Miller and an unknown mother. Prior to the outbreak, she lived a regular, everyday life in the Austin, Texas area with her father Joel. She was on a youth soccer team called the "Defenders", playing in the number 14 position, and won an individual award in a game, as evidenced by several pictures in their house, especially one of her and Joel together. She also enjoyed hiking with her father and skateboarding, as shown by a skateboard leaning against the wall in her room at the start of the game. She was a fan of the rock band "The Bash", having a poster of them on her bedroom wall. She also liked the "Dawn of the Wolf" films, a play on the Twilight saga, as seen by a poster in her bedroom. It is implied she made Joel take her to see the film.[5] Sarahs mother and Joel were married "for a while" but she left Joel shortly after Sarah was born.' 

        },
        {
            name : 'Bill',
            age: 56,
            gender: "Male",
            height: 178,
            weight: 103,
            background: 'https://stylecaster.com/wp-content/uploads/2023/01/Bill-The-Last-of-Us.png',
            img: 'https://4.bp.blogspot.com/-Je6QoOJhjUo/VeDL5c3uBMI/AAAAAAAAF0o/Qw-boF_ZrAQ/s200/BILL%2BTHE%2BLAST%2BOF%2BUS%2BBIO.png',
            description: 'Bill was well-equipped for survival before the Cordyceps brain infection outbreak, having obtained mechanical skills at some point in his life as he is able to repair vehicles and build things from scraps. He also adapted to the new world and became a competent scavenger. ' 

        },
    ])
})

app.listen(5050, ()=>{
    console.log("App running on PORT 5050.")
})