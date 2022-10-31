import axios from "axios"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export const sortByData = [
    {
        label: 'Price Low'
    },
    {
        label: 'Price High'
    },
    {
        label: 'Oldest'
    },
    {
        label: 'Newest'
    }
]

export const filterByData = [
    {
        label: 'kimono'
    },
    {
        label: 'chikan'
    },
    {
        label: 'female'
    },
    {
        label: 'indian'
    }
]

export const filtered = [
    {
        "id": "gi5ZTnIaVgVcg22gjACo",
        "price": 100,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A comfortably light kimono robe, made of Cotton-linen, It is finished with an open front and ¾ length sleeves, Layer over your dress or top for understated elegance. Can be worn during the colder seasons by layering over jumpers and polo necks.",
        "name": "Kimono",
        "userId": "1",
        "picture": "https://i.etsystatic.com/12603089/c/800/633/0/71/il/816a70/3495121270/il_340x270.3495121270_be1h.jpg",
        "tags": [
            "kimono",
            "haori",
            "Japanese",
        ]
    }
]

export const designsData = [
    {
        "id": "gi5ZTnIaVgVcg22gjACo",
        "price": 100,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A comfortably light kimono robe, made of Cotton-linen, It is finished with an open front and ¾ length sleeves, Layer over your dress or top for understated elegance. Can be worn during the colder seasons by layering over jumpers and polo necks.",
        "name": "Kimono",
        "userId": "1",
        "picture": "https://i.etsystatic.com/12603089/c/800/633/0/71/il/816a70/3495121270/il_340x270.3495121270_be1h.jpg",
        "tags": [
            "kimono",
            "haori",
            "Japanese",
        ]
    },
    {
        "id": "gi5ZTnIaVdVcg22gjACo",
        "price": 30,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A white suit",
        "name": "White Suit",
        "userId": "2",
        "picture": "https://i.etsystatic.com/25905859/r/il/39e440/3309314228/il_340x270.3309314228_sspy.jpg",
        "tags": [
            "chikan",
            "female"
        ]
    },
    {
        "id": "gi5ZTnIaVgVca22gjACo",
        "price": 100,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A white suit",
        "name": "White Suit",
        "userId": "3",
        "picture": "https://i.etsystatic.com/12603089/c/761/605/32/117/il/2af7c7/3425150881/il_340x270.3425150881_j9bu.jpg",
        "tags": [
            "kimono",
            "haori",
            "Japanese",
        ]
    },
    {
        "id": "gi5ZTnIaVgVct22gjACo",
        "price": 100,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A white suit",
        "name": "White Suit",
        "userId": "4",
        "picture": "https://i.etsystatic.com/25653501/c/1028/817/0/0/il/eb5094/3669637055/il_340x270.3669637055_lt3o.jpg",
        "tags": [
            "cassandra",
        ]
    },
    {
        "id": "gi5ZTnIaVgVct22gjACo",
        "price": 100,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A white suit",
        "name": "White Suit",
        "userId": "5",
        "picture": "https://i.etsystatic.com/31523766/c/1242/987/0/78/il/bfa817/3810015080/il_340x270.3810015080_s6px.jpg",
        "tags": [
            "afgan",
            "indian",
        ]
    },
    {
        "id": "gi5ZTnIaVgVct22gjACo",
        "price": 100,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A white suit",
        "name": "White Suit",
        "userId": "6",
        "picture": "https://i.etsystatic.com/21897683/c/2000/1589/0/128/il/0edd32/3976962531/il_340x270.3976962531_e1z6.jpg",
        "tags": [
            "warm",
        ]
    },
    {
        "id": "gi5ZTnIaVgVct22gjACo",
        "price": 100,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A white suit",
        "name": "White Suit",
        "userId": "7",
        "picture": "https://i.etsystatic.com/8029584/r/il/454199/3818344152/il_340x270.3818344152_pxgn.jpg",
        "tags": [
            "afgan",
            "indian",
        ]
    },
    {
        "id": "gi5ZTnIaVgVct22gjACo",
        "price": 100,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A white suit",
        "name": "White Suit",
        "userId": "8",
        "picture": "https://i.etsystatic.com/21270879/c/1218/968/0/364/il/992dbb/3032686596/il_340x270.3032686596_mp6q.jpg",
        "tags": [
            "cassandra",
        ]
    },
    {
        "id": "gi5ZTnIaVgVct22gjACo",
        "price": 100,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A white suit",
        "name": "White Suit",
        "userId": "9",
        "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLcO8d5BGLhdFL7JvB1bRDM1eFyD_9HLYFsg&usqp=CAU",
        "tags": [
            "ethiopian"
        ]
    },
    {
        "id": "gi5ZTnIaVgVct22gjACo",
        "price": 100,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A white suit",
        "name": "White Suit",
        "userId": "10",
        "picture": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShFjxu3B_R2K-ZU5vJC-iJvQ20BmmTPnm99w&usqp=CAU",
        "tags": [
            "Indian",
        ]
    },
    {
        "id": "gi5ZTnIaVgVct22gjACo",
        "price": 100,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A white suit",
        "name": "White Suit",
        "userId": "11",
        "picture": "https://i.etsystatic.com/14251893/c/709/563/0/327/il/36aa44/1179695514/il_340x270.1179695514_jabx.jpg",
        "tags": [
            "african",
        ]
    },
    {
        "id": "gi5ZTnIaVgVct22gjACo",
        "price": 100,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A white suit",
        "name": "White Suit",
        "userId": "12",
        "picture": "https://i.etsystatic.com/23720148/r/il/0bfff4/3241153143/il_340x270.3241153143_khi8.jpg ",
        "tags": [
            "indian"
        ]
    },
    {
        "id": "gi5ZTnIaVgVct22gjACo",
        "price": 100,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A white suit",
        "name": "White Suit",
        "userId": "13",
        "picture": "https://i.etsystatic.com/7682401/r/il/0de21b/2032168832/il_340x270.2032168832_8jhs.jpg",
        "tags": [
            "shawl",
            "scarf"
        ]
    },
    {
        "id": "gi5ZTnIaVgVct22gjACo",
        "price": 100,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A white suit",
        "name": "White Suit",
        "userId": "14",
        "picture": "https://i.etsystatic.com/28469261/r/il/2e6103/3678880705/il_340x270.3678880705_r73n.jpg",
        "tags": [
            "Indian",
        ]
    },
    {
        "id": "gi5ZTnIaVgVct22gjACo",
        "price": 100,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A white suit",
        "name": "White Suit",
        "userId": "15",
        "picture": "https://i.etsystatic.com/15125769/c/2000/1589/0/1393/il/804d47/3378970863/il_340x270.3378970863_keof.jpg",
        "tags": [
            "Indian",
            "British",
            "Christian",
            "Ethiopian"
        ]
    },
]

