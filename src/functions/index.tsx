import { CONSTANTS } from "../constants"

export const displayCurrency = (localCurrency: string) => {
    const foundIndex = CONSTANTS.CURRENCIES.findIndex((currency: string) => currency === localCurrency.toUpperCase())
    return CONSTANTS.CURRENCY_SYMBOLS[foundIndex] + ' ' + localCurrency.toUpperCase()
}
