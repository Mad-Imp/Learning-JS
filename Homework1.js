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

function calcCash(own) {
    return own.reduce((sum, current) => sum + current);
}

function makeBusiness(owner, cash, emp, director = 'Victor' ) {
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}.
And our employers: ${emp}.
And we have a sponsors: ${eu}${rus},unexpected sponsor.
Note. Be careful with ${firstEuSp}. It's a huge risk.`);
}
makeBusiness.apply(null, ['Sam', calcCash(cash), employersNames]);