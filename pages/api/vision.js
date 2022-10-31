import { getImageLabels } from "../../lib/vision"

export default async (req, res) => {
    const labels = await getImageLabels("gs://culturewear-bgn-2022.appspot.com/designs/e99c4de6d8034b75ee7bf388cf4ff707.jpg")
    res.status(200).json({ tags: labels })
}