import {ref} from 'vue'

const columns : any[]=[
    {name:'id', align:'right', label: 'ID', field:'id', sortable:true},
    {name:'title', align:'center', label: 'Title', field:'title', sortable:true},
    {name:'description', align:'center', label: 'Description', field:'description', sortable:true, format: (val:string) => {`${val.slice(0,40)}...`}},
]   

const rows = ref([
    {
        id:1,
        image:'images/DefultPostPic.png',
        title:'New postt',
        description:'here is the description :|',
    },
    {
        id:2,
        image:'images/DefultPostPic.png',
        title:'New postt',
        description:'here is the description :|',
    },
])

const pagination = ref({
    sortBy:'desc',
    descending:true,
    page:1,
    rowPerPage:5,
    rowNumber:100,
});

export {columns, rows, pagination}