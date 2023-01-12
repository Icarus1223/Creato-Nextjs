import { useState } from "react";
import Image from "next/image"
import { Avatar } from "@/src/components/Avatar"
import { Button } from "@/src/components/Button";
import Dropdown from "@/src/components/Dropdown";
import Icon from "@/src/components/Icon";
import Bio from "@/src/components/Profile/Bio";
import YoutubeImg from "@/src/assets/img/youtube.png";
import InstagramImg from "@/src/assets/img/instagram.png";
import styles from "./Profile.module.css"

interface ProfileProps {
    name: string,
    avatar: string,
    profileUrl: string,
    cateogries: string,
    bio?: string,
    youtube?: string,
    instagram?: string
}

const Profile: React.FC<ProfileProps> = (props) => {
    const [openMore, setOpenMore] = useState(false)

    return (
        <div className={styles["profile"]}>
            <div className="absolute top-[10px] right-[20px]">
                <Dropdown
                    className="right-0 top-[15px] dark:bg-neutral-800"
                    open={openMore}
                    setOpen={setOpenMore}
                    trigger={
                        <div className="w-fit h-[20px] flex justify-center items-center cursor-pointer" onClick={() => setOpenMore(true)}>
                            <Icon icon="more" className="fill-shades-100 cursor-pointer" />
                        </div>
                    }
                    menu={[
                        <span key={0} className="font-normal text-sm p-1 w-full text-center dark:text-shades-0" onClick={() => setOpenMore(false)}>Copy link</span>,
                        <span key={1} className="font-normal text-sm p-1 w-full text-center dark:text-shades-0" onClick={() => setOpenMore(false)}>Cancel</span>
                    ]}
                />
            </div>
            <div className="flex justify-between items-center">
                <div><Avatar.CreatorAvatar size="sm" src={props.avatar} /></div>
                <div className="flex">
                    <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer">
                        <Image
                            alt="YoutubeImg"
                            src={YoutubeImg}
                        />
                    </div>
                    <div className="w-[40px] h-[40px] flex justify-center items-center cursor-pointer">
                        <Image
                            alt="IgImg"
                            src={InstagramImg}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-[16px] flex justify-between">
                <div>
                    <div className="font-bold text-xs mb-[4px] text-shades-0"><span>{props.name}</span></div>
                    <div className="font-normal text-xxs text-neutral-900 dark:text-neutral-300"><span>{props.cateogries}</span></div>
                </div>
                <div>
                    <Button.PrimaryButton
                        rounded="true"
                        value="Subscribe"
                    />
                </div>
            </div>
            <Bio bio={props.bio} />
            <div className="mt-[22px] flex justify-center">
                <Button.PrimaryButton
                    value="Edit Profile"
                    width="290px"
                >
                    <Icon icon="edit" />
                </Button.PrimaryButton>
            </div>
        </div>
    )
}

export default Profile