export default class CommentService {
    url = "https://jsonplaceholder.typicode.com/comments"



    async comments() {
        //запит на всіх
        return await fetch(this.url).then(value => value.json());
    }
    //одного
    async comment(id) {
        return await fetch(this.url + `/${id}`).then(value => value.json());
    }

}