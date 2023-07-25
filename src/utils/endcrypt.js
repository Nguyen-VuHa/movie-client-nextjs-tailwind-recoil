const generatorPosition = (min, max) => {
    return Math.floor((Math.random())*(max-min+1))+min
}

const FIRT_STRING = 10

export const handleEnCodeString = (str, arrHash) => {
    let _a = generatorPosition(1,5)
    let _b = generatorPosition(5,10)

    let strHash = ''

    strHash += [str.slice(0, 5).slice(0, _a), arrHash[0], str.slice(0, 5).slice(_a)].join('')
    strHash += [str.slice(5, 10).slice(0, _b), arrHash[1], str.slice(5, 10).slice(_b)].join('')

    if(str.length > 100) {
        let position = Math.floor((str.length - 20) / arrHash.length)

        str = str.slice(FIRT_STRING, str.length)

        let index = 0
        for(let i = 1; i <= arrHash.length; i++) {
            let gnP = generatorPosition(index, i * position)
            strHash += [str.slice(index, i * position).slice(0, gnP), arrHash[i], str.slice(index, i * position).slice(gnP)].join('')
            index = i * position

            if(i === arrHash.length) {
                strHash += str.slice(i * position, str.length)
            }
        }
        
    } else {
        let position = Math.floor(str.length / arrHash.length);
        let index = 0;
        for(let i = 1; i <= arrHash.length; i++) {
            let gnP = generatorPosition(index, i * position);
            strHash += [str.slice(index, i * position).slice(0, gnP), arrHash[i], str.slice(index, i * position).slice(gnP)].join('');
            index = i * position;

            if(i === arrHash.length) {
                strHash += str.slice(i * position, str.length);
            }
        }
    }
    
    return strHash.trim()
}

export const handleEnCodeKey = (strKey) => {
    let arrStr = strKey.split('')
    let arrHash = []

    arrStr.forEach(arr => {
        arrHash.push(handleReturnEnCode(arr))
    });
    
    return arrHash
}

const handleReturnEnCode = (str) => {
    switch (str) {
        case '0':
            return process.env.NEXT_PUBLIC_END_CODE_0
        case '1':
            return process.env.NEXT_PUBLIC_END_CODE_1
        case '2':
            return process.env.NEXT_PUBLIC_END_CODE_2
        case '3':
            return process.env.NEXT_PUBLIC_END_CODE_3
        case '4':
            return process.env.NEXT_PUBLIC_END_CODE_4
        case '5':
            return process.env.NEXT_PUBLIC_END_CODE_5
        case '6':
            return process.env.NEXT_PUBLIC_END_CODE_6
        case '7':
            return process.env.NEXT_PUBLIC_END_CODE_7
        case '8':
            return process.env.NEXT_PUBLIC_END_CODE_8
        case '9':
            return process.env.NEXT_PUBLIC_END_CODE_9
    }
}