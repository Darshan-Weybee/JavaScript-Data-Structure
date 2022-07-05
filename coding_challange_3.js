const gameEvents = new Map([
    [17, "Goal"],
    [36, "Substitution"],
    [47, "Goal"],
    [61, "Substitution"],
    [64, "yellow card"],
    [69, "red card"],
    [70, "Substitution"],
    [72, "Substitution"],
    [76, "Goal"],
    [80, "Goal"],
    [92, "yellow card"]
]);

// console.log(new Set(gameEvents.values()));
// 1.
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2.
gameEvents.delete(64);
console.log(gameEvents);

// 3.
// console.log(...gameEvents.keys());
// const minute = [...gameEvents.keys()].pop();
// console.log(minute);

console.log(`An event happend, on average, every ${90/gameEvents.size} minutes`);

// 4.
for(const [key, value] of gameEvents){
    if(key <= 45)
         console.log(`[FIRST HALF] ${key}: ${value}`);
    else
         console.log(`[SECOND HALF] ${key}: ${value}`);
}


