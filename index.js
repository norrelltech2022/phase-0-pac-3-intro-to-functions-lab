function shout(string) {
    return string.toUpperCase();
}

function whisper(string) {
    return string.toLowerCase();
}

function logShout(string) {
    console.log(string.toUpperCase());
}

function logWhisper(string) {
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate(string) {
    const canNotHear = "I can\'t hear you!";
    const canHearOne = "YES INDEED!";
    const canHearTwo = "I would love to!";

    if (string === string.toLowerCase()) {
        return canNotHear;
    } else if (string === string.toUpperCase()) {
        return canHearOne;
    } else if (string === "Let's have dinner together!") {
        return canHearTwo;
    }
}

console.log(shout("hello"));
console.log(whisper("HELLO"));
logWhisper("HELLO");
logShout("hello");
console.log(sayHiToHeadphonedRoommate("hello"));
console.log(sayHiToHeadphonedRoommate("HELLO"));
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));