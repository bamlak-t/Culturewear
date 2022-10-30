import { ImageAnnotatorClient } from '@google-cloud/vision'

const client = new ImageAnnotatorClient()

const getImageLabels = async (url) => {
    const [result] = await client.labelDetection(url)
    const labels = result.labelAnnotations
    return labels.map(label => label.description)
}

const detectAdultContent = async (url) => {
    const [result] = await client.safeSearchDetection(url)
    const detections = result.safeSearchAnnotation
    return detections
}