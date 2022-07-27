import { useSession } from "next-auth/react"
import Image from "next/image"

interface Props {
    seed?: string
    large?: boolean
}
function Avatar({ seed, large }: Props) {
    const { data: session } = useSession()

    return (
        <div className={`relative w-10 h-10 rounded-4 border-gray-300 overflow-hidden ${large && 'h-20 w-20'}`}>
            <Image src={`https://avatars.dicebear.com/api/open-peeps/${seed || session?.user?.name || "placeholder"}.svg`}
                layout="fill" />
        </div>
    )
}

export default Avatar