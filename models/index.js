type KayakingTrip {
    date: DateTime! @default(value: now())
    duration: Number
    section: Section
    flow: Flow
    tags: [Tag]
    crew: [Person]
}

type Section {
    name: String!
    length: Float // in Miles
    class: ENUM[1,2,3,4,5]
    classModifier: ENUM['+','-']
}

type Flow {
    value: Number
    unit: ENUM['cfs','ft']
}

type Tag {
    name: String!
}

type Person {
    name: String!
}