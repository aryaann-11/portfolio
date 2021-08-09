export default {
    name: 'skill',
    title: 'Skill',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'skillImage',
            title: 'Sill Image',
            type: 'image'
        },
        {
            name: 'link',
            title: 'Link',
            type: 'string'
        },
        {
            name: 'level',
            title: 'Level',
            type: 'number',
            validation: Rule => Rule.required().min(0).max(5).warning('Level can be between 0 and 5 only')
        }
    ]
}