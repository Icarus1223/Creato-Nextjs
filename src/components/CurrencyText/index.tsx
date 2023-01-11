import { CURRENCIES } from "src/constants"

interface CurrencyTextProps {
    currency: string
}

const CurrencyText = ({ currency }: CurrencyTextProps) => {
    type Currencies = keyof typeof CURRENCIES
    let currencyLiteral: Currencies
    currencyLiteral = currency.toUpperCase() as Currencies
    return <>{CURRENCIES[currencyLiteral] + ' ' + currencyLiteral}</>
}

export default CurrencyText