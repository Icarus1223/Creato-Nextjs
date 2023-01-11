import React from "react"
import { CURRENCIES } from "src/constants"

interface CurrencyTextProps {
    currency: keyof typeof CURRENCIES,
}

const CurrencyText = ({ currency }: CurrencyTextProps) => {
    return <React.Fragment>{CURRENCIES[currency] + ' ' + currency}</React.Fragment>
}

export default CurrencyText