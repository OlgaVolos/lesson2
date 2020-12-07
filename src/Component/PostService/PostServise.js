export class PostService {
     url = 'https://jsonplaceholder.typicode.com/posts'

  getAllPosts() {
     return  fetch(this.url)
          .then(value => value.json())
          .then(value => value);
          }
getPostsById(id){
         return fetch(`${this.url}/${id}`).then(value => value.json()).then(value => value)

}
}
