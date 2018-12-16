import axios from 'axios';

export const getList = () => {
    return axios
    .get('http://localhost:3000/api/tasks', {
        headers:{"Content-Type": "application/json"}
    })
    .then(res => {
        return res.data;
    });
}

export const addToList = term => {
    return axios
    .post('http://localhost:3000/api/tasks', 
    {title: term},
    {
        headers:{"Content-Type": "application/json"}
    })
    .then(res => {
        console.log(res);
    });
}

export const deleteItem = term => {
 axios
    .delete(`http://localhost:3000/api/tasks/${term}`, {
        headers:{"Content-Type": "application/json"}
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log(err));
}

export const updateItem = (term,id) => {
    return axios
    .put(`http://localhost:3000/api/tasks/${id}`, 
    {title: term},
    {
        headers:{"Content-Type": "application/json"}
    })
    .then(res => {
        console.log(res);
    });
}