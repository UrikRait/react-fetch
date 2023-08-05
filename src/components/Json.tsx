import React, { useState, useEffect } from 'react';


export function Json() {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    useEffect(() => {
        console.log('Пост запрос отрпавлен')
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type])
    return (
        <div>
            <h1>Данный ресурс: {type}</h1>
            <button className='px-2 border-2 border-indigo-600' onClick={() => setType('users')}>Пользователи</button>
            <button className='px-2 mx-2 border-2 border-indigo-600' onClick={() => setType('todos')}>Планы</button>
            <button className='px-2 border-2 border-indigo-600' onClick={() => setType('posts')}>Посты</button>
            <pre className='json__content'>{JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}