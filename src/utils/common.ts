/**
 * 重组数据源，一维数组变成二维数组
 * [{},{},{}]=>[[{},{}],[{}]]
 * params {array} targetArr  需要重组的数据
 * params {number} num 二维数组里面的数据个数
 * return newArr 新数组
 */
export const packageRecmdData = (targetArr: object[], num: number): any[] => {
    targetArr = JSON.parse(JSON.stringify(targetArr))
    const newArr: any[] = []
    let arr: any[] = []
    targetArr.map((item: any) => {
        arr.push(item)
        if (arr.length % num === 0) {
            newArr.push(arr)
            arr = []
        }
    })
    if (targetArr.length % num !== 0) {
        newArr.push(targetArr.slice(targetArr.length - targetArr.length % num))
    }
    return newArr
}

/**
 * 判断按顺序点击按钮
 * params {string} clickFlag 控制是否能点击按钮
 * params {string} isDisabled 按钮的disabled 控制状态
 * params {boolean} enableUnlockIndex 是否需要控制不可点击
 */
export const handelClickBtn = (
    targetArr: any[],
    clickFlag: string,
    isDisabled: string,
    enableUnlockIndex: boolean
): any[] => {
    targetArr = JSON.parse(JSON.stringify(targetArr))
    targetArr.map((item: any, index: number) => {
        if (enableUnlockIndex) {
            // 第一个能点击
            if (!index) {
                targetArr[isDisabled] = false
            }
            // 第一个以后
            if (index) {
                item[isDisabled] = !targetArr[index - 1][clickFlag]
            }
        } else {
            item[isDisabled] = false
        }
    })
    return targetArr
}