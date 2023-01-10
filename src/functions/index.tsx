import { CURRENCIES } from "../constants"

export const displayCurrency = (localCurrency: string) => {
    const keys = Object.keys(CURRENCIES)
    const values = Object.values(CURRENCIES)
    const index = keys.findIndex(key => key === localCurrency.toUpperCase())
    return values[index] + ' ' + keys[index]
}

export const displayPostTime = (postTime: number) => {
    const passTime = Math.abs(postTime)
    let res: string = 'Posted'
    if (Math.floor(passTime / (3600 * 24 * 30)) >= 1) res = res + ' ' + Math.floor(passTime / (3600 * 24 * 30)) + '' + (Math.floor(passTime / (3600 * 24 * 30)) === 1 ? ' month ' : ' months ')
    else if (Math.floor(passTime / (3600 * 24 * 7)) >= 1) res = res + ' ' + Math.floor(passTime / (3600 * 24 * 7)) + '' + (Math.floor(passTime / (3600 * 24 * 7)) === 1 ? ' week ' : ' weeks ')
    else if (Math.floor(passTime / (3600 * 24)) >= 1) res = res + ' ' + Math.floor(passTime / (3600 * 24)) + '' + (Math.floor(passTime / (3600 * 24)) === 1 ? ' day ' : ' days ')
    else if (Math.floor(passTime / 3600) >= 1) res = res + ' ' + Math.floor(passTime / 3600) + '' + (Math.floor(passTime / 3600) === 1 ? ' hour ' : ' hours ')
    else if (Math.floor(passTime / 60) > 0) res = res + ' ' + Math.floor(passTime / 60) + '' + (Math.floor(passTime / 60) === 1 ? ' min ' : ' mins ')
    if (Math.floor(passTime / 60) > 0) res += 'ago'
    return res
}
