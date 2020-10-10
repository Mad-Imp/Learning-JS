//задание: переписать код в современном стандарте

const employers = ['Alex', '', 'ludmila', 'Victor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers
    .filter(employer => employer)
    .map(name => name.toLowerCase().trim());

let sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};

const {cash, eu, rus} = sponsors;
const sumSponsors = [...eu, ...rus, 'unexpected sponsor'];

const calcCash = (own = 0) => own.reduce((sum, current) => sum + current);

const money = calcCash(cash);

const makeBusiness = ({cash, emp, owner = 'Sam', director = 'Victor'}) => {
    console.log(`We have a business. Owner: ${owner}, director: ${director}. Our budget: ${cash}. And our employers: ${emp}.
And we have a sponsors: ${sumSponsors}.
Note. Be careful with ${eu[0]}. It's a huge risk.`);
}

makeBusiness({cash: money, emp: employersNames});