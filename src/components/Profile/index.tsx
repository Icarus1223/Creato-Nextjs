import { useState } from "react";
import Image from "next/image"

interface ProfileProps {
    name: string,
    avatar: string,
    profileUrl: string,
    cateogries: string,
    bio?: string,
    youtube?: string,
    instagram?: string
}

import { Avatar } from "../Avatar"
import { Button } from "../Button";
import Dropdown from "../Dropdown";
import Icon from "../Icon";
import YoutubeImg from "../../assets/img/youtube.png";
import InstagramImg from "../../assets/img/instagram.png";
import styles from "./Profile.module.css"

export default function Profile(props: ProfileProps) {
    const [openMore, setOpenMore] = useState(false)

    return (
        <div className={styles["profile"]}>
            <div className="absolute top-[10px] right-[20px]">
                <Dropdown
                    className="right-0 top-[15px]"
                    open={openMore}
                    setOpen={setOpenMore}
                    trigger={
                        <div className="w-fit h-[20px] flex justify-center items-center cursor-pointer" onClick={() => setOpenMore(true)}>
                            <Icon icon="more" className="fill-shades-100 cursor-pointer" />
                        </div>
                    }
                    menu={[
                        <span className="font-normal text-sm p-1 w-full text-center" onClick={() => setOpenMore(false)}>Menu1</span>,
                        <span className="font-normal text-sm p-1 w-full text-center" onClick={() => setOpenMore(false)}>Menu2</span>
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
                    <div className="font-bold text-xs mb-[4px]"><span>{props.name}</span></div>
                    <div className="font-normal text-xxs text-neutral-900"><span>{props.cateogries}</span></div>
                </div>
                <div>
                    <Button.PrimaryButton
                        rounded="true"
                        value="Subscribe"
                    />
                </div>
            </div>
            {props.bio &&
                <div className="mt-[12px] text-xxs">
                    <span>{props.bio}</span>
                </div>
            }
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