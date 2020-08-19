const enhancer = require('./enhancer.js');
// test away!


it('should reset the durability to 100', () => {
    const item = {
        "name": 'thing',
        "durability": 30,
        "enhancement": 3
    };
    
    const newItem = {
        "name": 'thing',
        "durability": 100,
        "enhancement": 3
    };

    expect(enhancer.repair(item)).toStrictEqual(newItem);
});

it('should increase the enhancement by 1', () => {
    const item = {
        "name": 'thing',
        "durability": 30,
        "enhancement": 2
    }

    const newItem = {
        "name": 'thing',
        "durability": 30,
        "enhancement": 3
    };
    
    const largerItem = {
        "name": 'thing',
        "durability": 30,
        "enhancement": 20
    }

    const largerNewItem = {
        "name": 'thing',
        "durability": 30,
        "enhancement": 20
    };

    expect(enhancer.success(item)).toStrictEqual(newItem);
    expect(enhancer.success(largerItem)).toStrictEqual(largerNewItem);
}); 

it('enhancement fail function should work', () => {
    const item = {
        "name": 'thing',
        "durability": 30,
        "enhancement": 3
    };

    const newItem = {
        "name": 'thing',
        "durability": 25,
        "enhancement": 3
    };

    const itemTwo = {
        "name": 'thing',
        "durability": 30,
        "enhancement": 15
    };
    
    const newItemTwo = {
        "name": 'thing',
        "durability": 20,
        "enhancement": 15
    };

    const itemThree = {
        "name": 'thing',
        "durability": 20,
        "enhancement": 16
    };
    
    const newItemThree = {
        "name": 'thing',
        "durability": 10,
        "enhancement": 16
    };

    const itemFour = {
        "name": 'thing',
        "durability": 30,
        "enhancement": 18
    };
    
    const newItemFour = {
        "name": 'thing',
        "durability": 20,
        "enhancement": 17
    };

    expect(enhancer.fail(item)).toStrictEqual(newItem);
    expect(enhancer.fail(itemTwo)).toStrictEqual(newItemTwo);
    expect(enhancer.fail(itemThree)).toStrictEqual(newItemThree);
    expect(enhancer.fail(itemFour)).toStrictEqual(newItemFour);
})