export const userData = [
    {
        "id": "1",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Samuel Adekunle",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
    },
    {
        "id": "2",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Joe Smith",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
    },
    {
        "id": "aYWhqgQpNlb4xae65XM6",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Alice Mar",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
    },
    {
        "id": "3",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Steve Bob",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
    },
    {
        "id": "4",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Oreo Chomba",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
    },
    {
        "id": "5",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Remi Cooper",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
    },
    {
        "id": "6",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Tenat Yossimi",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
    },
    {
        "id": "7",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Watney Kobe",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
    },
    {
        "id": "8",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Yamir Jay",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
    },
    {
        "id": "9",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Eric Nano",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
    },
    {
        "id": "10",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Gabe Doe",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
    },
    {
        "id": "11",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Camile Halbert",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
    },
    {
        "id": "12",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Yamata Workneh",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
    },
    {
        "id": "13",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Farhan Levling",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
    },
    {
        "id": "14",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Ben Jones",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
    },
    {
        "id": "15",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Eva Smith",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
    },
]

export const tailorInfo = [
    {
        "reviewsData": [
            {
                "id": "hhmq3w2q4Yjet1vwdd31TL8g78hHId7H",
                "uploadTime": {
                    "_seconds": 1667060434,
                    "_nanoseconds": 188000000
                },
                "rating": {
                    "responseTime": 0,
                    "fit": 0,
                    "materialQuality": 0,
                    "deliveryTime": 0
                },
                "averageRating": 0,
                "designId": "gi5ZTnIaVgVcg22gjACo",
                "body": "The white suit was really nice",
                "tailorId": "SOGY9Qi0SOHdFAjS4WTL",
                "userId": "aYWhqgQpNlb4xae65XM6"
            }
        ]
    }
]

export const socials = {
    "instagram": <InstagramIcon />,
    "facebook": <FacebookIcon />,
    "watsapp": <WhatsAppIcon />,
    "twitter": <TwitterIcon />,
    "gmail": <AlternateEmailIcon />
}

export const processData = (rowSize = 3) => {
    const allPosts = []
    let triple = []

    designsData.map((design, index) => {

        const { id, price, uploadTime, tags, picture: clothPicture, userId, description, name: clothName } = design

        // const user = (userData.filter(user => user['id'] == userId))[0]

        const { isTailor, picture, name } = getUser(userId);
        console.log("debug", isTailor, picture, name, userId, id);

        triple.push({
            id,
            name,
            clothName,
            isTailor,
            clothPicture,
            price,
            tags,
            uploadTime,
            description,
            picture,
        })

        if ((index + 1) % rowSize === 0) {
            allPosts.push(triple)
            triple = []
        }
    })
    if (allPosts.length) {
        allPosts.push(triple)

    }

    return allPosts
}

export const getUser = (userId) => {
    console.log("debug", userId);
    const please = (userData.filter(user => user['id'] == userId))[0]
    console.log('debug', please)
    return please
    // return await axios.get(`/api/users/${userId}`)
}