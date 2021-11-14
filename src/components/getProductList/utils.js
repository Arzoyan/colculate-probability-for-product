

export const getProbability = (weight, allWeight) => {
    return (weight / allWeight * 100).toFixed(2) + "%";
}

const getRandomNumber = (maxIndex) => {
    return Date.now() % maxIndex
}

export const getRandomItemsWithProbability = (list, allWeight) => {
    const randomItems = {};
    const listLength = list.length;
    do {
        const randomIndex = getRandomNumber(listLength)
        if (randomItems.hasOwnProperty(randomIndex)) continue;
        randomItems[randomIndex] = {
                ...list[randomIndex],
                probability: getProbability(list[randomIndex].weight, allWeight)
            }
    } while (Object.values(randomItems).length !== 5)
    return Object.values(randomItems);
}