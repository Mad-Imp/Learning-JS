//задание: переписать код в современном стандарте

const employers = ['Alex', '', 'ludmila', 'Victor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers
    .filter(employer => employer.length > 0)
    .map(name => name.toLowerCase().trim());

const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;
const {eu: [firstEuSp, secondEuSp, thirdEuSp]} = sponsors;

function calcCash(own = 0) {
    let everyCash = Array.prototype.slice.call(arguments);
    let total = own;
    for (let i = 0; i < everyCash[1].length; i++) {
        total += +everyCash[1][i];
    }
    return total;
}

const money = calcCash(null, cash);

function makeBusiness(owner, cash, emp, director = 'Victor' ) {
    const sumSponsors = eu.concat(rus, 'unexpected sponsor');

    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}`);
    console.log('And we have a sponsors: ');
    console.log.apply(null, sumSponsors);
    console.log(`Note. Be careful with ${firstEuSp}. It's a huge risk.`);
}
makeBusiness.apply(null, ['Sam', money, employersNames]);