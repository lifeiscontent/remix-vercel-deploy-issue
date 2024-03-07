import collaborationUrl from '~/assets/homepage/collaboration.png?url'
import { imageUrl } from '~/utils/image'

export default function Route() {
    return <img
        alt="Collaboration"
        src={imageUrl(collaborationUrl, 606)}
        width={606}
    />

}