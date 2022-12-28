import { Avatar } from "../Avatar"
import Icon from "../Icon"

interface BSKHomeProps {
    
}

export default function HomeCard(props: BSKHomeProps) {
    return (
        <div className="bskcard-home">
            <div className="bsk-avatar">
                <Avatar.CreatorAvatar size="lg" src="https://i.pravatar.cc/150?img=3" />
            </div>
            <div className="bsk-body">
                <div className="header">
                    <div className="font-extrabold text-neutral-700 text-sm">
                        <span>Owner Name</span>
                    </div>
                    <div className="font-extrabold text-error-500 text-xm inline-flex items-center">
                        <Icon icon="clock" className="mr-[5px] fill-error-500" />
                        <span>Posted 3 days ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}