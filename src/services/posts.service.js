import http from '../http-common'
class PostService {
  getAll(){
    return http.get('/posts')
  }
}

export default new PostService();