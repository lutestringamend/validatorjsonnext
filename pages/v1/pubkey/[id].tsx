import { data } from "../../../data"

interface EntityResult {
    entity: string | null;
}

export const getStaticProps = async ({ params } : any) => {
    const results = data.filter(d => d.validator_pubkey.toString() === params.id)
    return {
        props: {
            result: results[0]
        }
    }
}

export const getStaticPaths = async () => {
    const paths = data.map(result => ({
        params: { id: result.validator_pubkey.toString() },
    }))
    return { paths, fallback: false }
}

export default ({ result } : any ) => {
    let resultObject : EntityResult = { entity : null }
    try {
        resultObject["entity"] = result.Label.substring(0,2) === "0x" ? null : result.Label
    } catch (err) {
        resultObject["entity"] = JSON.stringify(err)
    }
    let text = JSON.stringify(resultObject)
    return (
        <p> { text } </p>
    )
} 