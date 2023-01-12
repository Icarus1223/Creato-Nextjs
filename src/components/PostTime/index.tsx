interface PostTimeProps {
    time: number
}

const values = [3600 * 24 * 30, 3600 * 24 * 7, 3600 * 24, 3600, 60];
const units = ["month", "week", "day", "hour", "min"];

const PostTime: React.FC<PostTimeProps> = (props) => {

    const addUnit = (value: number, unit: string) => {
        return value.toString() + " " + (value === 1 ? unit : unit + "s");
    }

    let res: string = "Posted ";
    const passTime = Math.abs(props.time)

    units.every((unit: string, index: number) => {
        const count = Math.floor(passTime / values[index]);
        if (count >= 1) {
            res += addUnit(count, unit);
            return false;
        }
        return true;
    })
    res += ' ago';

    return <>{res}</>
}

export default PostTime