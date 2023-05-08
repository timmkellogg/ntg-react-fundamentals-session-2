function getFavoriteNumber(): number {
    return 26;
}

const car: { make: string, model: string, yearBuilt: number, selfDriving: boolean } = {
    make: 'Honda',
    model: 'Civic',
    yearBuilt: 2017,
    selfDriving: false
};

car.yearBuilt = '2022' // err