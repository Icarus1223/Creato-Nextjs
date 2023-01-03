import { useEffect, useState } from "react";

export const useOutsideAlerter = (ref: any, moreInfo: boolean) => {
    const [more, setMore] = useState(moreInfo)
    useEffect(() => {
        setMore(moreInfo)
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                if (moreInfo) setMore(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [ref, moreInfo])
    return more
}