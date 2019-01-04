//Composition is a strong type of aggregation where each component has no independent life without its owner to aggregate:

var person = {

    name: "John",
    surname: "Smith",
    adress:{             //strict relation
            street: "123 Duncannon Street",
            city:"London",
            country:"UK"
    }
}