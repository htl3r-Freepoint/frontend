import Axios from 'axios'

let url = 'https://freepoint.htl3r.com/api'

let post = function (query, data, then) {
    Axios.post(url + query, {data})
        .then(response => then(response))
}

export {post}