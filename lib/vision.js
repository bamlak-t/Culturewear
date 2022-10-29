import { ImageAnnotatorClient } from '@google-cloud/vision'

const client = new ImageAnnotatorClient()

const getImageLabels = async (url) => {
    const [result] = await client.labelDetection(url)
    const labels = result.labelAnnotations

    return labels.map(label => label.description)
}