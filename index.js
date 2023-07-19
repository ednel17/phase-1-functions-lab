function distanceFromHqInBlocks(blockNumber) {
    return Math.abs(blockNumber - 42);
};

function distanceFromHqInFeet(blockInFeet){
    return (distanceFromHqInBlocks(blockInFeet)*264);
};

function distanceTravelledInFeet(start, end){
    const blocksTravelled = Math.abs(end - start)
    return blocksTravelled * 264;
};

function calculatesFarePrice(start, end){
    const distance = distanceTravelledInFeet(start, end);

    if (distance <= 400){
        return 0;
    } else if (distance > 400 && distance <= 2000){
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

