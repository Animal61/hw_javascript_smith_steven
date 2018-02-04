// for the presidents branch
var presidents = {
	cinc: [
		{firstName: 'Donald J.', lastName: 'Trump', termLength: 1, party: 'Republican', yearsOfPresidency: 1},
		{firstName: 'Barrack H.', lastName: 'Obama', termLength: 2, party: 'Democrat', yearsOfPresidency: 8},
		{firstName: 'George W.', lastName: 'Bush', termLength: 2, party: 'Republican', yearsOfPresidency: 8},
		{firstName: 'William J.', lastName: 'Clinton', termLength: '2 terms', party: 'Democrat', yearsOfPresidency: '8 years'},
		{firstName: 'George H. W.', lastName: 'Bush', termLength: '1 term', party: 'Republican', yearsOfPresidency: '4 year'}
		]
};

console.log(presidents.cinc[2].firstName + presidents.cinc[2].lastName);
