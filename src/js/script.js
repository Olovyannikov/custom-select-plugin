import {Select} from './modules/custom-select';

const select = new Select(`#custom-select`, {
    placeholder: '-- выберите опцию --',
    //selectedId: '3',
    data: [
        {id: '1', value: 'React'},
        {id: '2', value: 'Vue'},
        {id: '3', value: 'Angular'}
    ],
    onSelect(item) {
        console.log('selected item: ', item)
    }
});

window.s = select
