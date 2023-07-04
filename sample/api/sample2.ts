import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private http: HttpClient) {}

  saveUserFeedback(payload) {
    return this.http.post(
      'https://google.com',
      payload
    );
  }
}


export class Auth {
  login(emailId, passwd, userName = "guest-user") {
    console.log(emailId, passwd, userName);
  }
}