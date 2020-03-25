const jotaroKujo = {userName: 'Jotaro Kujo', standName: 'Star Platinum', standType: 'Close-Range'};
const josephJoestar = {userName: 'Joseph Joestar', standName: 'Hermit Purple', standType: 'Mid-Range'};
const mohammadAvdol = {userName: 'Mohammad Avdol', standName: 'Magician\'s Red', standType: 'Long-Range'};
const kakyoinNoriyaki = {userName: 'Kakyoin Noriyaki', standName: 'Hierophant Green', standType: 'Long-Range'};
const jeanPierrePolnareff = {userName: 'Jean Pierre Polnareff', standName: 'Silver Chariot', standType: 'Close-Range'};
const stardustCrusaders = [jotaroKujo, josephJoestar, mohammadAvdol, kakyoinNoriyaki, jeanPierrePolnareff];

console.log(stardustCrusaders);

const logsOutThings = (array) => {
    console.log('Here are your ' + array.length + ' things!');
    for(let i = 0; i < array.length; i++){
        console.log(array[i].standType);
        console.log(array[i]);
    }
}

logsOutThings(stardustCrusaders);