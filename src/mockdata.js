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
        label: 'Tags'
    },
    {
        label: 'Male'
    },
    {
        label: 'Female'
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
        "description": "A white suit",
        "name": "White Suit",
        "userId": "aYWhqgQpNlb4xae65XM6",
        "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1920px-Image_created_with_a_mobile_phone.png",
        "tags": [
            "Indian",
            "British",
            "Christian",
            "Ethiopian"
        ]
    },
    {
        "id": "gi5ZTnIaVdVcg22gjACo",
        "price": 100,
        "uploadTime": {
            "_seconds": 1667060405,
            "_nanoseconds": 189000000
        },
        "description": "A white suit",
        "name": "White Suit",
        "userId": "aYWhqgQpNlb4xae65XM6",
        "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1920px-Image_created_with_a_mobile_phone.png",
        "tags": [
            "Indian",
            "British",
            "Christian",
            "Ethiopian"
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
        "userId": "aYWhqgQpNlb4xae65XM6",
        "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1920px-Image_created_with_a_mobile_phone.png",
        "tags": [
            "Indian",
            "British",
            "Christian",
            "Ethiopian"
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
        "userId": "aYWhqgQpNlb4xae65XM6",
        "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1920px-Image_created_with_a_mobile_phone.png",
        "tags": [
            "Indian",
            "British",
            "Christian",
            "Ethiopian"
        ]
    }
]

export const userData = [
    {
        "id": "aYWhqgQpNlb4xae65XM6",
        "instagram": "",
        "socials": ["instagram"],
        "name": "Samuel Adekunle",
        "designs": [
            "gi5ZTnIaVgVcg22gjACo"
        ],
        "email": "ebnsamuel@gmail.com",
        "isTailor": false,
        "picture": "https://lh3.googleusercontent.com/a/ALm5wu2TDq6dFNBG98KhlbXK33HS9-cX33nGbKB3FQMQ2A=s96-c"
    }
]

export const tailorInfo = [
    {
        "reviewsData": [
            {
                "id": "iqGgwHgXBAAT1ShYDdva",
                "uploadTime": {
                    "_seconds": 1667060434,
                    "_nanoseconds": 188000000
                },
                "rating": {
                    "responseTime": 0,
                    "fit": 0,
                    "materialQuality": 0,
                    "price": 0,
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
    "facebook":<FacebookIcon />,
    "watsapp":<WhatsAppIcon />,
    "twitter":<TwitterIcon />,
    "gmail":<AlternateEmailIcon />
}

export const processData = (rowSize=3) => {
    const allPosts = []
    let triple = []

    designsData.map((design, index) => {

        const { id, price, uploadTime, tags, picture: clothPicture, userId, description, name: clothName } = design

        // const user = (userData.filter(user => user['id'] == userId))[0]

        const { isTailor, picture, name } = getUser(userId);

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

export const getUser = async (userId) => {
    // const user = (userData.filter(user => user['id'] == userId))[0]
    return await axios.get(`/api/users/${userId}`)
}