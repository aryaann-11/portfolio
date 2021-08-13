export default {
    name: 'processStage',
    title: 'Process Stage',
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
            name: 'stageImage',
            title: 'Stage Image',
            type: 'image'
        },
        {
            name: 'stageNumber',
            title: 'Stage Number',
            type: 'number',
            validation: Rule => Rule.required().min(1).warning('Min number for stage is 1')
        }
    ]
}