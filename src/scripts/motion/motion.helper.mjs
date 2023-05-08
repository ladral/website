function isElementLeavingBottom(leaveInfo) {
    if (!leaveInfo.boundingClientRect || !leaveInfo.boundingClientRect.top) return false
    return (leaveInfo.boundingClientRect.top > 0)
}


export { isElementLeavingBottom };