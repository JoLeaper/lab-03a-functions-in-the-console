const jotaroKujo = {userName: 'Jotaro Kujo', standName: 'Star Platinum', standRange: 'C'};
const josephJoestar = {userName: 'Joseph Joestar', standName: 'Hermit Purple', standRange: 'D'};
const mohammadAvdol = {userName: 'Mohammad Avdol', standName: 'Magician\'s Red', standRange: 'C'};
const kakyoinNoriyaki = {userName: 'Kakyoin Noriyaki', standName: 'Hierophant Green', standRange: 'A'};
const jeanPierrePolnareff = {userName: 'Jean Pierre Polnareff', standName: 'Silver Chariot', standRange: 'C'};
const stardustCrusaders = [jotaroKujo, josephJoestar, mohammadAvdol, kakyoinNoriyaki, jeanPierrePolnareff];

console.log(stardustCrusaders);

const logsOutThings = (array) => {
    console.log('Here are your ' + array.length + ' stands, categorized by their effective range!');
    let closeRange = [];
    let midRange = [];
    let longRange = [];
    for(let i = 0; i < array.length; i++){
        switch(array[i].standRange) {
            case 'D':
            case 'E':
            closeRange.push(array[i]);
            break;

            case 'C':  
            case 'B':
            midRange.push(array[i]);
            break;

            case 'A':
            longRange.push(array[i]);
            break;
        }

    }        
        console.log('Close-Range:');
        console.log(closeRange);
        console.log('Mid-Range:')
        console.log(midRange);
        console.log('Long-Rage');
        console.log(longRange);
}

logsOutThings(stardustCrusaders);