import { CURRENCIES } from "src/constants"

interface CurrencyTextProps {
    currency: keyof typeof CURRENCIES,
}

const CurrencyText: React.FC<CurrencyTextProps> = ({ currency }) => {
    return <>{CURRENCIES[currency] + ' ' + currency}</>
}

export default CurrencyText