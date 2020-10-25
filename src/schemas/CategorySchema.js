const CategorySchema = {
    name: 'Category',
    primaryKey: 'id',
    properties: {
        id: 'string',
        name: 'string',
        color: {type: 'string', default: '#fff'},
        isDefault: {type: 'bool', default: false},
        isCredit: {type: 'bool', default: false},
        isDebit: {type: 'bool', deafult: false},
        order: {tyoe: 'int', default: 0},
        entries: 'Entry[]',
    }
};

export default CategorySchema;