interface BioProps {
    bio?: string
}

const Bio: React.FC<BioProps> = (props) => {
    if (typeof props.bio === 'undefined') return null

    return (
        <div className="mt-[12px] text-xxs text-shades-0">
            <span>{props.bio}</span>
        </div>
    )
}

export default Bio